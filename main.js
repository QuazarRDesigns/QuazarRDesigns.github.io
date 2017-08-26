var modal = document.querySelector(".modal"),
        modalOverlay = document.querySelector(".modal-overlay"),
        modalClose = document.querySelector(".modal-close"),
        modalTitle = document.querySelector(".modal-label__text"),
        modalDescription = document.querySelector(".modal-aside__description"),
        modalLink = document.querySelector(".modal-aside__link"),
        modalImg = document.querySelector(".modal__img"),
        portfolioItems = document.querySelectorAll(".portfolio__item"),
        selectedItem = '',
        orientation = '',
        modalItems = {
          "portfolio__item--1": {
            "title": "CarbCounter+ PWA",
            "description": `CarbCounter+ is a PWA (Progressive Web App) that I created
            to help myself to more accurately calculate my carb intake and insulin dosages
            and added some settings so it can be set up to help more people than just myself.
            <br/>
            I used AngularJS to build for Angular's simple data binding and instant updating of values.
          <div class="modal-aside__features">
            <h2>Features</h2>
            <ul class="modal-aside__feature-list">
              <li>Carbohydrate calculator</li>
              <li>Doseage calculator</li>
              <li>Set carb unit CU, BU, and g</li>
              <li>Set blood glucose unit mmol/l, and mg/dl</li>
              <li>Set correction factor</li>
              <li>Set target BG level</li>
              <li>Set carb to insulin ratio</li>
            </ul>
          </div>`,
            "link": "https://quazarrdesigns.github.io/projects/CarbCounterPlusAngular/app/index.html",
            "images": [{
                "desktop": [{
                    "src": "./img/modal/carbcounter_desktop.png",
                    "alt": "List CRM"
                  }],
                "mobile": [{
                    "src": "./img/modal/carbcounter_mobile.png",
                    "alt": "List CRM"
                  }]
              }]
          },
          "portfolio__item--2": {
            "title": "List CRM Phonegap App",
            "description": `List CRM is a simplified CRM (Customer Relationship Management) App
            designed for easy and quick use by sales representatives after they contact one of their many
            customers.
            <br/>
            I used AngularJS to communicate with a REST API written in PHP to retrieve data from and write to a mySQL database.
            <div class="modal-aside__features">
            <h2>Features</h2>
            <ul class="modal-aside__feature-list">
              <li>Customers displayed in list format</li>
              <li>Easy to distinguish different contact statuses</li>
              <li>Custom Notes and Quotes</li>
              <li>Sortable list</li>
            </ul>
          </div>`,
            "link": "http://matthew.rayner.yoobee.net.nz/WE06/WE06_App/www/index.html#!/modules/login",
            "images": [{
                "desktop": [{
                    "src": "./img/modal/list_crm_calllist_desktop.png",
                    "alt": "List CRM"
                  }],
                "mobile": [{
                    "src": "./img/modal/list_crm_calllist_mobile.png",
                    "alt": "List CRM"
                  }]
              }]
          },
          "portfolio__item--3": {
            "title": "Fly to the Limit",
            "description": `Fly to the limit is an example scenic flight booking website.`,
            "link": "https://quazarrdesigns.github.io/projects/FTTL/index.html",
            "images": [{
                "desktop": [{
                    "src": "./img/modal/fttl_desktop.png",
                    "alt": "Fly to the Limit Landing Page"
                  }],
                "mobile": [{
                    "src": "./img/modal/fttl_mobile.png",
                    "alt": "Fly to the Limit Landing Page"
                  }]
              }]
          },
          "portfolio__item--4": {
            "title": "SAB Identity Design",
            "description": `I made this branding for a class project SAB is a fictional company.
      The goal of the branding was to convey stability and integrity`,
            "link": "./projects/SAB_brand_identity.pdf",
            "images": [{
                "desktop": [{
                    "src": "./img/modal/sab_businesscard.png",
                    "alt": "SAB business card"
                  }],
                "mobile": [{
                    "src": "./img/modal/sab_housestyle.png",
                    "alt": "SAB house style guide"
                  }]
              }]
          },
          "portfolio__item--5": {
            "title": "EECA Ad Campaign",
            "description": `Fictional advertising campaign for a scheme to switch to electric vehicles by EECA.`,
            "link": "./projects/EECA_ad_campaign.pdf",
            "images": [{
                "desktop": [{
                    "src": "./img/modal/eeca_billboard.png",
                    "alt": "EECA ad campaign billboard"
                  }],
                "mobile": [{
                    "src": "./img/modal/eeca_adshel.png",
                    "alt": "EECA ad campaign adshel poster"
                  }]
              }]
          },
          "portfolio__item--6": {
            "title": "NZ Scientific Magazine",
            "description": `Fictional magazine using articles from Mentalfloss.`,
            "link": "./projects/NZSci_magazine.pdf",
            "images": [{
                "desktop": [{
                    "src": "./img/modal/nzscimag_spread3.png",
                    "alt": "Spread of NZ Scientific Magazine"
                  }],
                "mobile": [{
                    "src": "./img/modal/nzscimag_cover.png",
                    "alt": "Cover of NZ Scientific Magazine"
                  }]
              }]
          },
          "portfolio__item--7": {
            "title": "Kids in the Kitchen",
            "description": `A fictional brochure encouraging children to learn to cook healthy food with their caregivers.`,
            "link": "./projects/KITK_brochure.pdf",
            "images": [{
                "desktop": [{
                    "src": "./img/modal/kitk_spread2.png",
                    "alt": "Spread of the Kids in the Kitchen brochure"
                  }],
                "mobile": [{
                    "src": "./img/modal/kitk_cover.png",
                    "alt": "Cover of the Kids in the Kitchen brochure"
                  }]
              }]
          },
          "portfolio__item--8": {
            "title": "Quality Heating Services",
            "description": `An actual commercial logo I created for Quality Heating Services here in Christchurch.`,
            "link": "./projects/QHS_Logo.pdf",
            "images": [{
                "desktop": [{
                    "src": "./img/modal/qhs_logo.png",
                    "alt": "Logo for Quality Heating Services"
                  }],
                "mobile": [{
                    "src": "./img/modal/qhs_logo.png",
                    "alt": "Logo for Quality Heating Services"
                  }]
              }]
          }
        };

