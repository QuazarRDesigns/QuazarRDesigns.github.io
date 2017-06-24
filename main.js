var modal = document.querySelector(".modal"),
	modalOverlay = document.querySelector(".modal-overlay"),
	modalClose = document.querySelector(".modal-close"),
	modalTitle = document.querySelector(".modal-label__text"),
	modalDescription = document.querySelector(".modal-aside__description"),
	modalLink = document.querySelector(".modal-aside__link"),
	modalImg = document.querySelector(".modal__img"),
	portfolioItems = document.querySelectorAll(".portfolio__item"),
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
				"src": "./img/modal/carbcounter_desktop.png",
				"alt": "CarbCounter+ Home Screen"
      }]
		},
		"portfolio__item--2": {
			"title": "List CRM Phonegap App",
			"description": `List CRM is a simplified CRM (Customer Relationship Management) App
            designed for easy and quick use by sales representatives after they contact one of their many
            customers.
            <br/>
            I used AngularJS to communicate with a REST API written in PHP to retrieve data from and write to mySQL database.
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
				"src": "./img/modal/ListCRM.png",
				"alt": "List CRM"
      }]
		},
		"portfolio__item--3": {
			"title": "Fly to the Limit",
			"description": `Fly to the limit is an example scenic flight booking website.`,
			"link": "",
			"images": [{
				"src": "./img/modal/FTTL.png",
				"alt": "List CRM"
      }]
		},
		"portfolio__item--4": {
			"title": "SAB Identity Design",
			"description": `I made this branding for a class project SAB is a fictional company.
      The goal of the branding was to convey stability and integrity`,
			"link": "./projects/SAB_brand_identity.pdf",
      "images": [{
				"src": "",
				"alt": ""
      }]
		},
		"portfolio__item--5": {
			"title": "",
			"description": ``,
			"link": "",
      "images": [{
				"src": "",
				"alt": ""
      }]
		},
		"portfolio__item--6": {
			"title": "",
			"description": ``,
			"link": "",
      "images": [{
				"src": "",
				"alt": ""
      }]
		},
		"portfolio__item--7": {
			"title": "",
			"description": ``,
			"link": "",
      "images": [{
				"src": "",
				"alt": ""
      }]
		}
	};

modalOverlay.addEventListener("click", function (evt) {
	if (evt.target === modalOverlay || evt.target === modalClose) {
		modal.classList.toggle("closed");
		modalOverlay.classList.toggle("closed");
	}
});

Array.from(portfolioItems).forEach(portfolioItem => {
	portfolioItem.addEventListener('click', function (evt) {
		var item = evt.target.classList[1];
		modalTitle.innerHTML = modalItems[item].title;
		modalDescription.innerHTML = modalItems[item].description;
		modalLink.href = modalItems[item].link;
		modalImg.src = modalItems[item].images[0].src;
		modalImg.alt = modalItems[item].images[0].alt;
		modal.classList.toggle("closed");
		modalOverlay.classList.toggle("closed");
	});
});
