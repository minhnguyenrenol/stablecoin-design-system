# Unera Stablecoin design system: v2.1 audit and changes

28 Oct 2026. Audited from the 04 Oct V02 build.

## What I checked

The tokens, the 19 components, the guideline cards, the portal and the two UI kits. For each one: token references, hard-coded colours, text contrast (WCAG 2.2 AA), docs, and whether it renders when served on its own.

## What I found

| # | Finding | Size |
|---|---|---|
| 1 | The component cards needed `_ds_bundle.js`, which the export didn't include. Outside Claude Design all four component cards were blank | 4 cards |
| 2 | `--text-tertiary` and `--shadow-popover` were used by NotificationCenter and QuoteCard but never defined, so they always fell back to hard-coded values | 2 tokens |
| 3 | Money-down and error text (`#ab5770`) was 4.46:1 on the page grey, just under AA | 6 pairs |
| 4 | `--brand-deep-blue` is `#1d1d1f` (near-black) here and `#173d47` in Huma and Admin. Same name, different colour across the family | 1 |
| 5 | Hard-coded hex values that already exist as tokens | 150 uses |
| 6 | 38 tokens are never used, including the `--space-*` scale | 38 |

## What changed in v2.1

- **Bundle rebuilt.** `_ds_bundle.js` is now built from every `.jsx` under `components/` with `tools/bundle.mjs`. All 4 cards and both UI kits render.
- **Missing tokens defined.** `--text-tertiary` is an alias of `--text-secondary`, and `--shadow-popover` of `--shadow-menu`.
- **Money-down and error text** changed to `#a5536b` (4.76:1 on the page grey). `--brand-red` stays for fills.
- **Colours point at tokens.** 71 hex values in the portal and UI kits became `var(--token)` with the same value. Screenshots match v2.0, apart from animated particles.
- **Third-party colours** moved to `tokens/third-party.css`. WalletPill uses `--brand-ext-ethereum`.

## Still open (v3)

- Rename Stablecoin's near-black to `--brand-ink`, and keep `--brand-deep-blue` for `#173d47` across the family. That touches about 2,200 references, so it needs its own release.
- Five older portal snapshots (`v1`–`v5 (pre-…)`) sit in the root. They belong in `_archive/`.
