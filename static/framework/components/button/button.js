'use strict';


window.addEventListener('CreateComponents', () => {

	window.Component.Button = class extends window.Framework.ComponentStub.Button {
		constructor() {
			super();
		}

		textChange(text) {
			this.view.innerHTML += `<br>Text changed! New value: '${text}'.`;
		}
	};

});

