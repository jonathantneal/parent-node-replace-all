import replaceAll from './ponyfill';

export default function polyfill(window) {
	[window.Document, window.DocumentFragment, window.Element].forEach(ParentNode => {
		ParentNode.prototype.replaceAll = replaceAll;
	});
}
