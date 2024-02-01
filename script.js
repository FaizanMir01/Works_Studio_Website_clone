

var tl = gsap.timeline();
tl.to(".yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.5,
    ease: "expo.out"
});

tl.from(".yellow2", {
    top: "100%",
    delay: 0.7,
    duration: 0.5,
    ease: "expo.out"
}, "anime");

tl.to(".loader h1", {
    delay: 0.6,
    duration: 0.5,
    color: "black"
}, "anime");

tl.to(".loader", {
    opacity: 0
});

tl.to(".loader", {
    display: "none"
});



/* const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
}); */

