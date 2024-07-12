// Selecting elements 
var stripleft = document.querySelector(".strip-img1");
var stripright = document.querySelector(".strip-img2");
var strip = document.querySelector(".strip");

// GSAP animations with ScrollTrigger
gsap.from(strip, {
    duration: 2,
    x: "-200",
    ease: "elastic.out(1, 0.6)",
    scrollTrigger: {
        scroller: "body",
        trigger: ".page-5",
        start: "top 20%",
        end: "top 5%",
        // markers: true,
        scrub: 2
    }
});

var body = document.querySelector("body");
var cursor = document.querySelector(".cursor");

body.addEventListener("mousemove", function(dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y
    });
});

gsap.to(".loader", {
    duration: 6,
    top: 0,
    y: -1000,
    opacity: 1,
    ease: "power3.out"
});

var video = document.getElementById("move");
var move = document.querySelector(".row-1 video");

video.pause();

move.addEventListener("mouseenter", function() {
    video.play();
});

move.addEventListener("mousemove", function() {
    video.play();
});

move.addEventListener("mouseout", function() {
    video.pause();
});

var nav = document.querySelector(".nav-link");
var icon = document.querySelector(".nav-icon");

gsap.from(nav, {
    duration: 1,
    y: -200,
    delay: 0.5,
    stagger: true
});

gsap.from(icon, {
    duration: 1,
    y: -200,
    delay: 0.5,
    stagger: true
});

var img = document.querySelector(".row-1 img");
var video = document.querySelector(".row-1 video");

gsap.from(img, {
    x: -500,
    opacity: 0,
    duration: 1.2,
    ease: "elastic.out(1, 0.6)",
    scrollTrigger: {
        scroller: "body",
        trigger: ".page-2",
        start: "top 30%",
        end: "top 0%",
        // markers: true,
        scrub: 2
    }
});

gsap.from(video, {
    x: 500,
    opacity: 0,
    duration: 1.2,
    ease: "elastic.out(1, 0.6)",
    scrollTrigger: {
        scroller: "body",
        trigger: ".page-2",
        start: "top 30%",
        end: "top 0%",
        // markers: true,
        scrub: 2
    }
});

var card = document.querySelector(".cards");

