#!/usr/bin/env node
/**
 * LinkedIn publishing CLI for TheRedScroll.
 *
 * Usage:
 *   node scripts/linkedin/publish.mjs auth                 One-time browser login. Stores a 60-day token.
 *   node scripts/linkedin/publish.mjs whoami               Show which member the stored token belongs to.
 *   node scripts/linkedin/publish.mjs publish --dry-run    Preview exactly what would be posted.
 *   node scripts/linkedin/publish.mjs publish              Publish the post with the image.
 *   node scripts/linkedin/publish.mjs publish --text-only  Publish without the image.
 *
 * Config lives in .env.linkedin at the project root (gitignored).
 * The OAuth token is cached in scripts/linkedin/.token.json (gitignored).
 *
 * API: Share on LinkedIn (ugcPosts) + Sign In with LinkedIn using OpenID Connect.
 * Both products must be enabled on the app, and the redirect URI must be
 * registered in the app's Auth settings.
 */
import http from 'node:http';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { exec } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
dotenv.config({ path: path.join(ROOT, '.env.linkedin') });

const CLIENT_ID = process.env.LINKEDIN_CLIENT_ID;
const CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET;
const REDIRECT_URI = process.env.LINKEDIN_REDIRECT_URI || 'http://localhost:8765/callback';
const SCOPES = 'openid profile w_member_social';

const TOKEN_FILE = path.join(HERE, '.token.json');
const POST_FILE = path.join(HERE, 'post-content.txt');
const IMAGE_FILE = path.join(ROOT, 'public', 'images', 'blog', 'aigc-batch-grid.webp');

function fail(message) {
  console.error(`\nError: ${message}\n`);
  process.exit(1);
}

function requireConfig() {
  if (!CLIENT_ID || !CLIENT_SECRET) {
    fail('Missing LINKEDIN_CLIENT_ID or LINKEDIN_CLIENT_SECRET in .env.linkedin');
  }
}

function loadToken() {
  if (!fs.existsSync(TOKEN_FILE)) {
    fail('No token found. Run: node scripts/linkedin/publish.mjs auth');
  }
  const token = JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf8'));
  if (Date.now() > token.expires_at) {
    fail('Token expired. Run: node scripts/linkedin/publish.mjs auth');
  }
  return token;
}

async function api(url, options = {}, accessToken) {
  const res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'X-Restli-Protocol-Version': '2.0.0',
      ...options.headers,
    },
  });
  const text = await res.text();
  let data = {};
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { raw: text };
  }
  if (!res.ok) {
    throw new Error(`${options.method || 'GET'} ${url} -> ${res.status}: ${text.slice(0, 500)}`);
  }
  return { data, headers: res.headers };
}

async function userinfo(accessToken) {
  const { data } = await api('https://api.linkedin.com/v2/userinfo', {}, accessToken);
  return data;
}

async function auth() {
  requireConfig();
  const state = crypto.randomBytes(16).toString('hex');
  const redirect = new URL(REDIRECT_URI);
  const port = Number(redirect.port || 80);

  const authUrl = new URL('https://www.linkedin.com/oauth/v2/authorization');
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('client_id', CLIENT_ID);
  authUrl.searchParams.set('redirect_uri', REDIRECT_URI);
  authUrl.searchParams.set('state', state);
  authUrl.searchParams.set('scope', SCOPES);

  const code = await new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const u = new URL(req.url, `http://localhost:${port}`);
      if (u.pathname !== redirect.pathname) {
        res.writeHead(404);
        res.end();
        return;
      }
      const error = u.searchParams.get('error');
      const gotCode = u.searchParams.get('code');
      const gotState = u.searchParams.get('state');
      const ok = !error && gotCode && gotState === state;
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(
        ok
          ? '<h3>LinkedIn connected. You can close this tab and return to the terminal.</h3>'
          : `<h3>LinkedIn auth failed: ${error || 'invalid response'}. You can close this tab.</h3>`,
      );
      server.close();
      if (ok) resolve(gotCode);
      else reject(new Error(error ? `${error}: ${u.searchParams.get('error_description') || ''}` : 'State mismatch or missing code'));
    });
    server.listen(port, () => {
      console.log(`Waiting for LinkedIn login (callback on ${REDIRECT_URI})...`);
      console.log('If a browser tab does not open, paste this URL into your browser:\n');
      console.log(authUrl.toString() + '\n');
      if (process.platform === 'win32') exec(`start "" "${authUrl.toString()}"`);
      else if (process.platform === 'darwin') exec(`open "${authUrl.toString()}"`);
      else exec(`xdg-open "${authUrl.toString()}"`);
    });
    setTimeout(() => {
      server.close();
      reject(new Error('Timed out waiting for the browser login (5 minutes).'));
    }, 5 * 60 * 1000).unref();
  });

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: REDIRECT_URI,
  });
  const res = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  const data = await res.json();
  if (!res.ok || !data.access_token) {
    fail(`Token exchange failed: ${JSON.stringify(data)}`);
  }

  const token = {
    access_token: data.access_token,
    expires_at: Date.now() + data.expires_in * 1000,
  };
  fs.writeFileSync(TOKEN_FILE, JSON.stringify(token, null, 2));

  const me = await userinfo(token.access_token);
  console.log(`\nConnected as ${me.name} (sub: ${me.sub}).`);
  console.log(`Token stored in scripts/linkedin/.token.json, valid until ${new Date(token.expires_at).toDateString()}.`);
  console.log('\nNext: node scripts/linkedin/publish.mjs publish --dry-run');
}

