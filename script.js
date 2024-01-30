function loading(){
    var tl = gsap.timeline();
tl.to(".yellow1",{
    top:"-100%",
    delay:.5,
    duartion:.5,
    ease:expo.out
})
tl.to(".yellow2",{
    top:"100%",
    delay:.5,
    duartion:.5,
    ease:expo.out
},"anime")
tl.to(".loader h1",{
    delay:.5,
    duartion:.5,
    color:"black"
},"anime")
tl.to(".loader",{
    display:"none"
})
}
loading();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});