gsap.from(card, {
    duration: 1,
    opacity: 0,
    y: 100,
    ease: "elastic.out(1, 0.6)",
    scrollTrigger: {
        scroller: "body",
        trigger: ".page-6",
        start: "top 30%",
        end: "top 0%",
        // markers: true,
        scrub: 2,
        stagger: 0.5
    }
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slidee');
const totalSlides = slides.length;

document.getElementById('next').addEventListener('click', () => {
    slides[currentSlide].classList.remove('activee');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('activee');
});

document.getElementById('prev').addEventListener('click', () => {
    slides[currentSlide].classList.remove('activee');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('activee');
});


slides[currentSlide].classList.add('activee');



// Locomotive Scroll 

// const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("body"),
//     smooth: true,
//     // lerp: 0.02
//   });
  
  // GSAP aur ScrollTrigger 
//   locoScroll.on("scroll", ScrollTrigger.update);
  
//   ScrollTrigger.scrollerProxy("[data-scroll-container]", {
//     scrollTop(value) {
//         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//     },
//     pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
// });

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.refresh();

  
  



// var stripleft = document.querySelector(".strip-img1")

// var stripright = document.querySelector(".strip-img2")

// var strip = document.querySelector(".strip")

// gsap.from(strip,{
//     duration: 2,
//     x: "-200",
//     ease: "elastic.out(1, 0.6)",

//     scrollTrigger: {
//         scroller: "body",
//         trigger: ".page-5",
//         start: "top 45%",
//         end: "top 25%",
//         markers: true,
//         scrub: 2
//     }

 
// })



// var body = document.querySelector("body")
// var cursor = document.querySelector(".cursor")

// body.addEventListener("mousemove", function(dets){
//       gsap.to(cursor,{
//           x: dets.x,
//           y: dets.y,
          
         
//       })
// })



// gsap.to(".loader",{
//     duration: 6,
//     top: 0,
//     y: -1000,
//     opacity: 1,
//     ease: "power3.out"
// })

// var video = document.getElementById("move")

// var move = document.querySelector(".row-1 video")

// video.pause();

// move.addEventListener("mouseenter", function(){
//     video.play();
// })

// move.addEventListener("mousemove", function(){
//     video.play();
// })

// move.addEventListener("mouseout", function(){
//     video.pause();
// })


// var nav = document.querySelector(".nav-link")
// var icon = document.querySelector(".nav-icon")

// gsap.from(nav,{
//     duration: 1,
//     y: -200,
//     delay: 0.5,
//     stagger: true
// })


// gsap.from(icon,{
//     duration: 1,
//     y: -200,
//     delay: 0.5,
//     stagger: true
// })


// var img = document.querySelector(".row-1 img")

// var video = document.querySelector(".row-1 video")

// gsap.from(img,{
//     x: -500,
//     opacity: 0,
//     duration: 1.2,
//     ease: "elastic.out(1, 0.6)",
//     scrollTrigger: {
//         scroller: "body",
//         trigger: ".page-2",
//         start: "top 30%",
//         end: "top 0%",
//         markers: true,
//         scrub: 2
//     }

// })

// gsap.from(video,{
//     x: 500,
//     opacity: 0,
//     duration: 1.2,
//     ease: "elastic.out(1, 0.6)",
//     scrollTrigger: {
//         scroller: "body",
//         trigger: ".page-2",
//         start: "top 30%",
//         end: "top 0%",
//         markers: true,
//         scrub: 2
//     }

// })

// var card = document.querySelector(".cards")

// // var stagger = document.querySelector(".card-img img")

// gsap.from(card, {
//     duration: 1,
//     opacity: 0,
//     y: 100,
//     ease: "elastic.out(1, 0.6)",
//     scrollTrigger: {
//         scroller: "body",
//         trigger: ".page-6",
//         start: "top 30%",
//         end: "top 0%",
//         markers: true,
//         scrub: 2,
//         stagger: 0.5
//     }
// })

// gsap.to(stagger,{
//     duration: 1,
//     opacity: 0,
//     y: -100,
//     ease: "elastic.out(1, 0.6)",
//     delay: 0.5,
//     scrollTrigger:{
//         scroller: "body",
//         trigger: ".page-6",
//         start: "top 30%",
//         end: "top 0%",
//         markers: true,
//         scrub: 2,
//         stagger: 0.5
//     }
// })

// // strip-slide-code



// // swiper-code

// let currentSlide = 0;
// const slides = document.querySelectorAll('.slidee');
// const totalSlides = slides.length;

// document.getElementById('next').addEventListener('click', () => {
//     slides[currentSlide].classList.remove('activee');
//     currentSlide = (currentSlide + 1) % totalSlides;
//     slides[currentSlide].classList.add('activee');
// });

// document.getElementById('prev').addEventListener('click', () => {
//     slides[currentSlide].classList.remove('activee');
//     currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
//     slides[currentSlide].classList.add('activee');
// });

// // Initially display the first slide
// slides[currentSlide].classList.add('activee');


// // locomotive js

// const scroll = new LocomotiveScroll({
//     el: document.querySelector("body"),
//     smooth: true,
//     lerp: 0.02
// });





//     // document.querySelector("DOMContentLoaded", function(){

//     // var cursor = document.querySelector(".cursor")

//     // var body = document.querySelector("body")

//     // body.addEventListener("mousemove", function(dets){
//     //     gsap.to(cursor,{
//     //         x: dets.clientX,
//     //         y: dets.clientY,
//     //         duration: 0.5
        
        
//     //     })
       
        
//     // });

//     // });



// // var main = document.querySelector("body")
// // var crsr = document.querySelector(".cursor")

// // main.addEventListener("mousemove", function (dets) {
// //     gsap.to(crsr, {
// //         x: dets.x,
// //         y: dets.y
// //     })

// // })













// // var login = document.querySelector("#login")

// // var overlay = document.querySelector(".overlay-footerrrr")

// // login.addEventListener("click", function(){
// //     overlay.style.scale = "scale(2)"
// //     overlay.style.visibility = "visible"
    
// // })