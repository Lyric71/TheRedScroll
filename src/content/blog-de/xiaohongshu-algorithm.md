---
title: "Xiaohongshu: Wie der Algorithmus Beiträge verteilt"
description: "Wie Beiträge in den Feed gelangen, haben Xiaohongshus Entwickler beschrieben. Für viele Zahlen aus englischen Ratgebern bieten diese Arbeiten jedoch keinen Beleg."
metaTitle: "Xiaohongshu-Algorithmus: Verbreitung verstehen"
metaDescription: "Wie Xiaohongshu Beiträge auswählt: belegte Abläufe, fehlende Zahlen und vier Kennzahlen, mit denen Marken Feed und Suchzugriffe prüfen können."
publishDate: 2026-09-15
author: "TheRedScroll"
platforms: ["rednote"]
category: "Plattformen"
keywords: ["Xiaohongshu Algorithmus", "Xiaohongshu Reichweite", "RedNote Algorithmus", "Xiaohongshu Suche", "Beitragsanalyse Xiaohongshu"]
featured: false
featuredImage: "/images/blog/xiaohongshu-algorithm.webp"
---

Ein paar Hundert Aufrufe, dann Stillstand. Wer nach Gründen sucht, stößt schnell auf Reichweitenstufen und Punktesysteme für Interaktionen. Die Veröffentlichungen der Xiaohongshu-Entwickler helfen, belastbare Erklärungen von bloßen Behauptungen zu trennen.

| Frage | Was die Plattform veröffentlicht hat | Quelle |
|---|---|---|
| Erfolgt die Auswahl stufenweise? | Ja: Vorauswahl, grobes Ranking, feines Ranking | Xiaohongshu-Technikteam, März 2023 |
| Wie viele Nutzer sehen den Beitrag zuerst? | Keine veröffentlichte Gruppengröße | Nicht veröffentlicht |
| Wie viel zählt Speichern gegenüber einem Like? | Keine Gewichtung veröffentlicht | Nicht veröffentlicht |
| Wie schnell reagiert das System? | Früher rund 30 Minuten bis zur Erfassung der Interaktionen; nach dem Umbau Aktualisierung im Minutentakt | Xiaohongshu-Technikteam, März 2023 |
| Bekommen neue Beiträge eine Chance? | Beiträge des vergangenen Tages erreichten fast die Hälfte der Startseiten-Impressionen | Xiaohongshu-Technikteam, März 2023 |
| Welche Rolle spielt die Suche? | 800 Millionen Suchanfragen täglich; 77 % der täglichen Nutzer suchen nach Antworten auf ein Problem | Plattformangabe und Huxiu, Mai 2026 |

Bei zwei der sechs Fragen gibt es keine öffentlich belegte Zahl. Eigene Schätzungen schließen diese Wissenslücke nicht. Alle Quellen dieses Artikels wurden im September 2026 zweimal überprüft.

## Hinter den Reichweitenstufen steht ein Auswahlverfahren

In der Praxis heißen die vermeintlichen Stufen „Traffic Pools“ (流量池). Xiaohongshu (小红书) selbst veröffentlicht dazu keine Gruppengrößen. Die technischen Beschreibungen erklären stattdessen, wie geprüfte Beiträge für den Feed ausgewählt werden.

> Im ersten Halbjahr 2021 wurden die wichtigsten Module für Vorauswahl,
> grobes und feines Ranking des Startseiten-Feeds täglich aktualisiert.
> Das Team stellte Auswahlkanäle, Index und Modelltraining auf
> Aktualisierungen im Minutentakt um.
> Quelle: Technik und intelligente Verteilung bei Xiaohongshu
> (小红书技术部), März 2023. https://www.6aiq.com/article/1679451572481

Zuerst sucht das System Beiträge, die einen bestimmten Nutzer interessieren könnten. Ein grobes Ranking reduziert die Auswahl mit geringem Rechenaufwand. Anschließend legt ein feineres Ranking die Reihenfolge fest. Wer den Feed neu lädt, löst diese Auswahl erneut aus.

