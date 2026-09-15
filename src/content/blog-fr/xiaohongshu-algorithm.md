---
title: "Algorithme Xiaohongshu : comprendre la diffusion"
description: "Les travaux des ingénieurs de Xiaohongshu éclairent la sélection des notes. Peu de recettes chiffrées reprises en anglais s’appuient sur ces travaux."
metaTitle: "Algorithme Xiaohongshu : lire sa diffusion"
metaDescription: "Ce que les ingénieurs publient sur l’algorithme Xiaohongshu, les chiffres qui manquent et les indicateurs à suivre dans les statistiques de vos notes."
publishDate: 2026-09-15
author: "TheRedScroll"
platforms: ["rednote"]
category: "Plateformes"
keywords: ["algorithme Xiaohongshu", "distribution Xiaohongshu", "algorithme RedNote", "recherche Xiaohongshu", "statistiques des notes"]
featured: false
featuredImage: "/images/blog/xiaohongshu-algorithm.webp"
---

Quelques centaines de vues, puis plus rien. Pour expliquer ce plateau, les conseils abondent : paliers de diffusion, points attribués aux interactions. Les travaux des ingénieurs de Xiaohongshu permettent de faire le tri entre ce qui est documenté et ce qui ne l’est pas.

| Question | Ce que la plateforme a publié | Source |
|---|---|---|
| La sélection se fait-elle par étapes ? | Oui : rappel, classement grossier puis classement fin | Équipe technique Xiaohongshu, mars 2023 |
| Combien de personnes voient la note au départ ? | Aucun effectif publié | Non publié |
| Combien vaut un enregistrement face à un « j’aime » ? | Aucune pondération publiée | Non publié |
| À quelle vitesse le système réagit-il ? | Environ 30 minutes d’attente auparavant pour recueillir les interactions ; mises à jour désormais à la minute | Équipe technique Xiaohongshu, mars 2023 |
| Les nouvelles notes ont-elles leur chance ? | Les notes de moins d’un jour représentent près de la moitié des impressions du fil d’accueil | Équipe technique Xiaohongshu, mars 2023 |
| Quelle place occupe la recherche ? | 800 millions de recherches par jour ; 77 % des utilisateurs quotidiens cherchent à résoudre un problème | Chiffre de la plateforme et Huxiu, mai 2026 |

Sur ces six questions, deux n’ont aucune réponse chiffrée publique. Combler ce vide avec une formule trouvée ailleurs ne le fait pas disparaître. Les sources de cet article ont toutes fait l’objet de deux vérifications en septembre 2026.

## Les paliers de diffusion, vus depuis le système

Le « bassin de trafic » (流量池) appartient au vocabulaire des professionnels. Xiaohongshu (小红书) décrit autrement la sélection des notes validées : ses publications techniques exposent une succession d’opérations.

> Au premier semestre 2021, les principaux modules de rappel, de classement
> grossier et de classement fin du fil d’accueil étaient actualisés chaque
> jour. L’équipe a refondu le rappel, les index et l’apprentissage pour passer
> à des mises à jour à la minute.
> Source : département technique et de distribution intelligente de
> Xiaohongshu (小红书技术部), mars 2023. https://www.6aiq.com/article/1679451572481

D’abord, le rappel retient des notes pouvant intéresser une personne. Un classement sommaire en écarte une partie, avec peu de calculs. Un classement plus précis ordonne celles qui restent. Ce travail se répète chaque fois qu’un utilisateur actualise son fil.

Ces travaux ne décrivent pas un premier envoi à 200 destinataires fixes. Chaque note dispute des places aux autres contenus retenus. Tant qu’elle en obtient, sa portée augmente ; c’est cette progression que les professionnels décrivent par paliers.

Le volume publié donne la mesure de cette concurrence.

