// 0) Smooth scroll — for same-page anchor links (e.g. "Explore destinations" on Home)
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (event) {
    const targetId = anchor.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      event.preventDefault();
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// 1) Responsive navigation menu
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });

  const links = navLinks.querySelectorAll('a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });
}

// 2) Destination details modal
const modal = document.querySelector('#destinationModal');
const modalTitle = document.querySelector('#modalTitle');
const modalCountry = document.querySelector('#modalCountry');
const modalText = document.querySelector('#modalText');
const modalClose = document.querySelector('.modal-close');
const detailButtons = document.querySelectorAll('.details-button');

if (modal) {
  detailButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      modalTitle.textContent = button.dataset.name;
      modalCountry.textContent = button.dataset.country;
      modalText.textContent = button.dataset.description;
      modal.classList.add('show');
    });
  });

  modalClose.addEventListener('click', function () {
    modal.classList.remove('show');
  });

  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.classList.remove('show');
    }
  });
}

// 3) Gallery image slider
const sliderImage = document.querySelector('#sliderImage');
const sliderCaption = document.querySelector('#sliderCaption');
const previousButton = document.querySelector('.slider-button.prev');
const nextButton = document.querySelector('.slider-button.next');

const slides = [
  {
    image: 'images/hunza-valley.jpg',
    caption: 'Hunza Valley, Pakistan'
  },
  {
    image: 'images/cappadocia.jpg',
    caption: 'Cappadocia, Türkiye'
  },
  {
    image: 'images/amalfi.jpg',
    caption: 'Amalfi Coast, Italy'
  }
];

let currentSlide = 0;

function showSlide() {
  if (!sliderImage) return;
  sliderImage.src = slides[currentSlide].image;
  sliderImage.alt = slides[currentSlide].caption;
  sliderCaption.textContent = slides[currentSlide].caption;
}

if (sliderImage && previousButton && nextButton) {
  previousButton.addEventListener('click', function () {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    showSlide();
  });

  nextButton.addEventListener('click', function () {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide();
  });
}

// 4) Contact form validation
const contactForm = document.querySelector('#contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const destination = document.querySelector('#destination');
    const message = document.querySelector('#message');
    const successMessage = document.querySelector('#successMessage');

    let isValid = true;

    document.querySelector('#nameError').textContent = '';
    document.querySelector('#emailError').textContent = '';
    document.querySelector('#destinationError').textContent = '';
    document.querySelector('#messageError').textContent = '';
    successMessage.classList.remove('show');

    if (name.value.trim() === '') {
      document.querySelector('#nameError').textContent = 'Please enter your name.';
      isValid = false;
    }

    if (email.value.trim() === '' || !email.value.includes('@') || !email.value.includes('.')) {
      document.querySelector('#emailError').textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    if (destination.value === '') {
      document.querySelector('#destinationError').textContent = 'Please select a destination.';
      isValid = false;
    }

    if (message.value.trim() === '') {
      document.querySelector('#messageError').textContent = 'Please enter a short message.';
      isValid = false;
    }

    if (isValid) {
      successMessage.textContent = 'Thank you! Your enquiry has been recorded.';
      successMessage.classList.add('show');
      contactForm.reset();
    }
  });
}