Aus diesem Ablauf lässt sich keine feste Erstzustellung an 200 Nutzer ableiten. Jeder Beitrag muss sich gegenüber anderen Kandidaten behaupten. Gewinnt er weitere Plätze, erreicht er weitere Menschen. Die daraus entstehende Reichweite wächst in Schüben.

Wie groß das tägliche Angebot ist, zeigen die Veröffentlichungszahlen.

> Xiaohongshu-Nutzer veröffentlichen täglich mehr als 9 Millionen Beiträge
> und hinterlassen mehr als 70 Millionen Kommentare.
> Quelle: Xiaohongshu (小红书), Konferenz WILL 2026, berichtet von 100EC
> (网经社), Dezember 2025. https://www.100ec.cn/detail--6655530.html

Die Zahlenfolgen 200, 2.000 und 20.000 wandern durch Praxisratgeber, ohne dass die Plattform oder ihre Entwickler solche Stufen bestätigen. Wir legen sie deshalb keiner Planung zugrunde.

## Was vier Signale über den Xiaohongshu-Algorithmus verraten

Die öffentlichen Angaben erklären vier Aspekte der frühen Verbreitung. Eine Gewichtung, die Marken einfach einsetzen könnten, gibt es nicht.

| Signal | Was das System auswertet | Was Sie beeinflussen können | Veröffentlichtes Gewicht |
|---|---|---|---|
| Thema | Bild, Video, Text und Schlagwörter gemeinsam | Titelbild, erster Satz, Themen | Keines |
| Passung | Für welche Nutzer der Beitrag ausgewählt wird | Die Wörter Ihrer Käufer | Keines |
| Frühe Reaktion | Klicks, Lesen, Likes, Speichern, Kommentare, neue Follower | Einstieg, erster Bildschirm, Frage | Keines |
| Regelkonformität | Zustand von Beitrag und Konto | Gemeldete Kooperationen, korrekte Aussagen | Voraussetzung für die Verbreitung |

**Das Thema** erkennt das System auch im Bild. Der Begleittext allein erklärt ihm einen Beitrag nicht.

> Multimodales Inhaltsverständnis kommt in der Suche, der Empfehlung und
> den Transaktionssystemen von Xiaohongshu zum Einsatz. Dazu gehören die
> Analyse kurzer Videos, die Bewertung der Inhaltsqualität und die Suche
> über mehrere Inhaltsformate hinweg.
> Quelle: QbitAI (量子位), April 2022. https://www.qbitai.com/2022/04/34112.html

Die technische Veröffentlichung stammt von 2022. Für Marken folgt daraus eine praktische Aufgabe: Schon das Titelbild sollte chinesischen Lesern einen eindeutigen Hinweis auf das Thema geben.

**Die Zuordnung zum Publikum** beginnt in der Vorauswahl. Wird ein Beitrag dort für die Käufer nicht berücksichtigt, erreicht er sie auch über spätere Rankings nicht. Der konkrete Begriff „Hardshelljacken“ (冲锋衣) kann einen Bedarf besser treffen als eine aufwendig gestaltete Geschichte über „nachhaltige Oberbekleidung“.

**Die ersten Interaktionen** zeigen den Rankingmodellen, worauf Nutzer reagieren.

> Ein Like oder das Speichern eines Beitrags zeigt Interesse. Entsteht bei
> einem Nutzer ein neues Interesse, kann ein schnelleres System es früher
> erkennen und noch während derselben Nutzung passende Beiträge zeigen.
> Quelle: Technik und intelligente Verteilung bei Xiaohongshu
> (小红书技术部), März 2023. https://www.6aiq.com/article/1679451572481

**Die Einhaltung der Regeln** entscheidet zunächst darüber, ob ein Beitrag regulär verbreitet werden kann. Welche Einschränkungen drohen, folgt weiter unten.

