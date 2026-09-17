/**
 * Compiles docs/redesign design tokens (teldev-redesign-kit/design-system/tokens.json)
 * into app/ds-tokens.css: light values on :root, dark values on [data-theme="dark"],
 * {ref}-style references resolved, plus type-style utility classes with mobile overrides.
 *
 * Mobile type sizes aren't structured data in tokens.json (they're prose inside each
 * style's `usage` string), so MOBILE_TYPE below is transcribed from the canonical table in
 * teldev-redesign-kit/design-system/token-reference.md ("## Typography"). Re-sync this map
 * if that table changes.
 */
import { writeFileSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

interface RawColorToken {
  name: string;
  value: string | { light: string; dark: string };
  usage?: string;
}

interface SimpleToken {
  name: string;
  value: string;
  usage?: string;
}

interface ShadowToken {
  name: string;
  value: { light: string; dark: string };
  usage?: string;
}

interface TypeStyle {
  name: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
  letterSpacing: string;
  usage?: string;
}

interface TypeGroup {
  name: string;
  family: 'sans' | 'mono';
  styles: TypeStyle[];
}

interface TokensFile {
  color: { tokens: RawColorToken[] };
  type: { families: { sans: string; mono: string }; groups: TypeGroup[] };
  spacing: { tokens: SimpleToken[] };
  radius: { tokens: SimpleToken[] };
  shadow: { tokens: ShadowToken[] };
  opacity: { tokens: SimpleToken[] };
}

const MOBILE_TYPE: Record<string, { fontSize: string; lineHeight: string; letterSpacing?: string }> = {
  display: { fontSize: '40px', lineHeight: '44px', letterSpacing: '-0.01em' },
  h1: { fontSize: '34px', lineHeight: '40px' },
  h2: { fontSize: '28px', lineHeight: '34px' },
  h3: { fontSize: '22px', lineHeight: '29px' },
  h4: { fontSize: '20px', lineHeight: '27px' },
  h5: { fontSize: '17px', lineHeight: '25px' },
  h6: { fontSize: '16px', lineHeight: '24px' },
  lead: { fontSize: '18px', lineHeight: '29px' },
  body: { fontSize: '15px', lineHeight: '24px' },
};

const REF_PATTERN = /^\{(.+)\}$/;

function resolveRef(value: string, rawByName: Map<string, string>): string {
  const match = REF_PATTERN.exec(value);
  if (!match) return value;
  const refName = match[1] as string;
  const resolved = rawByName.get(refName);
  if (!resolved) throw new Error(`Unresolvable token reference: {${refName}}`);
  return resolved;
}

function cssVarName(prefix: string, name: string): string {
  return `--${prefix}-${name}`;
}

function main() {
  const tokensPath = resolve(
    process.cwd(),
    'teldev-redesign-kit/design-system/tokens.json'
  );
  const tokens = JSON.parse(readFileSync(tokensPath, 'utf-8')) as TokensFile;

  // Raw palette: name -> hex, for resolving {ref} strings in semantic tokens/shadows.
  const rawByName = new Map<string, string>();
  const semanticTokens: RawColorToken[] = [];
  for (const token of tokens.color.tokens) {
    if (typeof token.value === 'string') {
      rawByName.set(token.name, token.value);
    } else {
      semanticTokens.push(token);
    }
  }

  const lightColorVars: string[] = [];
  const darkColorVars: string[] = [];
  for (const token of semanticTokens) {
    const value = token.value as { light: string; dark: string };
    lightColorVars.push(`  --${token.name}: ${resolveRef(value.light, rawByName)};`);
    darkColorVars.push(`  --${token.name}: ${resolveRef(value.dark, rawByName)};`);
  }

  const spacingVars = tokens.spacing.tokens.map(
    (t) => `  ${cssVarName('space', t.name.replace(/^space-/, ''))}: ${t.value};`
  );
  const radiusVars = tokens.radius.tokens.map(
    (t) => `  ${cssVarName('radius', t.name.replace(/^radius-/, ''))}: ${t.value};`
  );
  const opacityVars = tokens.opacity.tokens.map(
    (t) => `  ${cssVarName('opacity', t.name.replace(/^opacity-/, ''))}: ${t.value};`
  );

  const lightShadowVars: string[] = [];
  const darkShadowVars: string[] = [];
  for (const token of tokens.shadow.tokens) {
    const varName = cssVarName('shadow', token.name.replace(/^shadow-/, ''));
    lightShadowVars.push(`  ${varName}: ${token.value.light};`);
    darkShadowVars.push(`  ${varName}: ${token.value.dark};`);
  }

  const fontVars = [
    `  --font-sans: ${tokens.type.families.sans};`,
    `  --font-mono: ${tokens.type.families.mono};`,
  ];

  const typeClasses: string[] = [];
  const typeMobileOverrides: string[] = [];
  for (const group of tokens.type.groups) {
    for (const style of group.styles) {
      typeClasses.push(
        [
          `.${style.name} {`,
          `  font-family: var(--font-${group.family});`,
          `  font-size: ${style.fontSize};`,
          `  line-height: ${style.lineHeight};`,
          `  font-weight: ${style.fontWeight};`,
          `  letter-spacing: ${style.letterSpacing};`,
          `}`,
        ].join('\n')
      );

      const mobile = MOBILE_TYPE[style.name];
      if (mobile) {
        typeMobileOverrides.push(
          [
            `  .${style.name} {`,
            `    font-size: ${mobile.fontSize};`,
            `    line-height: ${mobile.lineHeight};`,
            mobile.letterSpacing ? `    letter-spacing: ${mobile.letterSpacing};` : null,
            `  }`,
          ]
            .filter(Boolean)
            .join('\n')
        );
      }
    }
  }

  const css = `/* AUTO-GENERATED by scripts/build-tokens.ts — do not edit directly. */

:root {
${[...lightColorVars, ...spacingVars, ...radiusVars, ...opacityVars, ...lightShadowVars, ...fontVars].join('\n')}
}

[data-theme='dark'] {
${[...darkColorVars, ...darkShadowVars].join('\n')}
}

${typeClasses.join('\n\n')}

@media (max-width: 767px) {
${typeMobileOverrides.join('\n\n')}
}
`;

  const outPath = resolve(process.cwd(), 'app/ds-tokens.css');
  writeFileSync(outPath, css, 'utf-8');
  console.log(`Wrote ${outPath}`);
}

main();
