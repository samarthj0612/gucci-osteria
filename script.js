var hrs = new Date().getHours();
var min = new Date().getMinutes();
var sec = new Date().getSeconds();
var tym = hrs + ":" + min;
document.querySelector("#time").textContent = tym;

var main1 = gsap.timeline();
main1
  .to("#main1 #img", {
    duration: 1,
    backgroundSize: "100%",
  })
  .from(
    "#main1 #img div",
    {
      duration: 2,
      opacity: 0,
      y: 50,
    },
    "a"
  )
  .from(
    "#main1 #nav",
    {
      y: -50,
      opacity: 0,
      duration: 2,
    },
    "a"
  )
  .to("#main1 #img div", {
    scrollTrigger: {
      trigger: "#main1",
      start: "center center",
      end: "80% 60%",
      scrub: 2,
      pin: true,
    },
    bottom: "0%",
  });

var main2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#main2",
    start: "top 40%",
    end: "80% 80%",
    scrub: 2,
  },
});
main2
  .from(
    "#main2 p:nth-child(even)",
    {
      x: 100,
      opacity: 0,
    },
    "a"
  )
  .from(
    "#main2 p:nth-child(odd)",
    {
      x: -100,
      opacity: 0,
    },
    "a"
  );

var main3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#main3",
    start: "center center",
    pin: true,
    scrub: 2,
  },
});
main3.from("#main3 #img img", {
  opacity: 0,
  x: "100%",
});

var main4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#main4",
    start: "center center",
    pin: true,
    scrub: 2,
  },
});
main4
  .from(
    "#main4 #img1 #top img",
    {
      x: "-105%",
    },
    "b"
  )
  .from(
    "#main4 #img1 #btm h2",
    {
      y: "-120%",
    },
    "b"
  )
  .from(
    "#main4 #img1 #btm p",
    {
      y: "160%",
    },
    "b"
  )
  .from(
    "#main4 #img2 img",
    {
      opacity: 0,
      x: "105%",
    },
    "b"
  );
