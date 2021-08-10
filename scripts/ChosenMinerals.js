import { getChosenMinerals, getMiningFacilities, getMinerals } from "./database.js";

const minerals = getMinerals()
const facilities = getMiningFacilities()

const foundMineral = (foundMineralId) => 
{   const mineralTest = minerals.find(mineral => {
    return foundMineralId === mineral.id
})
    return mineralTest
}

const foundFacility = (foundFacilityId) => {
    const facilityTest = facilities.find (facility =>{
    return foundFacilityId === facility.id
})
return facilityTest
}

export const foundFacilityMineral = () => {
    const chosenMinerals = getChosenMinerals().selectedMinerals
    let html = "<ul>"
    const mappedMinerals = chosenMinerals.map((mineral)=> `<li>1 Ton of ${foundMineral(mineral.mineralId).name} from ${foundFacility(mineral.facilityId).name}</li>`)
    html += mappedMinerals.join("")
    html += "<ul>"
    return html
}