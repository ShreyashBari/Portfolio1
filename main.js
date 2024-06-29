document.addEventListener("DOMContentLoaded", function() {
    // Sticky Header
    window.addEventListener("scroll", function() {
        var header = document.querySelector(".header");
        header.classList.toggle("sticky", window.scrollY > 0);
    });

    // Menu Toggle
    var menuIcon = document.getElementById("menu-icon");
    var navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });

    // Portfolio Layer
    var portfolioBoxes = document.querySelectorAll(".portfolio-box");

    portfolioBoxes.forEach(function(box) {
        box.addEventListener("mouseover", function() {
            var layer = box.querySelector(".portfolio-layer");
            layer.style.opacity = "1";
        });

        box.addEventListener("mouseout", function() {
            var layer = box.querySelector(".portfolio-layer");
            layer.style.opacity = "0";
        });
    });

    // Auto Typing Effect
   //

   // function erase() {
      //  if (charIndex > 0) {
       //     typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
       //     charIndex--;
       //     setTimeout(erase, erasingDelay);
      //  } else {
       //     textArrayIndex++;
      //   //   if (textArrayIndex >= textArray.length) textArrayIndex = 0;
       //     setTimeout(type, typingDelay + 1100);
      //  }
    //}

   // document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    //    if (textArray.length) setTimeout(type, newTextDelay + 250);
  //  });
});
