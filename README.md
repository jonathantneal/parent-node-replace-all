# parent-node-replace-all [<img src="https://jonneal.dev/dom-logo.svg" alt="parent-node-replace-all" width="90" height="90" align="right">][parent-node-replace-all]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[parent-node-replace-all] is a ponyfill for the speculative
[`ParentNode.replaceAll`] method.

```html
<script src="https://unpkg.com/parent-node-replace-all/ponyfill"></script>
```

```bash
npm install parent-node-replace-all
```

The [`ParentNode.replaceAll`] method removes all child nodes from a
[`ParentNode`] while allowing the insertion of a new set of nodes.

```js
// node usage
import replaceAll from 'parent-node-replace-all';

// replace all of the elements in a document (script or node usage)
document::replaceAll(replacementDocumentFragment);
```

**[Try It Now]**. The script is approximately 120 bytes when minified and gzipped.

## Usage

For immediate usage, add this script to your document:

```html
<script src="https://unpkg.com/parent-node-replace-all/ponyfill"></script>
```

For Node usage, import [parent-node-replace-all]:

```js
const replaceAll = require('parent-node-replace-all');
```

## Browser compatibility

| Browser           | Native Support | Polyfill Support |
| ----------------- | -------------- | ---------------- |
| Android           | ✘              | 2.2+             |
| Blackberry        | ✘              | 7+               |
| Chrome            | ✘              | 4+               |
| Edge              | ✘              | 12+              |
| Firefox           | ✘              | 3.5+             |
| Internet Explorer | ✘              | 8+               |
| Opera             | ✘              | 10+              |
| Opera Mobile      | ✘              | 12+              |
| Safari (iOS)      | ✘              | 3.2+             |
| Safari (MacOS)    | ✘              | 3.1+             |

[cli-img]: https://img.shields.io/travis/jonathantneal/parent-node-replace-all/master.svg
[cli-url]: https://travis-ci.org/jonathantneal/parent-node-replace-all
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/parent-node-replace-all.svg
[npm-url]: https://www.npmjs.com/package/parent-node-replace-all

[`ParentNode`]: https://developer.mozilla.org/en/docs/Web/API/ParentNode
[`ParentNode.replaceAll`]: https://github.com/whatwg/dom/issues/478
[parent-node-replace-all]: https://github.com/jonathantneal/parent-node-replace-all
[Try It Now]: https://codepen.io/jonneal/pen/KYdzPV?editors=1010
