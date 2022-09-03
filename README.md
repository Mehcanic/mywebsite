# BLG Garage LTD

This is website created for BLG GARAGE LTD.

<hr>

## Instruction for installing SASS:

- Initialize npm: npm init;

- Install SASS: npm install sass --save-dev;

- Add to package.json: "watch:sass": "sass --watch style/scss/main.scss style/css/style.css";

- Install live server: npm i @compodoc/live-server --save-dev;

- Add to package.json: "devserver": "live-server";

- Install run all package: npm install npm-run-all --save-dev;

- Add to package.json: "start": "npm-run-all --parallel devserver watch:sass";

## Styles:

- 320px — 480px: Mobile devices
- 481px — 768px: iPads, Tablets
- 769px — 1024px: Small screens, laptops
- 1025px — 1200px: Desktops, large screens
- 1201px and more —  Extra large screens, TV

### Font family used for website is Ubuntu:

- 300,
- 400,
- 700,

### Used CSS filter color generator from following codepend: *https://codepen.io/sosuke/pen/Pjoqqp*

### Below filter is generated from #FF6600 color.

_$clr-svg: invert(44%) sepia(96%) saturate(2473%) hue-rotate(359deg) brightness(104%) contrast(106%);_

### To do:

- Adjust resposive design on tablet size and vertical phones.
- Add back to top at each footer.
- Change contact section on big scree size from column to row.
