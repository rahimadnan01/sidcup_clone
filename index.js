let crsr = document.querySelector(".cursor");
let blur = document.querySelector(".cursor-blur");
let h4 = document.querySelectorAll(".nav h4");
document.addEventListener("mousemove", function (dets) {
  crsr.style.top = dets.clientY + "px";
  crsr.style.left = dets.clientX + 30 + "px";
  blur.style.top = dets.clientY - 250 + "px";
  blur.style.left = dets.clientX - 250 + "px";
});

gsap.to(".nav", {
  backgroundColor: "black",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
gsap.to(".main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top -25%",
    end: "top -100%",
    scrub: 2,
  },
});
h4.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.background = "transparent";
    crsr.style.border = "1px solid #fff";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.background = "#95c11e";
    crsr.style.border = "0px solid #95c11e ";
  });
});

gsap.from(".about img , .about-us-in", {
  y: 50,
  opacity: 0,
  duration: 2,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".about",
    scroller: "body",
    start: "top 60%",
    end: "top 58%",
    scrub: 3,
  },
});

gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 68%",
    scrub: 2,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 80,
  x: 80,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    start: "top 60%",
    end: "top 55%",
    scrub: 2,
  },
});

gsap.from(".page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: ".page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