> Les utilisateurs de Xiaohongshu publient plus de 9 millions de notes et
> déposent plus de 70 millions de commentaires par jour.
> Source : conférence WILL 2026 de Xiaohongshu (小红书), rapportée par 100EC
> (网经社), décembre 2025. https://www.100ec.cn/detail--6655530.html

Les effectifs de ces prétendus paliers restent inconnus. Les séquences « 200, puis 2 000, puis 20 000 » passent d’un conseil professionnel à l’autre sans chiffre des ingénieurs pour les étayer. Elles n’entrent pas dans notre modèle.

## Quatre signaux pour lire l’algorithme Xiaohongshu

Les publications de la plateforme éclairent quatre aspects de la diffusion. Elles ne donnent pas leur pondération respective.

| Signal | Ce que lit le système | Votre marge d’action | Poids publié |
|---|---|---|---|
| Sujet | Image, vidéo, texte et mots-dièse ensemble | Couverture, première ligne, thèmes | Aucun |
| Correspondance | Les utilisateurs pour lesquels la note est retenue | Les mots employés par l’acheteur | Aucun |
| Premières réactions | Clics, lecture, mentions « j’aime », enregistrements, commentaires, abonnements | Accroche, premier écran, question posée | Aucun |
| Conformité | La situation de la note et du compte | Déclaration des collaborations, véracité des affirmations | Condition d’accès, pas coefficient |

**Le sujet** se lit aussi dans l’image. Travailler seulement la légende laisse de côté une partie du contenu analysé.

> La compréhension multimodale des contenus intervient dans la recherche,
> la recommandation et les transactions de Xiaohongshu. Elle sert notamment
> à comprendre les vidéos courtes, évaluer la qualité des contenus et
> retrouver des contenus à partir de plusieurs formats.
> Source : QbitAI (量子位), avril 2022. https://www.qbitai.com/2022/04/34112.html

Publié en 2022, ce constat invite à soigner les repères en chinois sur la couverture. Il ne suffit pas de choisir une belle photographie.

**La correspondance avec le public** se joue dès le rappel. Une note écartée à ce stade ne parvient pas aux acheteurs visés. Le vocabulaire compte : « vestes de randonnée » (冲锋衣) exprime un besoin plus précis qu’une formule de marque sur les « vêtements d’extérieur durables ».

**Les réactions initiales** donnent aux modèles la matière de leur apprentissage.

> Une interaction, comme un « j’aime » ou un enregistrement, indique un intérêt.
> Lorsque cet intérêt est nouveau, un système plus rapide l’apprend plus tôt
> et peut proposer des notes apparentées pendant la même séance de lecture.
> Source : département technique et de distribution intelligente de
> Xiaohongshu (小红书技术部), mars 2023. https://www.6aiq.com/article/1679451572481

**La conformité** conditionne l’accès à la diffusion. Les restrictions qu’elle peut entraîner sont examinées plus bas.

Reste le barème souvent cité : un point pour une mention « j’aime » ou un enregistrement, quatre pour un commentaire ou un partage, huit pour un abonnement. Il ne figure ni dans les documents de Xiaohongshu, ni dans ses exposés techniques, ni dans un dépôt officiel. Même sa référence chinoise habituelle le décrit comme une formule qui circule. Nous n’utilisons pas cette formule pour établir un budget de campagne.

## Ce qui se joue dans la première heure

La place des nouveautés dans Xiaohongshu (小红书) explique l’importance du démarrage. L’ancien système attendait environ trente minutes pour recueillir les interactions avant de les exploiter.

> Les notes publiées depuis moins d’un jour représentaient déjà une part
> élevée des impressions du fil d’accueil. Pendant la période étudiée,
> cette part a rapidement augmenté pour approcher la moitié.
> Source : département technique et de distribution intelligente de
> Xiaohongshu (小红书技术部), mars 2023. https://www.6aiq.com/article/1679451572481

Une note dispose donc de peu de temps avant que la suivante ne vienne lui disputer l’attention. Le lendemain apporte déjà une nouvelle offre de contenus.

