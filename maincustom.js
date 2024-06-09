$(document).ready(function () {
  $(".about_button").click(function () {
    gsap.to(".about_card_wrapper", { left: 0, duration: 0.4, ease: "power2.out" });
  });

  $(".close_button").click(function () {
    gsap.to(".about_card_wrapper", { left: "100%", duration: 0.3, ease: "power2.out" });
  });

  /* contact form */
  $(".contact_button").click(function () {
    let tl = gsap.timeline();
    tl.set(".contact_bg", { display: "block" })
      .to(".contact_bg", { opacity: 1, duration: 0.2, ease: "power2.out" })
      .to(".contact_wrapper", { left: 0, duration: 0.4, ease: "power2.out" }, "<");
  });

  $(".close_contact").click(function () {
    let tl = gsap.timeline();
    tl.to(".contact_wrapper", { left: "-100%", duration: 0.3, ease: "power2.out" })
      .to(".contact_bg", { opacity: 0, duration: 0.2, ease: "power2.out" })
      .set(".contact_bg", { display: "none" });
  });

  $(".switch_to_contact").click(function () {
    let tl = gsap.timeline();
    tl.to(".about_card_wrapper", { left: "100%", duration: 0.3, ease: "power2.out" })
      .set(".contact_bg", { display: "block" })
      .to(".contact_bg", { opacity: 1, duration: 0.2, ease: "power2.out" })
      .to(".contact_wrapper", { left: 0, duration: 0.4, ease: "power2.out" }, "<");
  });

  var options = {
    "animate": true,
    "patternWidth": 100,
    "patternHeight": 100,
    "grainOpacity": 0.04,
    "grainDensity": 1,
    "grainWidth": 1,
    "grainHeight": 1
  }
  grained("#grainwrapper", options);

});
