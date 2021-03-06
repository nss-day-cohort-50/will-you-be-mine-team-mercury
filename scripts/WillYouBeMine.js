import { displayColonyAvailableResources } from "./Colonies.js"
import { GovernorsSelection } from "./Governors.js"
import { facilityList } from "./Facilities.js"
import { foundFacilityMineral } from "./ChosenMinerals.js"
import { submitOrder } from "./database.js"
document.addEventListener("click",
    (event) => {
        if (event.target.id === "submitOrder") {
            submitOrder()
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    })

export const beMineHTML = () => {
    return `
        <h1>B MINE Marketplace</h1>

        <article id="facilities">
        <h2 class="facility__title">Mining Facilities</h2>
            <section id="facilityList">
                ${facilityList()}
            </section>

        </article>

        <article id="minerals">
            <h2 class="mineral__title">Chosen Minerals</h2>
            <section>
                <ul>
                ${foundFacilityMineral()}
                </ul>
            </section>
            <button id="submitOrder">Purchase all minerals</button>
        </article>

        <article id="governors-and-colonies">
            <section>
            <p id="chooseGov">Choose your governor</p>
            </section>
            <section class="governor-selector">${GovernorsSelection()}</section>
            </section>
            <section id="available-resources">
            ${displayColonyAvailableResources()}
            </section>
        </article>
    `
}