Besonders hartnäckig hält sich ein Punkteschema: Likes und Speicherungen zählen jeweils eins, Kommentare und geteilte Beiträge jeweils vier, neue Follower acht. Dafür fehlt ein Beleg auf Plattformseiten, in Entwicklervorträgen oder offiziellen Einreichungen. Die häufig genannte chinesische Fundstelle bezeichnet es selbst nur als verbreitete Version. Wir berechnen auf dieser Grundlage kein Kampagnenbudget.

## Was das System in der ersten Stunde lernt

Neue Beiträge bekommen im Xiaohongshu-Feed (小红书) viel Raum. Umso schwerer wog die Verzögerung im alten Verfahren: Erst nach etwa einer halben Stunde wurden Interaktionen gesammelt.

> Beiträge des vergangenen Tages hatten seit Langem einen hohen Anteil an
> den Impressionen auf der Startseite. Im beschriebenen Zeitraum stieg
> dieser Anteil rasch auf fast die Hälfte.
> Quelle: Technik und intelligente Verteilung bei Xiaohongshu
> (小红书技术部), März 2023. https://www.6aiq.com/article/1679451572481

Ein Beitrag hat wenig Zeit, bevor neue Inhalte um dieselben Plätze konkurrieren. Schon am Folgetag steht ein anderes Angebot bereit.

> Beim herkömmlichen Verfahren wird nach der Anzeige eines Inhalts etwa
> 30 Minuten gewartet, bevor die Interaktionen für das Training gesammelt werden.
> Quelle: Technik und intelligente Verteilung bei Xiaohongshu
> (小红书技术部), März 2023. https://www.6aiq.com/article/1679451572481

Genau diesen Abstand zwischen Anzeige und Lernen wollten die Entwickler verkürzen.

> Mit der Umstellung von täglichen auf minütliche Aktualisierungen stiegen
> die durchschnittliche Nutzungsdauer im Startseiten-Feed um mehr als 10 %,
> die Interaktionen um mehr als 15 % und die Effizienz neuer Beiträge um fast 50 %.
> Quelle: Technik und intelligente Verteilung bei Xiaohongshu
> (小红书技术部), März 2023. https://www.6aiq.com/article/1679451572481

Planen Sie die Betreuung gleich nach dem Veröffentlichen ein. Antworten Sie auf Kommentare und orientieren Sie sich an den Nutzungszeiten Ihrer Käufer in China. Maßgeblich sind die Käufer in China, nicht die Bürozeiten Ihrer Zentrale. Sechs Beiträge hintereinander mit neun Tagen Pause danach ersetzen keine laufende Betreuung; bei jeder Veröffentlichung ist das Angebot schon wieder ein anderes.

## Die Suche kann tragen, wenn der Feed nachlässt

Viele ausländische Marken arbeiten vor allem am Empfehlungsfeed von Xiaohongshu (小红书). Wenn die Aufrufe nach einer Woche sinken, fehlt ein zweiter Zugang: Beiträge, die über Suchanfragen dauerhaft gefunden werden.

> 77 % der täglich aktiven Xiaohongshu-Nutzer suchen nach Antworten auf ein
> Problem. 75 % sehen sich den Empfehlungsfeed an.
> Quelle: Huxiu (虎嗅), Mai 2026. https://www.huxiu.com/article/4861801.html

Die Gruppen überschneiden sich. Deshalb übersteigen die Anteile zusammen 100 %. Die Suche gehört für einen großen Teil der täglichen Nutzer dazu.

> Xiaohongshu überschritt 400 Millionen monatlich aktive Nutzer und
> 800 Millionen Suchanfragen pro Tag.
> Quelle: Xiaohongshu-Bericht (小红书), Beijing Business Today (北京商报),
> über Sina Finance, Mai 2026.
> https://finance.sina.com.cn/jjxw/2026-05-27/doc-inhziqxq9291575.shtml

Innerhalb von drei Jahren ist das Suchvolumen auf fast das Dreifache gestiegen.

> Mitte 2023 verzeichnete Xiaohongshu rund 300 Millionen Suchanfragen täglich,
> im vierten Quartal 2024 etwa 600 Millionen.
> Quelle: Zhou Tian Finance (周天财经), über 199IT, Dezember 2024.
> https://www.199it.com/archives/1731824.html