> La méthode traditionnelle attend environ 30 minutes après l’affichage
> d’un contenu avant de collecter les interactions utilisées pour entraîner
> les modèles.
> Source : département technique et de distribution intelligente de
> Xiaohongshu (小红书技术部), mars 2023. https://www.6aiq.com/article/1679451572481

C’est ce temps d’attente que les ingénieurs ont cherché à réduire.

> Le passage de mises à jour quotidiennes à des mises à jour à la minute a
> accru de plus de 10 % le temps moyen passé dans le fil, de plus de 15 %
> les interactions et de près de 50 % l’efficacité des nouvelles notes.
> Source : département technique et de distribution intelligente de
> Xiaohongshu (小红书技术部), mars 2023. https://www.6aiq.com/article/1679451572481

Pour une marque, le travail commence dès la publication : répondre aux commentaires et choisir les moments où le public chinois consulte son téléphone. Six notes successives, puis neuf jours de silence, ne remplacent pas ce suivi. À chaque publication, la concurrence a changé.

## La recherche prolonge ce que le fil a lancé

Beaucoup de marques étrangères concentrent leurs efforts sur le fil de Xiaohongshu (小红书). La baisse des vues après la première semaine leur paraît alors incompréhensible. La recherche répond à une autre logique, plus durable, et mérite son propre travail éditorial.

> 77 % des utilisateurs actifs quotidiens de Xiaohongshu utilisent la
> recherche pour résoudre un problème ; 75 % consultent le fil recommandé.
> Source : Huxiu (虎嗅), mai 2026. https://www.huxiu.com/article/4861801.html

Ces usages se recoupent, d’où un total supérieur à 100 %. La recherche concerne une grande partie du public quotidien.

> Xiaohongshu a dépassé 400 millions d’utilisateurs actifs mensuels et
> 800 millions de recherches quotidiennes.
> Source : rapport Xiaohongshu (小红书), repris par Beijing Business Today
> (北京商报) via Sina Finance, mai 2026.
> https://finance.sina.com.cn/jjxw/2026-05-27/doc-inhziqxq9291575.shtml

En trois ans, le nombre de recherches a presque triplé.

> Xiaohongshu enregistrait environ 300 millions de recherches par jour à la
> mi-2023, puis environ 600 millions au quatrième trimestre 2024.
> Source : Zhou Tian Finance (周天财经), repris par 199IT, décembre 2024.
> https://www.199it.com/archives/1731824.html

Une part de cette activité prépare des achats.

> Chaque jour, 39 millions d’utilisateurs manifestent une recherche de
> produits à acheter, pour 140 millions d’occurrences.
> Source : 36Kr (36氪), conférence commerçants GROW de Xiaohongshu,
> avril 2026. https://www.36kr.com/newsflashes/3758099821871879

| | Fil recommandé | Recherche |
|---|---|---|
| Déclencheur | La plateforme propose une note | Le lecteur saisit sa demande |
| Période forte | Quelques heures | Des mois, parfois des années |
| Érosion | Rapide après la nouveauté | Lente si la réponse reste utile |
| Travail éditorial | Couverture, accroche, premier écran | Mots saisis par l’acheteur |
| Usage | Découverte et portée | Demande existante |
| Échec | La diffusion s’arrête | La requête ne fait pas ressortir la note |

Un mauvais départ dans le fil n’épuise donc pas l’intérêt d’une note. Une réponse précise à une question récurrente peut encore attirer des lecteurs un an plus tard. Le [guide Xiaohongshu destiné aux marques étrangères](/fr/decryptages/xiaohongshu-marketing-foreign-brands/) traite des préalables liés au compte.

## Donner un sujet clair au titre, à l’image et aux mots-dièse

Le système rapproche plusieurs éléments : couverture, séquences vidéo, titre, corps du texte et thèmes. Avec une photographie sans indication en chinois et un titre anglais, une marque lui donne peu de repères pour son public local.

