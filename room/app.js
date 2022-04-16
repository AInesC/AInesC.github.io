const heroData = [
	{
		title: "Discover innovative ways to decorate",
		text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
		imgMobile: "/room/images/mobile-image-hero-1.jpg",
		imgDesktop: "/room/images/desktop-image-hero-1.jpg",
	},
	{
		title: "We are available all across the globe",
		text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
		imgMobile: "/room/images/mobile-image-hero-2.jpg",
		imgDesktop: "/room/images/desktop-image-hero-2.jpg",
	},
	{
		title: "Manufactured with the best materials",
		text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
		imgMobile: "/room/images/mobile-image-hero-3.jpg",
		imgDesktop: "/room/images/desktop-image-hero-3.jpg",
	},
];

const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const heroTitle = document.querySelector(".hero__title");
const heroText = document.querySelector(".hero__description");
const image = document.querySelector("header");
const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");

let i = 0;

if (window.matchMedia("(max-width: 700px)").matches) {
	image.style.backgroundImage = "url(" + heroData[i].imgMobile + ")";
} else {
	image.style.backgroundImage = "url(" + heroData[i].imgDesktop + ")";
}

leftBtn.addEventListener("click", () => {
	i--;

	if (i < 0) {
		i = heroData.length - 1;
	}

	heroTitle.textContent = heroData[i].title;
	heroText.textContent = heroData[i].text;

	if (window.matchMedia("(max-width: 700px)").matches) {
		image.style.backgroundImage = "url(" + heroData[i].imgMobile + ")";
	} else {
		image.style.backgroundImage = "url(" + heroData[i].imgDesktop + ")";
	}
});

rightBtn.addEventListener("click", () => {
	i++;

	if (i >= heroData.length) {
		i = 0;
	}

	heroTitle.textContent = heroData[i].title;
	heroText.textContent = heroData[i].text;

	if (window.matchMedia("(max-width: 700px)").matches) {
		image.style.backgroundImage = "url(" + heroData[i].imgMobile + ")";
	} else {
		image.style.backgroundImage = "url(" + heroData[i].imgDesktop + ")";
	}
});

gsap.to(".hero__cta img", {
	yoyo: true,
	repeat: -1,
	x: 50,
	duration: 0.7,
	ease: "back.out(1.7)",
	delay: 0.2,
});

hamburger.addEventListener("click", () => {
	gsap.to(".menu", {
		xPercent: 100,
		duration: 1,
		delay: 0.2,
		ease: "sine.out",
		opacity: 1,
	});
});

close.addEventListener("click", () => {
	gsap.to(".menu", {
		xPercent: -100,
		duration: 1,
		delay: 0.2,
		ease: "sine.in",
		opacity: 0,
	});
});
