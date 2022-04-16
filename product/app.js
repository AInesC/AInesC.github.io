// HAMBURGER MENU ANIMATIONS
const showMenu = document.getElementById("showMenu");
const hidden = document.querySelector(".hidden");

let openMenu = false;

let tl = gsap.timeline({ defaults: { duration: 1, opacity: 1 } });

tl.paused(true);

tl.to(hidden, {
	xPercent: 100,
	delay: 0.3,
	ease: "sine.out",
});

tl.to(".main-menu__item", {
	ease: "sine.in",
	stagger: 0.3,
});

showMenu.addEventListener("click", () => {
	if (openMenu === false) {
		tl.play();

		openMenu = true;
	} else {
		tl.reverse();

		openMenu = false;
	}
});

// IMAGE SLIDER
const previousImg = document.getElementById("previousImg");
const nextImg = document.getElementById("nextImg");
const image = document.getElementById("image");

const images = [
	"/product/images/image-product-1.jpg",
	"/product/images/image-product-2.jpg",
	"/product/images/image-product-3.jpg",
	"/product/images/image-product-4.jpg",
];

const max = images.length - 1;

let i = 0;

previousImg.addEventListener("click", () => {
	i--;

	if (i < 0) {
		i = max;
	}

	image.src = images[i];
});

nextImg.addEventListener("click", () => {
	i++;

	if (i > max) {
		i = 0;
	}

	image.src = images[i];
});

// ADD/REMOVE ITEMS FROM CART
const less = document.getElementById("less");
const more = document.getElementById("more");
const currentItems = document.querySelector(".cart__current-items");
const text = currentItems.textContent;
let number = parseInt(text);

less.addEventListener("click", () => {
	if (number > 0) {
		number--;
		currentItems.textContent = number;
	} else {
		alert("You have no items to remove");
	}
});

more.addEventListener("click", () => {
	if (number < 20) {
		number++;
		currentItems.textContent = number;
	}
	if (number == 20) {
		alert("You cannot add more items to the cart");
	}
});

// IMAGE ZOOM
image.addEventListener("mousemove", () => {
	image.style.transform = "scale(2)";
});
