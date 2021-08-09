import { foundFacilityMineral } from "./ChosenMinerals.js"
import { getFacilitiesMinerals, getMiningFacilities, getMinerals, getChosenMinerals } from "./database.js"
import { setJupitersArmId, setJupitersArmMineralId, setHermesArmpitId, setHermesArmpitMineralId, setHermesPalaceMineralId, setHermesPalaceId, setLilTayTaysId, setLilTayTaysMineralId } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "jupitersArmMineral") {
                if (event.target.id.startsWith("facility")) {
                    const [,targetId] = event.target.id.split("--")
                    setJupitersArmMineralId(parseInt(event.target.value))
                    setJupitersArmId(parseInt(targetId))
                    document.dispatchEvent(new CustomEvent ("stateChanged"))
                }
        }
    }
)
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "lilTayTaysMineral") {
            if (event.target.id.startsWith("facility")) {
                const [,targetId] = event.target.id.split("--")
                setLilTayTaysMineralId(parseInt(event.target.value))
                setLilTayTaysId(parseInt(targetId))
                document.dispatchEvent(new CustomEvent ("stateChanged"))
                }
        }
    }
)
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "hermesPalaceMineral") {
            if (event.target.id.startsWith("facility")) {
                const [,targetId] = event.target.id.split("--")
                setHermesPalaceMineralId(parseInt(event.target.value))
                setHermesPalaceId(parseInt(targetId))
                document.dispatchEvent(new CustomEvent ("stateChanged"))
            }
        }
    }
)
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "hermesArmPitMineral") {
            if (event.target.id.startsWith("facility")) {
                const [,targetId] = event.target.id.split("--")
                setHermesArmpitMineralId(parseInt(event.target.value))
                setHermesArmpitId(parseInt(targetId))
                document.dispatchEvent(new CustomEvent ("stateChanged"))
            }
        }
    }
)



const minerals = getMinerals();
export const jupitersArmMinerals = () =>{
    let htmlString = `<ul class="hidden" id="facility1">`
    const allfacilityMinerals = getFacilitiesMinerals()
    const facility = getMiningFacilities().find((facility) => facility.name === "Jupiter's Arm")
    const facilityMinerals = allfacilityMinerals.filter((mineral) =>{return mineral.miningFacilityId === facility.id })
    for (const mineral of minerals){
        for (const facilityMineral of facilityMinerals){
            if (facilityMineral.mineralId === mineral.id){
                if (getChosenMinerals().jupitersArmMineralId === mineral.id){
                htmlString += `<li><input checked id="facility--${facilityMineral.miningFacilityId}" type="radio" name="jupitersArmMineral" value="${mineral.id}">Mineral : ${mineral.name} || Available Supply: ${facilityMineral.quantityAvailable}`
            } else {
                htmlString += `<li><input id="facility--${facilityMineral.miningFacilityId}" type="radio" name="jupitersArmMineral" value="${mineral.id}">Mineral : ${mineral.name} || Available Supply: ${facilityMineral.quantityAvailable}`
            }
        }
        }
    }
    htmlString += "</ul>"
    return htmlString
}
export const hermesArmpitMinerals = () =>{
    let htmlString = `<ul class="hidden" id="facility2">`
    const allfacilityMinerals = getFacilitiesMinerals()
    const facility = getMiningFacilities().find((facility) => facility.name === "Hermes' Armpit")
    const facilityMinerals = allfacilityMinerals.filter((mineral) =>{return mineral.miningFacilityId === facility.id })
    for (const mineral of minerals){
        for (const facilityMineral of facilityMinerals){
            if (facilityMineral.mineralId === mineral.id){
                if (getChosenMinerals().hermesArmpitMineralId === mineral.id){
                    htmlString += `<li><input checked id="facility--${facilityMineral.miningFacilityId}" type="radio" name="hermesArmPitMineral" value="${mineral.id}">Mineral : ${mineral.name} || Available Supply: ${facilityMineral.quantityAvailable}`
                } else {
                    htmlString += `<li><input id="facility--${facilityMineral.miningFacilityId}" type="radio" name="hermesArmPitMineral" value="${mineral.id}">Mineral : ${mineral.name} || Available Supply: ${facilityMineral.quantityAvailable}`
                }
            }
        }
    }
    htmlString += "</ul>"
    return htmlString
}
export const hermesPalaceMinerals = () =>{
    let htmlString = `<ul class="hidden"id="facility3">`
    const allfacilityMinerals = getFacilitiesMinerals()
    const facility = getMiningFacilities().find((facility) => facility.name === "Hermes' Palace")
    const facilityMinerals = allfacilityMinerals.filter((mineral) =>{return mineral.miningFacilityId === facility.id })
    for (const mineral of minerals){
        for (const facilityMineral of facilityMinerals){
            if (facilityMineral.mineralId === mineral.id){
                if (getChosenMinerals().hermesPalaceMineralId === mineral.id){
                    htmlString += `<li><input checked id="facility--${facilityMineral.miningFacilityId}" type="radio" name="hermesPalaceMineral" value="${mineral.id}">Mineral : ${mineral.name} || Available Supply: ${facilityMineral.quantityAvailable}`
                } else {
                    htmlString += `<li><input id="facility--${facilityMineral.miningFacilityId}" type="radio" name="hermesPalaceMineral" value="${mineral.id}">Mineral : ${mineral.name} || Available Supply: ${facilityMineral.quantityAvailable}`
                }
            }
        }
    }
    htmlString += "</ul>"
    return htmlString
}
export const lilTayTaysMinerals = () =>{
    let htmlString = `<ul class="hidden"id="facility4">`
    const allfacilityMinerals = getFacilitiesMinerals()
    const facility = getMiningFacilities().find((facility) => facility.name === "Lil' Tay-Tay's")
    const facilityMinerals = allfacilityMinerals.filter((mineral) =>{return mineral.miningFacilityId === facility.id })
    for (const mineral of minerals){
        for (const facilityMineral of facilityMinerals){
            if (facilityMineral.mineralId === mineral.id){
                if (getChosenMinerals().lilTayTaysMineralId === mineral.id){
                    htmlString += `<li><input checked id="facility--${facilityMineral.miningFacilityId}" type="radio" name="lilTayTaysMineral" value="${mineral.id}">Mineral : ${mineral.name} || Available Supply: ${facilityMineral.quantityAvailable}`
                } else {
                    htmlString += `<li><input id="facility--${facilityMineral.miningFacilityId}" type="radio" name="lilTayTaysMineral" value="${mineral.id}">Mineral : ${mineral.name} || Available Supply: ${facilityMineral.quantityAvailable}`
                }
            }
        }
    }
    htmlString += "</ul>"
    return htmlString
}

