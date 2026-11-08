# Eduardo Zuñiga — personal website

A single-page React 18 portfolio with distinct engineering and independent consulting paths. The existing Create React App setup and deployment provider are retained; no backend or analytics service is added.

## Local development

Use the Node 20 version declared in `package.json`.

```sh
npm ci
npm start
```

## Checks

```sh
CI=true npm test -- --watchAll=false --watchman=false --runInBand
CI=true npm run build
```

The build includes the existing ESLint checks. This JavaScript project has no separate typecheck or lint script. Disabling Watchman keeps the test run independent of a machine-specific Watchman service.

## Content and navigation

- `src/content/siteContent.js`: English and Spanish copy, contact addresses, professional links and CV paths.
- `src/context/LanguageContext.js`: English default, saved language preference and localized document metadata.
- Anchors: `#home`, `#experience`, `#consulting`, `#work`, `#process`, `#contact`. Legacy section anchors remain available.
- `#contact`: opens the project contact section. The old inquiry URLs also land here.
- `public/assets/`: finalized engineering and consulting PDFs.
- `public/index.html`: initial metadata, canonical URL and Person structured data.
- `public/social-card.svg`: editable source for the sharing image.
- `src/assets/font/`: self-hosted IBM Plex Sans and Mono WOFF2 files with their OFL licenses. Sources: Fontsource 5.3.0 packages, derived from [IBM Plex](https://github.com/IBM/plex).

Contact links open the visitor's email client. The site does not send email or store form submissions.

The decorative WebGL scene loads a pinned Three.js module from jsDelivr, independently of the main application bundle. If loading or WebGL fails, a CSS illustration remains visible. Animation can be paused and respects reduced-motion preferences.

## Validation for this refresh

- Production build passes.
- Five interaction tests cover audience paths, internal links, inquiry type and CV selection, language persistence, case-study disclosure and mobile-menu keyboard behavior.
- Browser checks at 375, 768 and 1440 px in English and Spanish show no horizontal overflow.
- Both PDF URLs return HTTP 200, application/pdf and a valid PDF signature.
- Desktop axe WCAG 2 A/AA and 2.1 AA checks return no violations after contrast adjustments. Automated checks do not replace a full accessibility audit.
- Mobile navigation, Escape/focus handling, role contact links and reduced-motion behavior checked in the browser.
- A numeric Lighthouse score has not been measured.
- Checks were run locally on Node 22.12.0; the repository's Node 20 deployment setting was preserved. Existing toolchain deprecation and Browserslist data warnings remain.

## Deployment and rollback

Publish the `build/` output through the existing deployment workflow after reviewing the change. This work has not deployed or pushed to production.

Keep the previous successful deployment available in the hosting provider before releasing. To roll back a release, promote that previous deployment; avoid resetting a working directory with uncommitted work. The source baseline before this refresh was commit `d016fbd`.
