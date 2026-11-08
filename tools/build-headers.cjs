// npm install --prefix /tmp/profile-design-tools fontkit sharp wawoff2
// node tools/build-headers.cjs ../juliofuentescerrada.github.io/public/fonts /tmp/profile-design-tools/node_modules
const fs = require('node:fs');
const path = require('node:path');
const fontkit = require(require.resolve('fontkit', { paths: [process.argv[3] || __dirname] }));
const fontRoot = process.argv[2];
if (!fontRoot) throw new Error('Pass the portfolio public/fonts directory.');
const wawoff2 = require(require.resolve('wawoff2', { paths: [process.argv[3] || __dirname] }));
async function main() {
const load = async (name, weight) => fontkit.create(Buffer.from(await wawoff2.decompress(fs.readFileSync(path.join(fontRoot, name))))).getVariation({wght:weight});
const display = await load('space-grotesk-latin.woff2', 700);
const mono = await load('jetbrains-mono-latin.woff2', 400);
function text(font, value, x, y, size, color) {
  const run = font.layout(value); let cursor = x; const scale = size / font.unitsPerEm;
  return `<g fill="${color}">` + run.glyphs.map((glyph, i) => {
    const pos = run.positions[i];
    const svg = `<path transform="translate(${cursor + pos.xOffset * scale} ${y - pos.yOffset * scale}) scale(${scale} ${-scale})" d="${glyph.path.toSVG()}"/>`;
    cursor += pos.xAdvance * scale; return svg;
  }).join('') + '</g>';
}
for (const compact of [false, true]) for (const theme of ['light', 'dark']) {
  // The portfolio deliberately uses a dark hero in both browser themes.
  const w = compact ? 600 : 1000, h = compact ? 300 : 280, x = compact ? 30 : 44;
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="title desc"><title id="title">Julio Fuentes Cerrada</title><desc id="desc">Software Architect and Technical Lead. .NET, Azure, Angular.</desc><rect width="${w}" height="${h}" fill="#0B0D10"/>`;
  if (compact) {
    svg += text(display, 'Julio', x, 77, 48, '#F4F6F8');
    svg += text(display, 'Fuentes Cerrada', x, 132, 48, '#F4F6F8');
    svg += text(mono, 'Software Architect', x, 195, 23, '#C5CCD3');
    svg += text(mono, '& Technical Lead', x, 228, 23, '#C5CCD3');
  } else {
    svg += text(display, 'Julio Fuentes Cerrada', x, 106, 64, '#F4F6F8');
    svg += text(mono, 'Software Architect & Technical Lead', x, 158, 23, '#C5CCD3');
  }
  svg += `<path d="M${x} ${compact ? 244 : 211}H${w-x}" stroke="#2A3038"/>`;
  svg += text(mono, '.NET / Azure / Angular', x, compact ? 272 : 239, 18, '#C6F432');
  fs.writeFileSync(`assets/variants/mono/header-${compact ? 'compact-' : ''}${theme}.svg`, svg + '</svg>\n');
}

}
main().catch(error => { console.error(error); process.exitCode = 1; });