**La couverture se rédige autant qu’elle se photographie.** Faites apparaître la promesse en chinois sur l’image : le lecteur la voit avant d’ouvrir la note.

**Le titre doit reprendre la demande de l’acheteur.** Placez les mots qu’il chercherait dans les vingt premiers caractères. La signature de marque peut attendre.

Les mots-dièse précisent le sujet. En accumuler vingt sans lien entre eux brouille cette information. Cette habitude reste pourtant fréquente sur les comptes étrangers.

**Le premier écran doit apporter la réponse.** La lecture fournit rapidement des indications au système. Un préambule de quatre lignes peut déjà avoir fait partir le lecteur.

Il s’agit de conseils éditoriaux. Xiaohongshu ne donne aucun optimum public pour la densité des mots-clés, la longueur du titre ou le nombre de mots-dièse.

## Quand la diffusion ralentit sans alerte

Une note visible sur votre profil Xiaohongshu (小红书) n’est pas nécessairement diffusée largement. La plateforme peut agir sur son affichage sans la supprimer.

> Entre mars et fin août 2025, Xiaohongshu a banni plus de 12 millions de
> faux comptes, sanctionné 13,76 millions de notes de marketing trompeur
> et supprimé plus de 360 millions de faux commentaires.
> Source : China Daily (中国日报网), janvier 2026.
> https://cn.chinadaily.com.cn/a/202601/20/WS696eef27a310942cc499bf9f.html

Ce bilan dépasse treize millions de notes sur six mois. Les nouvelles règles font aussi une place explicite aux pratiques commerciales.

> Xiaohongshu a lancé sa Convention communautaire 2.0 le 19 janvier 2026,
> avec une nouvelle partie consacrée à une activité commerciale ordonnée
> (有序经营).
> Source : China Daily (中国日报网), janvier 2026.
> https://cn.chinadaily.com.cn/a/202601/20/WS696eef27a310942cc499bf9f.html

Pour une marque étrangère, payer directement un créateur hors plateforme constitue un écueil courant. Pugongying (蒲公英), la place de marché officielle, accueille les collaborations déclarées.

> Pugongying prélève 10 % du contrat en mode standard et 20 % dans le mode
> supérieur qui ajoute une promotion par la plateforme.
> Source : Niaoge Biji (鸟哥笔记), octobre 2022.
> https://www.niaogebiji.com/article-482538-1.html

À ces règles s’ajoutent les obligations chinoises d’identification de la publicité.

> Un contenu qui promeut un produit par le partage de connaissances,
> d’expérience ou un avis, et qui comporte un lien d’achat, est une publicité.
> Son éditeur doit l’identifier clairement comme telle.
> Source : Administration d’État pour la régulation du marché
> (国家市场监督管理总局), Mesures relatives à la publicité sur Internet,
> article 9, en vigueur depuis mai 2023.
> https://www.gov.cn/gongbao/2023/issue_10506/202306/content_6885261.html

Une commission évitée ne mesure pas le risque pris. Le contournement peut laisser une publicité sans déclaration, compliquer l’application du brief et exposer le créateur. Pour les opérations de recommandation (种草), une déclaration correcte fait partie du coût du travail.

Les bilans publics de sanctions sont agrégés. Les règles ne garantissent pas que chaque compte recevra un avertissement. Pour repérer un changement, commencez par les statistiques.

## Quatre rapports à suivre dans votre tableau de bord

Les données de votre compte sont vérifiables. Il est plus difficile d’examiner celles dont un prestataire tire ses moyennes de marché.

Vues, mentions « j’aime », enregistrements, commentaires, partages, nouveaux abonnés et provenance du trafic figurent dans le tableau de bord. En rapprochant ces données, quatre indicateurs deviennent utiles.

**Le rapport entre vues et impressions** aide à juger la présentation. Si la note est beaucoup affichée mais rarement ouverte, commencez par sa couverture et son titre.

