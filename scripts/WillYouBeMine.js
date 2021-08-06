import { displaySelectedGovernor, displayColonyAvailableResources } from "./Colonies.js"
import { GovernorsSelection } from "./Governors.js"
import { facilityList } from "./Facilities.js"


export const beMineHTML = () => {
    return `
        <h1>Will you be Mine</h1>

        <article id="facilities">
        <h2>Active Mining Facilities</h2>
            <section id="facilityList">
            ${facilityList()}
            </section>

        </article>

        <article id="minerals">Chosen minerals and purchase button go in here
            <h2>Chosen Minerals</h2>
            <section>Chosen minerals stuffs go in here</section>
            <button>Purchase all minerals</button>
        </article>

        <article>
            <section>${GovernorsSelection()}</section>
            <section>
            ${displaySelectedGovernor()}
            ${displayColonyAvailableResources()}
            </section>
        </article>
    `
}