Ein Teil dieser Nachfrage zielt unmittelbar auf Produkte.

> Täglich zeigen 39 Millionen Xiaohongshu-Nutzer Interesse am Kauf konkreter
> Produkte. Dabei werden 140 Millionen entsprechende Vorgänge erfasst.
> Quelle: 36Kr (36氪), Bericht zur Händlerkonferenz GROW von Xiaohongshu,
> April 2026. https://www.36kr.com/newsflashes/3758099821871879

| | Empfehlungsfeed | Suche |
|---|---|---|
| Auslöser | Das System wählt einen Beitrag | Der Nutzer formuliert einen Bedarf |
| Stärkste Phase | Stunden | Monate, gelegentlich Jahre |
| Rückgang | Schnell, sobald der Beitrag nicht mehr neu ist | Langsam, solange er die Frage beantwortet |
| Optimierung | Titelbild, Einstieg, erster Bildschirm | Suchbegriffe der Käufer |
| Zweck | Entdeckung und Reichweite | Bestehende Nachfrage |
| Scheitern | Aufrufe bleiben stehen | Der Beitrag wird zur Anfrage nicht ausgewählt |

Auch ein Beitrag mit schwachem Feed-Start kann ein Jahr lang Leser gewinnen. Entscheidend ist, ob er eine immer wieder gestellte Frage gut beantwortet. Zur Vorbereitung des Kontos finden Sie mehr im [Xiaohongshu-Leitfaden für ausländische Marken](/de/analysen/xiaohongshu-marketing-foreign-brands/).

## Das Thema muss auf Bild und Titel erkennbar sein

Titelbild, Videosequenzen, Überschrift, Text und Themen werden gemeinsam ausgewertet. Eine Aufnahme ohne chinesische Hinweise und eine englische Überschrift geben dem System und den Lesern vor Ort wenig Orientierung.

**Auch das Titelbild braucht eine klare Aussage.** Schreiben Sie auf Chinesisch auf das Bild, welche Frage der Beitrag beantwortet. Dafür muss niemand erst klicken.

**Beginnen Sie den Titel mit der Nachfrage.** Die Wörter, die ein Käufer suchen würde, gehören möglichst in die ersten zwanzig Zeichen. Ein Markenslogan ist dort weniger hilfreich.

Schlagwörter grenzen das Thema ein. Zwanzig Begriffe ohne Zusammenhang verwischen es dagegen. Auf ausländischen Markenkonten ist diese Häufung dennoch häufig zu sehen.

**Der Einstieg muss das Versprechen einlösen.** Wie weit jemand liest, wird früh zum Signal. Vier Zeilen Anlauf können schon genügen, damit er den Beitrag schließt.

Solche Hinweise betreffen die redaktionelle Arbeit. Xiaohongshu gibt öffentlich weder eine ideale Keyword-Dichte noch eine optimale Titellänge oder Schlagwortzahl vor. Daraus lassen sich keine festen Algorithmusgrenzen machen.

## Sichtbar im Profil heißt nicht unbeschränkt verbreitet

Xiaohongshu (小红书) kann die Anzeige beeinflussen, ohne einen Beitrag zu löschen. Dass er auf dem eigenen Profil noch auftaucht, sagt deshalb wenig über seine weitere Verbreitung aus.

> Zwischen März und Ende August 2025 sperrte Xiaohongshu mehr als 12 Millionen
> gefälschte Konten, ging gegen 13,76 Millionen irreführende Marketingbeiträge
> vor und entfernte mehr als 360 Millionen falsche Kommentare.
> Quelle: China Daily (中国日报网), Januar 2026.
> https://cn.chinadaily.com.cn/a/202601/20/WS696eef27a310942cc499bf9f.html

In sechs Monaten betraf das Vorgehen mehr als dreizehn Millionen Marketingbeiträge. Die neuen Gemeinschaftsregeln benennen auch das geschäftliche Verhalten ausdrücklich.

