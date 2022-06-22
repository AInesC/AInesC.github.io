gsap.registerPlugin(TextPlugin);

// NAME ANIMATION

const myName = document.querySelector('#intro span');

gsap.to(myName, {
	delay: 0.5,
	duration: 1.7,
	text: 'Alexandra Cruz',
	ease: 'none',
});

// HAMBURGER MENU ANIMATIONS

const showMenu = document.getElementById('showMenu');
const nav = document.getElementById('nav');
const hideMenu = document.getElementById('hideMenu');

let tl = gsap.timeline({ defaults: { duration: 1, opacity: 1 } });

showMenu.addEventListener('click', () => {
	let tl = gsap.timeline({ defaults: { opacity: 1 } });

	tl.to(nav, {
		xPercent: -100,
		ease: 'sine.out',
		duration: 0.7,
	});

	tl.to('.menu__item', {
		stagger: 0.3,
		ease: 'sine.out',
		duration: 1.5,
	});
});

hideMenu.addEventListener('click', () => {
	let tl = gsap.timeline({ defaults: { opacity: 0 } });

	tl.to('.menu__item', {
		stagger: 0.3,
		ease: 'sine.out',
		duration: 1.5,
	});

	tl.to(nav, {
		xPercent: 100,
		ease: 'sine.in',
		duration: 0.7,
	});
});

// DISPLAY HIDDEN SECTION
const moreInfo = document.getElementById('moreInfo');
const projectsInfo = document.getElementById('projectsInfo');
const arrow = document.getElementById('arrow');
let open = false;

console.log(projectsInfo);

moreInfo.addEventListener('click', () => {
	open = !open;

	if (open) {
		arrow.style.transform = 'rotateX(3.142rad)';
		projectsInfo.style.display = 'grid';
	} else {
		arrow.style.transform = '';
		projectsInfo.style.display = 'none';
	}
});
