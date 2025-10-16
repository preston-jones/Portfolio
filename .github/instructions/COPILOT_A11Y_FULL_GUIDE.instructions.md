---
applyTo: '**'
---
# 🧭 COPILOT ACCESSIBILITY & LIGHTHOUSE FULL GUIDE  
**Ziel:** WCAG 2.1 AA + Lighthouse Accessibility ≥ 90  
**Autor:** Preston Jones  
**Tech-Stack:** Angular | TypeScript | SCSS | Firebase | Material Design  

---

## 🎯 Zweck  
Dieses Dokument definiert die Accessibility-, SEO- und Performance-Regeln,  
die Copilot bei Codevorschlägen befolgen soll,  
um Projekte **WCAG 2.1 AA-konform** und **Lighthouse-optimiert** zu machen.  

---

## 🧩 Grundprinzipien  

- **Semantisches HTML** vor ARIA-Attributen.  
- **Tastatur-First:** Alles per Tastatur bedienbar.  
- **Fokuszustand sichtbar** (`:focus-visible`).  
- **Logische DOM-Reihenfolge + Landmark-Elemente.**  
- **Responsiv ohne horizontales Scrollen bis 320 px.**
- **LAYOUT BEIBEHALTEN:** Niemals vorhandenes Design, Layouts oder Größen ändern - nur Accessibility & Performance optimieren.**

---

## 📚 Inhaltsverzeichnis
- [Wahrnehmbarkeit](#wahrnehmbarkeit-perceivable)
  - [Textalternativen](#textalternativen)
  - [Zeitbasierte Medien](#zeitbasierte-medien)
  - [Anpassbar](#anpassbar)
  - [Unterscheidbar](#unterscheidbar)
- [Bedienbarkeit](#bedienbarkeit-operable)
  - [Tastaturbedienbarkeit](#tastaturbedienbarkeit)
  - [Genug Zeit](#genug-zeit)
  - [Anfälle vermeiden](#anfälle-vermeiden)
  - [Navigierbar](#navigierbar)
  - [Eingabemodi](#eingabemodi)
- [Verständlichkeit](#verständlichkeit-understandable)
  - [Lesbar](#lesbar)
  - [Vorhersehbar](#vorhersehbar)
  - [Eingabehilfe](#eingabehilfe)
  - [Konsistenz & Hilfen](#konsistenz--hilfen)
- [Robustheit](#robustheit-robust)
  - [Kompatibilität](#kompatibilität)
  - [Zukunftssicherheit](#zukunftssicherheit)
- [Angular-Spezifisch](#angular-spezifisch)

---

## ✅ WCAG 2.1 AA Checkliste  

### Wahrnehmbarkeit (Perceivable)  

#### Textalternativen  
- Jedes `<img>` hat `alt` oder `aria-label`.  
- Verlinkte Bilder beschreiben den Linkzweck.  
- Dekorative Bilder: `alt=""` + `aria-hidden="true"`.  
- Icons in Buttons / Links haben Textalternativen.  
- Audio/Video mit Untertiteln oder Transkript.  

#### Zeitbasierte Medien  
- Keine Autoplay-Videos mit Ton.  
- Steuerungselemente (`controls`) vorhanden.  
- Textalternative für Audio/Video bereitstellen.  

#### Anpassbar  
- Korrekte semantische HTML-Elemente (`header`, `main`, `footer`).  
- Tabellen nur für Daten.  
- Formulare mit `<label>` und `<fieldset>`.  
- Logische Struktur und Tab-Reihenfolge.  

#### Unterscheidbar  
- **Kontrastanforderungen:**  
  - Text ≥ 4.5:1  
  - Großer Text ≥ 3:1  
  - UI-Elemente ≥ 3:1  
- Keine Farbkommunikation allein.  
- Skalierbarkeit bis 200 %.  
- Fokuszustand sichtbar.  
- Keine Audioausgabe > 3 Sekunden ohne Kontrolle.  

---

### Bedienbarkeit (Operable)  

#### Tastaturbedienbarkeit  
- Jede Funktion per Tastatur erreichbar.  
- Kein `tabindex > 0`.  
- Keine Tastaturfallen.  
- ESC schließt Dialoge.  
- Fokus sichtbar und steuerbar.  
- Skip-Link vorhanden:

```html
<a class="skip-link" href="#main">Zum Inhalt springen</a>
```

#### Genug Zeit  
- Keine automatischen Timeouts oder Sessionabläufe ohne Vorwarnung.  
- Bewegte Elemente (Carousels, Slideshows) anhaltebar.  
- Nutzer können Animationen oder Autoplay deaktivieren.  

#### Anfälle vermeiden  
- Keine blinkenden oder flackernden Elemente > 3 Hz.  
- Respektiere `prefers-reduced-motion`.  

#### Navigierbar  
- Nur eine `<h1>` pro Seite.  
- Logische Überschriftenhierarchie (`<h2>` → `<h3>` → `<h4>`).  
- Landmark-Elemente (`<header>`, `<nav>`, `<main>`, `<footer>`).  
- Fokusreihenfolge entspricht Sichtreihenfolge.  
- Jeder Button/Link hat sichtbaren Text oder `aria-label`.  
- Kein leeres `href="#"`.  
- Konsistente Navigation.  
- Aktive Seite mit `aria-current="page"`.  

#### Eingabemodi  
- Alle Funktionen ohne Maus bedienbar.  
- Touch-Ziele ≥ 44 × 44 px.  
- Gesten haben Alternativen (z. B. Klick).  

---

### Verständlichkeit (Understandable)  

#### Lesbar  
- `<html lang="de">` gesetzt.  
- Abkürzungen erklärt.  
- Klare, einfache Sprache.  
- Einheitliches Datumsformat.  

#### Vorhersehbar  
- UI und Navigation konsistent.  
- Keine Kontextwechsel ohne Aktion.  
- Links und Buttons eindeutig benannt.  

#### Eingabehilfe  
- Formulare haben Labels oder `aria-label`.  
- Pflichtfelder mit `required`.  
- Fehler werden textlich + visuell angezeigt.  
- `aria-live="polite"` für Live-Validierungen.  
- `autocomplete` verwenden.  

#### Konsistenz & Hilfen  
- Gleiche Funktionen = gleiche Bezeichnung.  
- Hilfetexte oder Kontaktoptionen vorhanden.  

---

### Robustheit (Robust)  

#### Kompatibilität  
- Valides HTML + ARIA.  
- Keine doppelten IDs.  
- `role`, `name`, `value` korrekt.  
- Keine falschen ARIA-Attribute.  
- Screenreader (NVDA, VoiceOver) getestet.  

#### Zukunftssicherheit  
- Logische DOM-Reihenfolge.  
- Aktuelle HTML5-Elemente.  
- Progressive Enhancement – funktioniert auch ohne JS.

---

## Angular-Spezifisch  

- `NgOptimizedImage` statt `<img>`.  
- `ChangeDetectionStrategy.OnPush`.  
- `mat-icon-button` mit `aria-label`.  
- Material Design auf Kontrast prüfen.  
- Bildgrößen (`width` / `height`) setzen.  
- `routerLinkActive="active"` + `aria-current="page"`.
- **WICHTIG:** Original Bildgrößen und Layout-Dimensionen immer beibehalten!
- **WICHTIG:** NgOptimizedImage Aspect Ratio Fehler beheben. Korrigiere die Bildabmessungen mit den tatsächlichen Intrinsic Sizes.

> Verwende diese Best Practices in allen Angular-Komponenten für bessere Performance, Accessibility und Lighthouse Scores **ohne das bestehende Design zu verändern**.