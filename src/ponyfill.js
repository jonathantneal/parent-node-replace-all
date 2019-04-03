export default function replaceAll() {
	while (this.lastChild) {
		this.removeChild(this.lastChild);
	}

	this.append.apply(this, arguments);
}
