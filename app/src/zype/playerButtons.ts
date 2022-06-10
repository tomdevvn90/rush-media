export const forwardSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

forwardSvg.setAttribute("height", "16");
forwardSvg.setAttribute("width", "24");
forwardSvg.setAttribute("fill", "none");
forwardSvg.setAttribute("viewBox", "0 0 28 20");

const poly1 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
const poly2 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");

poly1.setAttribute("points", "0,0 12,8 0,16");
poly2.setAttribute("points", "12,0 24,8 12,16");

poly1.setAttribute("fill", "#fff");
poly2.setAttribute("fill", "#fff");

forwardSvg.appendChild(poly1);
forwardSvg.appendChild(poly2);

export const rewindSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

rewindSvg.setAttribute("width", "24");
rewindSvg.setAttribute("height", "16");
rewindSvg.setAttribute("fill", "none");
rewindSvg.setAttribute("viewBox", "0 0 28 20");

const poly3 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
const poly4 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");

poly3.setAttribute("points", "0,8 12,0 12,16");
poly4.setAttribute("points", "12,8 24,0 24,16");

poly3.setAttribute("fill", "#fff");
poly4.setAttribute("fill", "#fff");

rewindSvg.appendChild(poly3);
rewindSvg.appendChild(poly4);
