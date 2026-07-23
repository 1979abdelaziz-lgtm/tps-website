TPS Footer ghost-text fix

Changed file:
- app/components/Footer.tsx

Changes:
- Added an opaque isolated background layer behind the footer text columns.
- Prevented background visual compositing/filter bleed into the text area.
- Removed backdrop blur from lower footer cards to avoid Chrome rendering artifacts.
- No project files outside the footer were changed.
