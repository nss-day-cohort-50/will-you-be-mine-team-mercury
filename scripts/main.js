//render all HTML here

import { beMineHTML } from "./WillYouBeMine.js";

const container = document.getElementById("mainContainer")

const renderHTML = () => {
    container.innerHTML = beMineHTML()
}

renderHTML()

document.addEventListener("stateChanged", event =>{
    console.log("State of data has changed. Regenerating HTML")
    renderHTML()
})