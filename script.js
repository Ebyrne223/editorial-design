console.log ( '🐻' );
gsap.registerPlugin(ScrollTrigger);

// defaults
ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause"
});

// Panel One
gsap.to(".one h1", {
  scrollTrigger: "one",

});

// Panel Two
gsap.to(".two", {
  scrollTrigger: "two"
});

// Panel Three
gsap.to(".three p", {
  
  scrollTrigger: "three",


});

// Panel Four
gsap.to(".four", {
  scrollTrigger: "four"
  
});

// Panel Five
gsap.to(".five", {
  scrollTrigger: "five"
});


// Panel Six
gsap.to(".six", {
 
});