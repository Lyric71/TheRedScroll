import re, json, os

files = {
    "homepage (/)": "tmp_home.html",
    "/about/": "tmp_about.html",
    "/contact/": "tmp_contact.html",
    "/services/": "tmp_services.html",
    "/insights/": "tmp_insights.html",
    "/pricing/": "tmp_pricing.html",
    "/platforms/wechat/": "tmp_wechat.html",
}

base = r"C:\Users\cyril\Project\TheRedScroll"

for label, fname in files.items():
    path = os.path.join(base, fname)
    with open(path, "r", encoding="utf-8", errors="replace") as f:
        html = f.read()
    pattern = r'<script[^>]+type=["\']application/ld\+json["\'][^>]*>(.*?)</script>'
    blocks = re.findall(pattern, html, re.DOTALL | re.IGNORECASE)
    print(f"\n{'='*60}")
    print(f"PAGE: {label}  |  JSON-LD blocks found: {len(blocks)}")
    print('='*60)
    for i, raw in enumerate(blocks):
        raw = raw.strip()
        try:
            parsed = json.loads(raw)
            print(f"  Block {i}: @type={parsed.get('@type','?')}  @context={parsed.get('@context','?')}")
            print(f"  Full JSON: {json.dumps(parsed, indent=2, ensure_ascii=False)}")
        except json.JSONDecodeError as e:
            print(f"  Block {i}: PARSE ERROR - {e}")
            print(f"  Raw: {raw[:300]}")
    if not blocks:
        print("  (no JSON-LD found)")

# Also extract any microdata or rdfa hints
for label, fname in files.items():
    path = os.path.join(base, fname)
    with open(path, "r", encoding="utf-8", errors="replace") as f:
        html = f.read()
    itemprop = len(re.findall(r'itemprop=', html, re.IGNORECASE))
    vocab = len(re.findall(r'vocab=', html, re.IGNORECASE))
    typeof = len(re.findall(r'typeof=', html, re.IGNORECASE))
    if itemprop or vocab or typeof:
        print(f"\nNon-JSON-LD schema on {label}: itemprop={itemprop}, vocab={vocab}, typeof={typeof}")