**Le rapport entre enregistrements et mentions « j’aime »** renseigne sur l’usage. Enregistrer, c’est prévoir de revenir. Une note qui plaît sans être enregistrée n’a peut-être pas fourni une réponse à conserver.

**Les abonnements obtenus par vue** éclairent le public atteint. Une note largement vue qui n’attire aucun abonné peut toucher d’autres personnes que vos acheteurs. Reprendre le même sujet risque de reproduire ce résultat.

**L’évolution de la part issue de la recherche** se mesure sur une même note, aux jours trois, trente et quatre-vingt-dix. Cette part peut monter alors que les vues totales reculent : la réponse continue à trouver des lecteurs.

Huit semaines de suivi, note par note, constituent une base de travail plus utile qu’un guide général, y compris celui-ci.

## De la mise en ligne aux vues régulières

Le tableau suivant décrit un fonctionnement. Il ne retrace aucun compte client : nous ne publions pas de résultats sans accord écrit. Pour le remplir de volumes réels, utilisez vos propres données.

| Étape | Mécanisme | Ce que vous observez | Lecture d’un arrêt à ce stade |
|---|---|---|---|
| Validation | Contrôle avant diffusion | Note en ligne, presque aucune vue | Situation normale ; aucun délai public |
| Premier public | Sélection pour un petit groupe pertinent | Quelques vues, peu d’impressions | Sujet mal identifié ; revoir couverture et titre |
| Premières réactions | Les interactions alimentent le classement | Vues en hausse, enregistrements stables | Le premier écran ne tient pas la promesse |
| Diffusion élargie | La note gagne des places face aux nouveautés | Hausse pendant des heures plutôt que des jours | Les nouveaux contenus reprennent leur place |
| Trafic de recherche durable | La note répond à une demande récurrente | Peu de vues, mais régulières pendant des semaines | Vérifier les mots employés dans le titre |

Un rapport hebdomadaire peut confondre les blocages de sélection initiale et de premières réactions. La correction diffère pourtant : revoir la présentation dans un cas, le contenu dans l’autre. Les distinguer change le travail à entreprendre.

Les formalités sont abordées dans notre guide de création d’un compte professionnel Xiaohongshu. Pour les dépenses courantes, consultez le [guide des coûts du marketing Xiaohongshu](/fr/decryptages/xiaohongshu-marketing-cost/). La [page agence RedNote](/fr/agence-rednote/) détaille les interventions auprès des clients.

## Questions fréquentes

### Pourquoi une note Xiaohongshu reste-t-elle sans vues ?

Avant de conclure à une sanction, vérifiez comment le sujet est présenté. Sans repères chinois sur la couverture ni mots familiers aux acheteurs dans le titre, la note peut être difficile à rapprocher d’un public. Peu d’impressions orientent vers ce défaut de correspondance. Beaucoup d’impressions sans ouvertures invitent plutôt à retravailler la présentation.

### Quand la diffusion d’une note commence-t-elle ?

Le rappel et le classement ont été refondus pour être actualisés à la minute. Le bilan technique de 2023 attribuait près de la moitié des impressions aux notes de moins d’un jour. Aucun délai public de validation n’en découle. La première heure mérite de l’attention ; attendez néanmoins une journée avant de juger les résultats.

### Faut-il choisir une heure précise pour publier ?

Les premières réactions comptent dans le fil. Publier pendant les heures d’activité des acheteurs en Chine aide à les recueillir. Pour la recherche, l’horaire initial pèse moins : une note peut attirer des lecteurs durant plusieurs mois. Aucun créneau optimal commun à tous les comptes n’est publié par la plateforme.

## Faire le diagnostic de votre diffusion

Transmettez-nous votre compte. À partir des quatre-vingt-dix derniers jours de statistiques, nous examinerons les quatre signaux et les requêtes qui ne font pas apparaître vos notes.
