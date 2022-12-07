gsap.registerPlugin(ScrollTrigger);

const el = document.getElementsByClassName("js-anime");

for (let i = 0; i < el.length; i++) {
  gsap.fromTo(
    el[i],
    {
      width:0,
      height:175,
    },
    {
      width: "auto",
      height:175,
      scrollTrigger: {
        trigger: el[i],
        start: "center center+=100",
        end: "center center-=100",
        markers: true,
      },
    }
  );
}
