# Wanderly — Responsive Travel Website

Wanderly is a fully static, multi-page travel website built with **HTML5, CSS3, and vanilla JavaScript**. It presents curated travel destinations through a clean, responsive interface and includes meaningful client-side interactions without using a backend, database, or JavaScript framework.

This project was developed for **Web Technologies — Assignment 01** and is structured to demonstrate core front-end concepts including semantic HTML, responsive layouts, DOM manipulation, event handling, and client-side form validation.

## Project Overview

Wanderly is designed as a small travel-planning website where users can explore destinations, view additional trip details, browse a travel gallery, learn about the brand, and complete a trip enquiry form.

### Pages

- **Home (`index.html`)** — Hero section, featured destinations, services, testimonials, and calls to action.
- **Destinations (`destinations.html`)** — Travel destination cards with interactive details.
- **About (`about.html`)** — Brand story, travel philosophy, and supporting information.
- **Gallery (`gallery.html`)** — Travel imagery with an interactive image slider.
- **Contact (`contact.html`)** — Trip enquiry form with client-side validation and contact information.

All pages are interconnected through a consistent navigation bar and footer.

## Technologies Used

- **HTML5** — Page structure and semantic markup.
- **CSS3** — Styling, layout, responsiveness, hover states, and visual design.
- **JavaScript** — Interactivity, DOM manipulation, events, and validation.

No backend, database, server-side language, CSS framework, or JavaScript framework is used.

## Key JavaScript Features

### 1. Responsive Navigation Menu

On smaller screens, the navigation changes into a hamburger menu. JavaScript listens for a click event and toggles a CSS class to show or hide the navigation links.

### 2. Destination Details Modal

The Destinations page uses **data attributes** to store destination information. When a user selects **View trip details**, JavaScript reads that information and displays it inside a modal window using DOM manipulation.

### 3. Image Slider

The Gallery page contains a simple image slider. Previous and next buttons update the current image and caption by changing the active array index and updating the DOM.

### 4. Client-Side Form Validation

The Contact page validates the following fields before showing a success message:

- Name must not be empty.
- Email must not be empty and must contain both `@` and `.`.
- A destination must be selected.
- Message must not be empty.

Validation is performed entirely in the browser. The form does **not** send or store enquiry data because the website has no backend or database.

### 5. Smooth Same-Page Navigation

The Home page uses an anchor link to move to the featured destinations section. CSS `scroll-behavior: smooth` provides smooth scrolling for links that target sections on the same page.

## HTML Concepts Demonstrated

The website uses semantic HTML5 elements where appropriate, including:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `aside`
- `footer`
- forms, labels, inputs, lists, and buttons

Semantic markup improves document structure, readability, and accessibility.

## CSS Concepts Demonstrated

The shared stylesheet includes:

- CSS custom properties (variables)
- Flexbox
- CSS Grid
- Media queries
- Responsive layouts
- Hover and focus states
- Reusable button and card styles
- Consistent typography, spacing, and colour system

The layout adapts for desktop, tablet, and mobile screen sizes.

## UI and Design

The interface uses a consistent travel-inspired visual system based on:

- deep forest green tones
- warm neutral backgrounds
- soft accent colours
- serif display headings
- clean card layouts
- consistent spacing and navigation

The goal is to keep the interface visually polished while keeping the underlying code simple enough to understand and explain clearly.

## Images and Assets

Travel images and the favicon are stored inside the local `images/` folder, which keeps the project self-contained and avoids dependence on external image URLs during normal use.

The browser tab icon is linked using:

```html
<link rel="icon" href="images/favicon.png" type="image/png">
```

## Email Link

The website includes a clickable email link using the `mailto:` URL scheme:

```html
<a href="mailto:hello@wanderly.example">hello@wanderly.example</a>
```

This opens the user's default email application with the recipient address filled in. It does not send an email automatically.

## Project Structure

```text
wanderly/
├── index.html
├── about.html
├── destinations.html
├── gallery.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── favicon.png
│   ├── hunza-valley.jpg
│   ├── cappadocia.jpg
│   ├── amalfi.jpg
│   ├── bali.jpg
│   ├── kyoto.jpg
│   └── swiss-alps.jpg
└── README.md
```

## How to Run

No installation or build process is required.

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Use the navigation menu to move between pages.

Because the project uses only HTML, CSS, and JavaScript, it can run directly in the browser.

## Version Control

This project is maintained using Git and GitHub with feature-based branches, meaningful commit messages, and completed work merged into the `main` branch.
