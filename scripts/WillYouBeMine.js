import { displayColonyAvailableResources } from "./Colonies.js"
import { GovernorsSelection } from "./Governors.js"
import { facilityList } from "./Facilities.js"


export const beMineHTML = () => {
    return `
        <h1>B MINE Marketplace</h1>

        <article id="facilities">
        <h2 class="facility__title">Mining Facilities</h2>
            <section id="facilityList">
                ${facilityList()}
            </section>

        </article>

        <article id="minerals">Chosen minerals and purchase button go in here
            <h2 class="mineral__title">Chosen Minerals</h2>
            <section>Chosen minerals stuffs go in here</section>
            <button>Purchase all minerals</button>
        </article>

        <article id="governors-and-colonies">
            <section>
            <p>Choose your governor</p>
            </section>
            <section class="governor-selector">${GovernorsSelection()}</section>
            </section>
            <section id="available-resources">
            ${displayColonyAvailableResources()}
            </section>
        </article>
    `
}