async function whoami() {
  const token = loadToken();
  const me = await userinfo(token.access_token);
  console.log(`Token belongs to: ${me.name} (sub: ${me.sub})`);
  console.log(`Valid until: ${new Date(token.expires_at).toDateString()}`);
}

async function toJpeg(file) {
  const sharp = (await import('sharp')).default;
  return sharp(file).jpeg({ quality: 90 }).toBuffer();
}

async function registerUpload(accessToken, author) {
  const { data } = await api(
    'https://api.linkedin.com/v2/assets?action=registerUpload',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        registerUploadRequest: {
          recipes: ['urn:li:digitalmediaRecipe:feedshare-image'],
          owner: author,
          serviceRelationships: [
            { relationshipType: 'OWNER', identifier: 'urn:li:userGeneratedContent' },
          ],
        },
      }),
    },
    accessToken,
  );
  const mechanism =
    data.value.uploadMechanism['com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest'];
  return { uploadUrl: mechanism.uploadUrl, asset: data.value.asset };
}

async function uploadImage(accessToken, uploadUrl, buffer) {
  const res = await fetch(uploadUrl, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/octet-stream',
    },
    body: buffer,
  });
  if (!res.ok) {
    throw new Error(`Image upload failed: ${res.status} ${await res.text()}`);
  }
}

async function publish(flags) {
  const dryRun = flags.includes('--dry-run');
  const textOnly = flags.includes('--text-only');

  if (!fs.existsSync(POST_FILE)) fail(`Post content file not found: ${POST_FILE}`);
  const text = fs.readFileSync(POST_FILE, 'utf8').trim();
  if (!text) fail('Post content file is empty.');
  if (text.length > 3000) fail(`Post is ${text.length} characters. LinkedIn's limit is 3,000.`);

  const token = loadToken();
  const me = await userinfo(token.access_token);
  const author = `urn:li:person:${me.sub}`;

  console.log('--- Post preview -------------------------------------------');
  console.log(`Author:  ${me.name} (personal profile)`);
  console.log(`Length:  ${text.length} characters`);
  console.log(`Image:   ${textOnly ? 'none (text only)' : IMAGE_FILE}`);
  console.log('-------------------------------------------------------------');
  console.log(text);
  console.log('-------------------------------------------------------------');

  if (dryRun) {
    console.log('\nDry run. Nothing was published.');
    console.log('To publish for real: node scripts/linkedin/publish.mjs publish');
    return;
  }

  let media;
  if (!textOnly) {
    if (!fs.existsSync(IMAGE_FILE)) fail(`Image not found: ${IMAGE_FILE}`);
    console.log('\nConverting image to JPEG and uploading...');
    const jpeg = await toJpeg(IMAGE_FILE);
    const { uploadUrl, asset } = await registerUpload(token.access_token, author);
    await uploadImage(token.access_token, uploadUrl, jpeg);
    media = asset;
    console.log(`Image uploaded: ${asset}`);
  }

  const shareContent = {
    shareCommentary: { text },
    shareMediaCategory: media ? 'IMAGE' : 'NONE',
  };
  if (media) {
    shareContent.media = [{ status: 'READY', media }];
  }

  console.log('Publishing post...');
  const { data, headers } = await api(
    'https://api.linkedin.com/v2/ugcPosts',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        author,
        lifecycleState: 'PUBLISHED',
        specificContent: { 'com.linkedin.ugc.ShareContent': shareContent },
        visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' },
      }),
    },
    token.access_token,
  );

  const id = data.id || headers.get('x-restli-id');
  console.log('\nPublished.');
  console.log(`Post URN: ${id}`);
  console.log(`View it:  https://www.linkedin.com/feed/update/${id}/`);
}

const [command, ...flags] = process.argv.slice(2);
try {
  if (command === 'auth') await auth();
  else if (command === 'whoami') await whoami();
  else if (command === 'publish') await publish(flags);
  else {
    console.log('Usage: node scripts/linkedin/publish.mjs <auth|whoami|publish> [--dry-run] [--text-only]');
    process.exit(command ? 1 : 0);
  }
} catch (err) {
  fail(err.message);
}
