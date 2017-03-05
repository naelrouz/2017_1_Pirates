'use strict';


window.Framework.ActivityTag = class ActivityTag extends HTMLElement {
	constructor() {
		super();
	}
};


window.Framework.Activity = class Activity {
	constructor() {
		this.view = null;
		this.tag = null;
		this.enterAnimation = null;
		this.leaveAnimation = null;
	}

	fireAnimation(animation, reverse) {
		const content = document.querySelector('app-content');

		if (!animation) {
			content.dispatchEvent(new Event('AnimationEnd'));
			return;
		}

		animation.apply(reverse);

		content.addEventListener('_AnimationEnd', () => {
			animation.remove();
			content.dispatchEvent(new Event('AnimationEnd'));
		}, {once: true});

		//animation.apply(reverse);
	}

	onBeforeEnter() {
		if (this.view) {
			const content = document.querySelector('app-content');

			while(content.firstChild) {
				content.removeChild(content.firstChild);
			}

			content.appendChild(this.view);
			this.fireAnimation(this.enterAnimation, false);
		}
	}

	onBeforeLeave() {
		if (this.view) {
			this.fireAnimation(this.leaveAnimation, true);
		}
	}

	onEnter(args) {
	}

	onLeave() {
	}

	onSetupListeners() {
	}
};