function resizeImg() {
  if (modalImg.getBoundingClientRect().width > modalImg.getBoundingClientRect().height) {
    orientation = 'desktop';
    modalImg.src = selectedItem.images[0][orientation][0].src;
    modalImg.alt = selectedItem.images[0][orientation][0].alt;
  } else if (modalImg.getBoundingClientRect().width < modalImg.getBoundingClientRect().height) {
    orientation = 'mobile';
    modalImg.src = selectedItem.images[0][orientation][0].src;
    modalImg.alt = selectedItem.images[0][orientation][0].alt;
  } else if (modalImg.getBoundingClientRect().width === modalImg.getBoundingClientRect().height) {
    orientation = 'desktop';
    modalImg.src = selectedItem.images[0][orientation][0].src;
    modalImg.alt = selectedItem.images[0][orientation][0].alt;
  } else {

  }
}


window.addEventListener("resize", function () {
  if (modal.classList[1] !== "closed") {
    resizeImg();
  }
});

modalOverlay.addEventListener("click", function (evt) {
  if (evt.target === modalOverlay || evt.target === modalClose) {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
    selectedItem = '';
  }
});

Array.from(portfolioItems).forEach(portfolioItem => {
  portfolioItem.addEventListener('click', function (evt) {
    var item = evt.target.classList[1];
    selectedItem = modalItems[item];
    modalTitle.innerHTML = selectedItem.title;
    modalDescription.innerHTML = selectedItem.description;
    modalLink.href = selectedItem.link;
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
    resizeImg();
  });
});
