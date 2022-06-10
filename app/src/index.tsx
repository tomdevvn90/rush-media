import React from "react";
import ReactDOM from "react-dom";
import RushMediaApp from "./RushMediaApp";

const rootElement = document.getElementById("rush-media-app");

if (rootElement) {
    const data  = rootElement.getAttribute('data-props') || "{}";
    const props = JSON.parse(data);

    ReactDOM.render(<React.StrictMode><RushMediaApp {...props} /></React.StrictMode>, rootElement);
}
