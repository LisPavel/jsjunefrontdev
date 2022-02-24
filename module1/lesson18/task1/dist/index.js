
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var img = "javascript.png";

const createImage = () => {
  const {
    body
  } = document;
  const image = document.createElement("img");
  image.src = img;
  image.className = "js-image";
  body.append(image);
};

console.log("Hello world!");
const header = document.createElement("h1");
header.textContent = "I Love JavaScript";
document.body.append(header);
createImage();
