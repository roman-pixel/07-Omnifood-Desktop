///////////////////////////////////////////////////////////
// Current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Mobile nav
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const htmlEl = document.querySelector("html");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");

  // Disable scrolling when navigation is open
  if (headerEl.classList.contains("nav-open")) {
    htmlEl.style.overflow = "hidden";
  } else {
    htmlEl.style.overflow = "auto";
  }
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault;
    // const href = link.getAttribute("href");

    // // Scroll back to top
    // if (href === "#")
    //   window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //   });

    //   // Scroll to other links
    // if (href !== "#" && href.startsWith("#")) {
    //   const sectionEl = document.querySelector(href);
    //   sectionEl.scrollIntoView({ behavior: "smooth" });
    // }

    // Close mobile nav
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
      htmlEl.style.overflow = "auto";
    }
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