> Xiaohongshu veröffentlichte am 19. Januar 2026 die Community Convention 2.0
> mit einem neuen Abschnitt zum geordneten Geschäftsbetrieb (有序经营).
> Quelle: China Daily (中国日报网), Januar 2026.
> https://cn.chinadaily.com.cn/a/202601/20/WS696eef27a310942cc499bf9f.html

Wer als ausländische Marke Creator außerhalb der Plattform bezahlt, geht ein häufig unterschätztes Risiko ein. Für gemeldete Kooperationen steht der offizielle Marktplatz Pugongying (蒲公英) bereit.

> Pugongying berechnet im Standardmodus 10 % des Auftragswerts und im
> erweiterten Modus mit Plattformwerbung 20 %.
> Quelle: Niaoge Biji (鸟哥笔记), Oktober 2022.
> https://www.niaogebiji.com/article-482538-1.html

Daneben gelten die gesetzlichen Vorgaben zur Kennzeichnung von Werbung in China.

> Wer Produkte durch Wissensvermittlung, Erfahrungsberichte oder Tests
> bewirbt und einen Kauflink beifügt, muss den Inhalt deutlich als Werbung
> kennzeichnen.
> Quelle: Staatliche Marktaufsicht (国家市场监督管理总局), Maßnahmen zur
> Internetwerbung, Artikel 9, in Kraft seit Mai 2023.
> https://www.gov.cn/gongbao/2023/issue_10506/202306/content_6885261.html

Eine umgangene Provision beseitigt das Risiko nicht gemeldeter Werbung nicht. Vorgaben aus dem Briefing sind womöglich schwerer durchzusetzen, und auch der Creator trägt die Folgen. Bei Produktempfehlungen (种草) gehört die ordnungsgemäße Meldung zur Arbeit.

Die Plattform veröffentlicht zusammengefasste Sanktionszahlen. Eine individuelle Benachrichtigung verspricht sie in den öffentlichen Regeln nicht. Veränderungen sollten Marken deshalb zuerst in ihren eigenen Statistiken prüfen. Welche Prüfungen in der App eine Sperre bestätigen und welche sechs weiteren Ursachen ein Konto ausbremsen, steht in [sieben Gründe, warum ein Xiaohongshu-Konto nicht mehr wächst](/de/analysen/xiaohongshu-account-not-growing/).

## Vier Kennzahlen zeigen, wo Beiträge Leser verlieren

Die Werte des eigenen Kontos lassen sich nachvollziehen. Bei Branchendurchschnitten eines Dienstleisters fehlen meist die Einzelheiten, um sie ebenso gründlich zu prüfen.

Im Dashboard stehen Aufrufe, Likes, Speicherungen, Kommentare, geteilte Beiträge, neue Follower und Zugriffsquellen. Erst ihr Verhältnis zueinander zeigt, wo die Arbeit ansetzen sollte.

**Aufrufe je Impression** helfen, die Aufmachung zu beurteilen. Wird ein Beitrag oft angezeigt, aber selten geöffnet, verdienen Titelbild und Überschrift zuerst Aufmerksamkeit. An fehlenden Ausspielungen allein liegt es dann nicht.

**Speicherungen im Vergleich zu Likes** deuten auf den Nutzwert. Wer speichert, will später wiederkommen. Gefällt ein Beitrag vielen, ohne gespeichert zu werden, liefert er möglicherweise wenig, das man erneut nachlesen möchte.

**Neue Follower je Aufruf** zeigen, ob die Reichweite das richtige Publikum erreicht. Viele Aufrufe ohne zusätzliche Follower können bedeuten, dass der Beitrag die eigentlichen Käufer verfehlt. Das gleiche Thema führt dann womöglich im Folgemonat zum gleichen Ergebnis.

**Der Anteil aus der Suche** sollte für denselben Beitrag nach drei, dreißig und neunzig Tagen festgehalten werden. Er kann zunehmen, obwohl die gesamten Aufrufe sinken. Er erreicht dann möglicherweise weiterhin Leser mit einem konkreten Anliegen.

