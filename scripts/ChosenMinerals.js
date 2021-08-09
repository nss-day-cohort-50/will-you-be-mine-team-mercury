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

    const jupitersArmId = getChosenMinerals().jupitersArmId
    const jupitersArmMineral = getChosenMinerals().jupitersArmMineralId
    const hermesArmpitId = getChosenMinerals().hermesArmpitId
    const hermesArmpitMineral = getChosenMinerals().hermesArmpitMineralId
    const hermesPalaceId = getChosenMinerals().hermesPalaceId
    const hermesPalaceMineral = getChosenMinerals().hermesPalaceMineralId
    const lilTayTaysId = getChosenMinerals().lilTayTaysId
    const lilTayTaysMineral = getChosenMinerals().lilTayTaysMineralId

    let html = ""

    if (getChosenMinerals().jupitersArmId !== undefined){
        const foundSelectedMineral = foundMineral(jupitersArmMineral)
        const foundSelectedFacility = foundFacility(jupitersArmId)
        html += `<li>1 ton of ${foundSelectedMineral.name} from ${foundSelectedFacility.name}</li>`
    }
    if (getChosenMinerals().hermesArmpitId !== undefined){
        const foundSelectedMineral = foundMineral(hermesArmpitMineral)
        const foundSelectedFacility = foundFacility(hermesArmpitId)
        html += `<li>1 ton of ${foundSelectedMineral.name} from ${foundSelectedFacility.name}</li>`
    }
    if (getChosenMinerals().hermesPalaceId !== undefined){
        const foundSelectedMineral = foundMineral(hermesPalaceMineral)
        const foundSelectedFacility = foundFacility(hermesPalaceId)
        html += `<li>1 ton of ${foundSelectedMineral.name} from ${foundSelectedFacility.name}</li>`
    }
    if (getChosenMinerals().lilTayTaysId !== undefined){
        const foundSelectedMineral = foundMineral(lilTayTaysMineral)
        const foundSelectedFacility = foundFacility(lilTayTaysId)
        html += `<li>1 ton of ${foundSelectedMineral.name} from ${foundSelectedFacility.name}</li>`
    }
    return html
}