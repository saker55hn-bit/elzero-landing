// control appearnce of other-links
let targetElement = document.querySelector(".target");
let neededElment = document.querySelector(".other-links");
let counter = 0;

targetElement.onclick = function () {
  if (counter % 2 === 0) {
    neededElment.style.display = "flex";
    counter++;
  } else {
    neededElment.style.display = "none";
    counter++;
  }
};
// control appearnce of other-links

// turning on the interaction in our-skill section when enter it
let sections = document.querySelectorAll(".observe");
let progresses = document.querySelectorAll(".progress");

let clientsCounter = document.querySelector(".clients-counter");
let projectCounter = document.querySelector(".project-counter");
let countriesCounter = document.querySelector(".countries-counter");
let moneyCounter = document.querySelector(".money-counter");

var counterForClients = 0;
var counterForProjects = 0;
var counterForCountries = 0;
var counterForMoney = 0;

const observerOptions = {
  root: null,
  threshold: 0.2,
};

let sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.className == "skills observe") {
        progresses.forEach((progress) => {
          progress.classList.add("ob");
        });
      } else if (entry.target.className == "statistics observe") {
        let x = setInterval(() => {
          counterForClients++;
          if (counterForClients === 151) {
            clearInterval(x);
          } else {
            clientsCounter.innerHTML = counterForClients;
          }
        }, 15);

        let y = setInterval(() => {
          counterForProjects++;
          if (counterForProjects === 136) {
            clearInterval(y);
          } else {
            projectCounter.innerHTML = counterForProjects;
          }
        }, 15);

        let z = setInterval(() => {
          counterForCountries++;
          if (counterForCountries === 51) {
            clearInterval(z);
          } else {
            countriesCounter.innerHTML = counterForCountries;
          }
        }, 15);

        let p = setInterval(() => {
          counterForMoney++;
          if (counterForMoney === 501) {
            clearInterval(p);
          } else {
            moneyCounter.innerHTML = counterForMoney;
          }
        }, 5);
      }
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach((section) => {
  sectionObserver.observe(section);
});
// turning on the interaction in our-skill section when enter it