Wer diese vier Werte acht Wochen lang pro Beitrag verfolgt, versteht das eigene Konto besser als durch einen allgemeinen Ratgeber. Das gilt auch für diesen Artikel.

## Vom ersten Aufruf zur anhaltenden Nachfrage

Die Übersicht zeigt den Mechanismus, keine gemessene Kundenkampagne. Kundenzahlen veröffentlichen wir nur mit schriftlicher Zustimmung. Reale Aufrufzahlen entnehmen Sie bitte Ihrem eigenen Dashboard.

| Phase | Vorgang | Beobachtung | Möglicher Grund für Stillstand |
|---|---|---|---|
| Prüfung | Kontrolle vor der Verbreitung | Beitrag online, fast keine Aufrufe | Normal; keine öffentliche Prüfdauer |
| Erstes Publikum | Auswahl für eine kleine passende Gruppe | Erste Aufrufe, wenige Impressionen | Thema unklar; Titelbild und Titel prüfen |
| Frühe Reaktion | Interaktionen fließen ins Ranking ein | Aufrufe steigen, Speicherungen nicht | Der erste Bildschirm hält das Versprechen nicht |
| Breiterer Feed | Konkurrenz mit neuen Beiträgen | Wachstum über Stunden statt Tage | Neue Inhalte besetzen die Plätze erneut |
| Dauerhafte Suche | Antwort auf wiederkehrende Anfragen | Wenige, aber stetige Aufrufe über Wochen | Fehlen die Suchbegriffe im Titel? |

Im Wochenbericht kann eine schwache Vorauswahl genauso aussehen wie ausbleibende Reaktionen nach dem Öffnen. Die Gegenmaßnahmen unterscheiden sich: einmal die Aufmachung prüfen, einmal den Inhalt. Davon hängt ab, was als Nächstes geändert werden muss.

Die Voraussetzungen beschreibt unser [Leitfaden zur Einrichtung eines Xiaohongshu-Unternehmenskontos](/de/analysen/xiaohongshu-business-account-setup/). Laufende Ausgaben erläutert der [Leitfaden zu Xiaohongshu-Marketingkosten](/de/analysen/xiaohongshu-marketing-cost/). Unsere Aufgaben für Kunden stehen auf der [RedNote-Agenturseite](/de/rednote-agentur/).

## Häufige Fragen

### Woran liegen fehlende Aufrufe auf Xiaohongshu?

Prüfen Sie die Zuordnung zum Thema, bevor Sie von einer Strafe ausgehen. Ohne chinesische Hinweise im Titelbild und vertraute Suchbegriffe im Titel findet das System womöglich kein passendes Publikum. Wenige Impressionen lenken den Blick auf diese Zuordnung. Viele Anzeigen ohne Klicks sprechen eher dafür, Überschrift und Bild zu überarbeiten.

### Wann lässt sich die Verbreitung eines Beitrags beurteilen?

Vorauswahl und Ranking werden inzwischen im Minutentakt statt täglich aktualisiert. Im technischen Bericht von 2023 entfiel fast die Hälfte der Startseiten-Impressionen auf Beiträge des vergangenen Tages. Eine feste Prüfdauer nennt die Plattform nicht. Betreuen Sie die erste Stunde aufmerksam und warten Sie für die Bewertung mindestens den ersten Tag ab.

### Gibt es eine beste Uhrzeit zum Veröffentlichen?

Eine allgemein beste Uhrzeit veröffentlicht Xiaohongshu nicht. Im Feed helfen Zeiten, zu denen Ihre Käufer in China aktiv sind: Dann treffen früh echte Reaktionen ein. Für die Suche zählt der ursprüngliche Zeitpunkt weniger. Sie kann einem Beitrag noch Monate später Aufrufe bringen.

## Mit den letzten neunzig Tagen beginnen

Lassen Sie uns Ihr Konto prüfen. Wir untersuchen die Beitragsdaten der vergangenen neunzig Tage, prüfen die vier Signale und ermitteln Suchanfragen, bei denen Ihre Beiträge nicht berücksichtigt werden.
