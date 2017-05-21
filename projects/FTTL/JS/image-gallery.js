function hamburgerMenu() {
    var hamburger = document.querySelector('.hamburger'),
        nav = document.querySelector('.nav');

    function openHamburger() {
        hamburger.style.display = 'none';
        nav.classList.toggle('show-nav')
    }

    hamburger.addEventListener('click', openHamburger);
}

function imageGallery(){

    'use strict';
    //Declare DOM variables.
    var mainImg = document.querySelector('.main__img'),
        thumbImgs = document.querySelectorAll('.thumbnails__img'),
        selectedImg = document.querySelector('.selected'),
        leftBtn = document.querySelector('.left-btn'),
        rightBtn = document.querySelector('.right-btn'),
        modal = document.querySelector('.modal__background'),
        modalContent = document.querySelector('.modal__content'),
        modalImg = document.querySelector('.modal__img'),
        closeModal = document.querySelector('.close'),
    //Declare iteration variable.
        i = 0;

    //Left button event.
    function leftScrollEvent() {

        //If first image is selected select last image.
        if (selectedImg === thumbImgs[0]) {
            //1. Select all images.
            for (i = 0; i < thumbImgs.length; i += 1) {
                //2. Scroll down.
                thumbImgs[i].classList.toggle('gallery-forward', true);
                //3. Reset scroll down class.
                thumbImgs[i].classList.toggle('gallery-reverse', false);
            }
            //Select last image.
            thumbImgs[thumbImgs.length - 1].click();

            //if at start of row animate move all images down and select first image.
        } else if (selectedImg === thumbImgs[thumbImgs.length / 2]) {
            //1. Select all images.
            for (i = 0; i < thumbImgs.length; i += 1) {
                //2. Scroll up.
                thumbImgs[i].classList.toggle('gallery-reverse', true);
                //3. Reset scroll down class.
                thumbImgs[i].classList.toggle('gallery-forward', false);
            }
            //4. Select first image.
            selectedImg.previousElementSibling.click();
            //Otherwise select previous image.
        } else {
            selectedImg.previousElementSibling.click();
        }
        // End of left button event.
    }

    //Right button event.
    function rightScrollEvent() {

        // if last is selected select first image.
        if (selectedImg === thumbImgs[thumbImgs.length - 1]) {
            //1. Select all images.
            for (i = 0; i < thumbImgs.length; i += 1) {
                //2. Scroll up.
                thumbImgs[i].classList.toggle('gallery-reverse', true);
                //3. Reset scroll down class.
                thumbImgs[i].classList.toggle('gallery-forward', false);
            }
            //4. Select first image.
            thumbImgs[0].click();

            //if at end of row animate move all images up and select first image.
        } else if (selectedImg === thumbImgs[thumbImgs.length - 1]) {
            //1. Select all images.
            for (i = 0; i < thumbImgs.length; i += 1) {
                //2. Scroll down.
                thumbImgs[i].classList.toggle('gallery-forward', true);
                //3. Reset scroll up class.
                thumbImgs[i].classList.toggle('gallery-reverse', false);
            }
            //4. Select first image.
            selectedImg.nextElementSibling.click();

            //otherwise select next image.
        } else {
            //Select next Image.
            selectedImg.nextElementSibling.click();
        }
        //End of right button event.
    }

    //Add 'click' event listener to left button.
    leftBtn.addEventListener('click', leftScrollEvent);
    //Add 'click' event listener to right button.
    rightBtn.addEventListener('click', rightScrollEvent);

    //View selected image event.
    function viewEvent(evt) {
        //change main image source and alt attribute to image that has been clicked and change size.
        mainImg.src = evt.target.src.replace('thumbnail', 'preview');
        mainImg.alt = evt.target.alt;
        //Remove selection on image currently selected.
        selectedImg.classList.toggle('selected', false);
        //Change selection to the image that was clicked.
        selectedImg = evt.target;
        //Add selection on image currently selected (image that was clicked).
        selectedImg.classList.add('selected', true);
        //End of view selected image event.
    }

    //Select all images and add event to them..
    for (i = 0; i < thumbImgs.length; i += 1) {
        //Add a 'click' event listener to every image.
        thumbImgs[i].addEventListener('click', viewEvent);
    }

    /*** Modal Block ***/

    function openModalEvent(evt) {
        modal.style.display = 'block';
        modalContent.style.display = 'block';
        modalImg.src = evt.target.src.replace('preview', 'modal');
        modalImg.alt = evt.target.alt.replace(' | Click for a larger view', '');

    }

    mainImg.addEventListener('click', openModalEvent);

    function closeModalEvent() {
        modal.style.display = 'none';
        modalContent.style.display = 'none';
    }

    closeModal.addEventListener('click', closeModalEvent);

    modal.addEventListener('click', closeModalEvent);
}

hamburgerMenu();
imageGallery();