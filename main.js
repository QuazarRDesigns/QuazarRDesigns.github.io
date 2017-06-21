var modal = document.querySelector(".modal"),
modalOverlay = document.querySelector(".modal-overlay"),
modalClose = document.querySelector(".modal-close"),
portfolioItem = document.querySelector(".portfolio__item"),
modalDescription = document.querySelector(".modal-aside__description"),
modalLink = document.querySelector(".modal-aside__link"),
modalImg = document.querySelector(".modal__img"),
portfolioItems = {
  "portfolio__item--1": {
    "title": "CarbCounter+ PWA",
    "description": `CarbCounter+ is a PWA (Progressive Web App) that I created
    to help myself to more accurately calculate my carb intake and insulin dosages
    and added some settings so it can be set up to help more people than just myself.
    <br/>
    I used AngularJS to build for Angular's simple data binding and instant updating of values.`,
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

modalOverlay.addEventListener("click", function (evt) {
 if (evt.target === modalOverlay || evt.target === modalClose) {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
 }
});

portfolioItem.addEventListener("click", function (evt) {
  var item = evt.target.classList[1];
  modalDescription.innerHTML = portfolioItems[item].description;
  modalLink.href = portfolioItems[item].link;
  modalImg.src = portfolioItems[item].images[0].src;
  modalImg.alt = portfolioItems[item].images[0].alt;
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});


