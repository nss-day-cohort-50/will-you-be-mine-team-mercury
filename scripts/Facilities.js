import { getChosenMinerals, getMiningFacilities } from "./database.js";

export const facilityList = () => {

    let htmlString = ""
    const miningFacility = getMiningFacilities()
    const governor = getChosenMinerals().governorId
    const miningFacilityHTML = miningFacility.map((facility) => {
        if (facility.isActive && governor !== undefined) {
            return `<article>
            <button type="button" value=${facility.id}>${facility.name}</button>
        </article>`
        } else  {
            return `<article>
            <button type="button" value=${facility.id} disabled>${facility.name}</button>
        </article>`
        }

    })
    htmlString += miningFacilityHTML.join("")

    return htmlString
}