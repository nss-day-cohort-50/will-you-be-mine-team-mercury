//render all HTML here

import { beMineHTML } from "./WillYouBeMine.js";

const container = document.getElementById("mainContainer")

const renderHTML = () => {
    container.innerHTML = beMineHTML()
}

renderHTML()