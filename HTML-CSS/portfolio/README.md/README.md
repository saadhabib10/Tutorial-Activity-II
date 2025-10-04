# Portfolio Website

This is my personal portfolio website built with HTML5 and CSS3.

## Pages
- **Home**: Introduction
- **About Me**: My photo + intro video (with controls and poster)
- **Projects**: 5 projects with headings and short descriptions
- **Contact**: Contact form with validation (Name, Email, Phone, Comments)

## GUI / Interface

- **Responsive Design**  
  The website is responsive using fluid design and media queries.  
  Separate CSS files are used for different viewports:  
  - `mobile.css` → max-width: 600px (phones)  
  - `tablet.css` → 601–900px (tablets)  
  - `desktop.css` → 901px+ (laptops/desktops)  

  Fluid layout is achieved using percentages and `max-width` for elements like forms, images, and main content so they scale on different screens.

- **Linear Gradient**  
  A 135-degree angled linear gradient is applied to the body background on all pages:  
  `background: linear-gradient(135deg, #3a9a36, #295a29);`

- **Color Scheme**  
  Shades of green (#3a9a36, #295a29, #40a11f) with black text are used consistently across the site.  
  The scheme was created using Adobe Color.

- **Semantic HTML**  
  Semantic tags like `<header>`, `<footer>`, `<nav>`, `<main>`, and `<article>` are used appropriately on all pages.

## Validation & Accessibility
- HTML and CSS validated using W3C validation services.  
- Links tested using W3C Link Checker.  
- Accessibility tested using WAVE.  

## External Code
No external code was used; all code is written by me.
