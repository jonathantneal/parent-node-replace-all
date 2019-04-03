import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const isPolyfill = String(process.env.NODE_ENV).includes('polyfill');
const isBrowser = String(process.env.NODE_ENV).includes('browser');
const targets = isBrowser ? 'last 2 versions, not dead' : { node: 6 };
const basename = isPolyfill ? 'polyfill' : 'ponyfill';
const input = `src/${basename}.js`;
const output = isBrowser
	? { file: `${basename}.js`, name: 'replaceAll', format: 'iife', strict: false }
: [
	{ file: `node/${basename}.js`, format: 'cjs', sourcemap: true, strict: false },
	{ file: `node/${basename}.mjs`, format: 'esm', sourcemap: true, strict: false }
];
const plugins = [
	babel({
		presets: [
			['@babel/env', {
				corejs: 3,
				loose: true,
				modules: false,
				targets,
				useBuiltIns: 'entry'
			}]
		]
	})
].concat(isBrowser
	? [
		terser()
	]
: []);

export default { input, output, plugins };
