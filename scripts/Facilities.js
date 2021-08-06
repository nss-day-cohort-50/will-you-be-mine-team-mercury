import { getChosenMinerals, getMiningFacilities } from "./database.js";
import {jupitersArmMinerals, hermesArmpitMinerals, hermesPalaceMinerals, lilTayTaysMinerals} from "./FacilityMinerals.js"
export const facilityList = () => {

    let htmlString = ""
    const miningFacility = getMiningFacilities()
    const governor = getChosenMinerals().governorId
    const miningFacilityHTML = miningFacility.map((facility) => {
        if (facility.isActive && governor !== undefined) {
            let facilityMinerals
            switch (facility.name){
                case "Jupiter's Arm":
                    facilityMinerals = jupitersArmMinerals();
                    break;
                case "Hermes' Armpit":
                    facilityMinerals = hermesArmpitMinerals();
                    break;
                case "Hermes' Palace":
                    facilityMinerals = hermesPalaceMinerals();
                    break;
                case "Lil' Tay-Tay's":
                    facilityMinerals = lilTayTaysMinerals();
                    break;
                }
                return `<article>
                <button type="button" value=${facility.id}>${facility.name}</button>
                ${facilityMinerals}
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

// miningFacilities : [
//     {
//         id: 1,
//         name: "Jupiter's Arm",
//         isActive: true
//     }, {
//         id: 2,
//         name: "Hermes' Armpit",
//         isActive: true
//     }, {
//         id: 3,
//         name: "Hermes' Palace",
//         isActive: true
//     }, {
//         id: 4,
//         name: "Lil' Tay-Tay's",
//         isActive: true
//     }
// ],