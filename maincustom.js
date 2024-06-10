$(document).ready(function () {

  let animate = $(
    ".hero_heading, .video_wrapper, .logo_wrapper, .nav, .about_wrapper, .wishlist_card, .about_content, .main_work, .main_content, .main_contact, .contact_main"
  );

  let tl = gsap.timeline();

  function animateAboutContent() {
    return gsap.fromTo(".about_content", { opacity: 0, y: 20 }, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out"
    });
  }

  function animateContactPanel() {
    return gsap.fromTo(".contact_main", { opacity: 0, y: 20 }, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out"
    });
  }

  tl.set(animate, { visibility: "visible" });

  tl.from(".main_content", {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    })
    .from(".video_wrapper", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.out"
    })
    .from([".hero_heading"], {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.5")
    .from(".main_header", { opacity: 0, duration: 0.4, ease: "power2.out" }, "-=0.3")
    .from([".about_wrapper", ".wishlist_card", ".about_content"], {
      opacity: 0,
      y: 20,
      duration: 0.4,
      stagger: { each: 0.3, from: "start" },
      ease: "power2.out"
    })
    .from(".main_work", {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out"
    }, "-=1");

  $(".about_button").click(function () {
    let tl = gsap.timeline();

    tl.to(".about_card_wrapper", { left: 0, duration: 0.4, ease: "power2.out" });

    tl.add(animateAboutContent());

  });

  $(".close_button").click(function () {
    let tl = gsap.timeline();

    tl.to(".about_card_wrapper", { left: "100%", duration: 0.3, ease: "power2.out" });

    tl.add(animateAboutContent().reverse());
  });

  /* contact form */
  $(".contact_button").click(function () {
    let tl = gsap.timeline();
    tl.set(".contact_bg", { display: "block" })
      .to(".contact_bg", { opacity: 1, duration: 0.2, ease: "power2.out" })
      .to(".contact_wrapper", { left: 0, duration: 0.4, ease: "power2.out" }, "<");
    tl.add(animateContactPanel());
  });

  $(".close_contact").click(function () {
    let tl = gsap.timeline();
    tl.to(".contact_wrapper", { left: "-100%", duration: 0.3, ease: "power2.out" })
      .to(".contact_bg", { opacity: 0, duration: 0.2, ease: "power2.out" })
      .set(".contact_bg", { display: "none" });

    tl.add(animateContactPanel().reverse());
  });

  $(".switch_to_contact").click(function () {
    let tl = gsap.timeline();
    tl.to(".about_card_wrapper", { left: "100%", duration: 0.3, ease: "power2.out" })
      .set(".contact_bg", { display: "block" })
      .to(".contact_bg", { opacity: 1, duration: 0.2, ease: "power2.out" })
      .to(".contact_wrapper", { left: 0, duration: 0.4, ease: "power2.out" }, "<");

    tl.add(animateContactPanel());
  });

  var options = {
    "animate": true,
    "patternWidth": 100,
    "patternHeight": 100,
    "grainOpacity": 0.06,
    "grainDensity": 1,
    "grainWidth": 1,
    "grainHeight": 1
  }
  grained("#grainwrapper", options);

});
