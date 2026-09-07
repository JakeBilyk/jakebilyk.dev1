/* Panel navigation with native hash history and a no-JavaScript fallback. */
(() => {
	'use strict';
	const panels = [...document.querySelectorAll('#main > .panel')];
	const links = [...document.querySelectorAll('#nav > a')];
	function showPanel(moveFocus = false) {
		const panel = panels.find(item => '#' + item.id === location.hash) || panels[0];
		panels.forEach(item => { item.hidden = item !== panel; });
		links.forEach(link => {
			const active = link.hash === '#' + panel.id;
			link.classList.toggle('active', active);
			if (active) link.setAttribute('aria-current', 'page');
			else link.removeAttribute('aria-current');
		});
		if (moveFocus) {
			panel.tabIndex = -1;
			panel.focus({ preventScroll: true });
			window.scrollTo(0, 0);
		}
	}
	window.addEventListener('hashchange', () => showPanel(true));
	showPanel();
	document.body.classList.remove('is-preload');
})();
