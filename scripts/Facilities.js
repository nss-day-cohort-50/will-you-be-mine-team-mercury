import { getMiningFacilities } from "./database.js";


export const facilityList = () => {

    let htmlString = ""
    const miningFacility = getMiningFacilities()

    const miningFacilityHTML = miningFacility.map((facility) => {
        return `<article>
                    <button>${facility.name}</button>
                </article>`
    })
    htmlString += miningFacilityHTML.join("")

    return htmlString
}