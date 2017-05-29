var modal = document.querySelector(".modal");
var modalOverlay = document.querySelector(".modal-overlay");
var portfolioItem = document.querySelector(".portfolio__item");
var modalTitle = document.querySelector(".modal-aside__title");
var modalDescription = document.querySelector(".modal-aside__description");
var modalLink = document.querySelector(".modal-aside__link");
var modalImg = document.querySelector(".modal__img");
var portfolioItems = {
  "portfolio__item--1": {
    "title": "CarbCounter+ PWA",
    "description": "CarbCounter+ is a PWA (Progressive Web App) which I made to \n\
benefit myself with the ability to help others.\n\ \n\
The app is for people who are insulin dependent who count carbs and use a insulin \n\
to carb ratio to determine their dosages.",
    "link": "https://quazarrdesigns.github.io/projects/CarbCounterPlusAngular/app/index.html",
    "images": [
      {
        "src": "./img/modal/carbcounter_desktop.png",
        "alt": "CarbCounter+ Home Screen"
      }
    ]
  },
  "portfolio__item--2": {
    "title": "List CRM Phonegap App",
    "description": "",
    "link": "http://matthew.rayner.yoobee.net.nz/WE06/WE06_App/www/index.html#!/modules/login",
    "images": [
      {
        "src": "",
        "alt": ""
      }
    ]
  },
  "portfolio__item--3": {
    "title": "",
    "description": "",
    "link": ""
  },
  "portfolio__item--4": {
    "title": "",
    "description": "",
    "link": ""
  },
  "portfolio__item--5": {
    "title": "",
    "description": "",
    "link": ""
  },
  "portfolio__item--6": {
    "title": "",
    "description": "",
    "link": ""
  },
  "portfolio__item--7": {
    "title": "",
    "description": "",
    "link": ""
  }
};

modalOverlay.addEventListener("click", function () {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

portfolioItem.addEventListener("click", function (evt) {
  var item = evt.target.classList[1];
  modalTitle.innerHTML = portfolioItems[item].title;
  modalDescription.innerHTML = portfolioItems[item].description;
  modalLink.href = portfolioItems[item].link;
  modalImg.src = portfolioItems[item].images[0].src;
  modalImg.alt = portfolioItems[item].images[0].alt;
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});


