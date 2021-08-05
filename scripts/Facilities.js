import { getMiningFacilities } from "./database.js";
let isGovernorSelected = false 
export const isGovernorClicked = (boolean) => {
    isGovernorSelected = boolean
}

export const facilityList = () => {

    let htmlString = ""
    const miningFacility = getMiningFacilities()

    const miningFacilityHTML = miningFacility.map((facility) => {
        if (facility.isActive && isGovernorSelected) {
            return `<article>
            <button type="button" value=${facility.name}>${facility.name}</button>
        </article>`
        } else  {
            return `<article>
            <button type="button" value=${facility.name} disabled>${facility.name}</button>
        </article>`
        }

    })
    htmlString += miningFacilityHTML.join("")

    return htmlString
}