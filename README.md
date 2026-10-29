# Unera Stablecoin design system (public review copy)

Live: https://minhnguyenrenol.github.io/stablecoin-design-system/

This is the design system for one of Unera's three products. Unera's products are designed but not yet launched. It's shared so hiring teams can review my work as Lead Product Designer. Please don't reuse it.

## What's here

- `index.html`: the front page, with live specimen cards for every foundation and component
- `tokens/` and `styles.css`: colour, type, spacing and surface tokens
- `components/`: React components with type definitions, built into `_ds_bundle.js` by `tools/bundle.mjs` in the private source
- `guidelines/`: specimen cards

## How this copy differs from the source

- It uses Hanken Grotesk (SIL Open Font License) in place of the licensed brand font.
- Sample figures replace reserve, fee and portfolio numbers.
- It leaves out client files, product pages and working notes.
- It's set not to be indexed.

Run it locally with `python3 -m http.server`, then open http://localhost:8000.

© Unera. Design by Minh Nguyen.
