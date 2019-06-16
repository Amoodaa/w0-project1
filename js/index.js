const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2019"
  },
};

// write your code here 

// nav

const navArr = Array.from(document.querySelectorAll('nav > a'));
let navTexts = Object.values(siteContent.nav);
navArr.forEach((a, i) => {
  a.style.color = 'green';
  a.textContent = navTexts[i];
});
const a1 = document.createElement('a');
const a2 = document.createElement('a');
a1.textContent = 'Creativity';
a2.textContent = 'Inspiration';
a1.style.color = 'green';
a2.style.color = 'green';
document.querySelector('nav').appendChild(a1);
document.querySelector('nav').appendChild(a2);
//logo
document.querySelector('#logo-img').src = siteContent.nav["img-src"];


// section cta
const ctaH1 = document.querySelector('.cta-text > h1');
ctaH1.textContent = siteContent.cta.h1;

const ctaBtn = document.querySelector('.cta-text > button');
ctaBtn.textContent = siteContent.cta.button;

document.querySelector('#cta-img').src = siteContent.cta["img-src"];


//section main-content
const mainContent =
  Array.from(document.querySelectorAll('.text-content')).map(e => {
    return Object.values(e.children);
  }).flat(1);

let mainContentArr = Object.assign(siteContent["main-content"]); //preparing the obj for looping
document.querySelector('#middle-img').src = mainContentArr["middle-img-src"]; // doing the img first
delete mainContentArr['middle-img-src'];
mainContentArr = Object.values(mainContentArr);

mainContent.forEach((e, i) => {
  e.textContent = mainContentArr[i];
});


// section contact
const contactArr = Object.values(siteContent.contact);
const contactElements = Array.from(document.querySelectorAll('.contact')).map(e => {
  return Object.values(e.children);
}).flat(1);
contactElements.forEach((e, i) => {
  e.textContent = contactArr[i];
});


// footer
document.querySelector('footer').textContent = siteContent.footer.copyright;