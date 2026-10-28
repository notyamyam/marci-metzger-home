# Marci Metzger homepage concept

A single-page, responsive redesign of [marcimetzger.com](https://marcimetzger.com/) made with React, Vite, and Tailwind CSS v4. The photos and brand images in `public/images` were downloaded from the reference homepage.

Live site: https://marci-metzger-home-rouge.vercel.app/

## Run locally

```bash
npm install
npm run dev
```

`npm run build` creates a static site in `dist/`. `npm test` checks the email inquiry URL formatter.

## Implementation note

The original homepage's content is reorganized into a clearer journey: local introduction, seller and buyer guidance, home search, gallery, services, and contact. The split hero gives the Pahrump landscape room to breathe while keeping the primary action visible on both desktop and mobile.

The photo gallery uses the seven photos from the reference homepage and scrolls by touch, mouse drag, trackpad, keyboard, or arrow buttons. Selecting a photo opens the original image in an accessible modal. The footer links to the Facebook, Instagram, and LinkedIn profiles linked from the reference site. A compact grayscale map with a green office pin sits beside the contact details and opens the supplied Google Maps location.

The listing link opens current Pahrump listings on Realtor.com. The search and contact forms open the visitor's email app with details filled in; this static demo does not submit to a backend.

Before submitting the assignment, review the design and code yourself, confirm the historic sales claims and contact details with the client, and be ready to explain your layout decisions.
