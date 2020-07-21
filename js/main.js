window.addEventListener('scroll', function() {
    var docHeight = window.pageYOffset;
    var navImg = document.getElementById("navImg");
    var navLinks = document.getElementById("navLinks");
    var toggleIcon = document.getElementById('toggleIcon');
    var link1 = document.getElementById("link1");
    var link2 = document.getElementById("link2");
    var link3 = document.getElementById("link3");
    var link4 = document.getElementById("link4");
    if (docHeight > 750 && docHeight < 1500){
        navImg.style.marginLeft = '10px';
        link4.style.marginRight = '10px';
        link1.style.color = 'black';
        link2.style.color = 'black';
        link3.style.color = 'black';
        link4.style.color = 'black';
        navImg.style.filter =  'invert(1)';
        toggleIcon.style.fill = "black";
    }else{
        navImg.style.marginLeft = '100px';
        link4.style.marginRight = '100px';
        navImg.style.filter =  'invert(0)';
        link1.style.color = 'white';
        link2.style.color = 'white';
        link3.style.color = 'white';
        link4.style.color = 'white';
        toggleIcon.style.fill = "white";
    }
});window.addEventListener('scroll', function() {
    var docHeight = window.pageYOffset;
    var navImg = document.getElementById("navImg");
    var navLinks = document.getElementById("navLinks");
    var toggleIcon = document.getElementById('toggleIcon');
    var link1 = document.getElementById("link1");
    var link2 = document.getElementById("link2");
    var link3 = document.getElementById("link3");
    var link4 = document.getElementById("link4");
    if (docHeight > 2100){
        navImg.style.marginLeft = '10px';
        link4.style.marginRight = '10px';
        link1.style.color = 'black';
        link2.style.color = 'black';
        link3.style.color = 'black';
        link4.style.color = 'black';
        navImg.style.filter =  'invert(1)';
        toggleIcon.style.fill = "black";
    }
}); 
//  Typing effect
var typed = new Typed('.element', {
    strings: [
      'I create beautiful websites,',
      'I make exceptional graphics,',
      'I help with SEO,'
    ],
    stringsElement: null,
    // typing speed
    typeSpeed: 100,
    // time before typing starts
    startDelay: 800,
    // backspacing speed
    backSpeed: 70,
    // time before backspacing
    backDelay: 700,
    // loop
    loop: true,
    // false = infinite
    loopCount: 10,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function() {},
    // starting callback function before each string
    preStringTyped: function() {},
    //callback for every typed string
    onStringTyped: function() {},
    // callback for reset
    resetCallback: function() {}
  });
  (function ($) {
      "use strict";
      

