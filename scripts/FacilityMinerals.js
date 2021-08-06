import {getFacilitiesMinerals, getMiningFacilities, getMinerals} from "./database.js"
import { setJupitersArmId, setJupitersArmMineralId, setHermesArmpitId, setHermesArmpitMineralId, setHermesPalaceMineralId, setHermesPalaceId, setLilTayTaysId, setLilTayTaysMineralId } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "jupitersArmMineral") {
            setJupitersArmId(parseInt(event.target.value))
                if (event.target.id.startsWith("facility")) {
                    const [,targetId] = event.target.id.split("--")
                    setJupitersArmMineralId(parseInt(targetId))
                }
        }
    }
)
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "lilTayTaysMineral") {
            setLilTayTaysId(parseInt(event.target.value))
                if (event.target.id.startsWith("facility")) {
                    const [,targetId] = event.target.id.split("--")
                    setLilTayTaysMineralId(parseInt(targetId))
                }
        }
    }
)
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "hermesPalaceMineral") {
            setHermesPalaceId(parseInt(event.target.value))
                if (event.target.id.startsWith("facility")) {
                    const [,targetId] = event.target.id.split("--")
                    setHermesPalaceMineralId(parseInt(targetId))
                }
        }
    }
)
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "jupitersArmMineral") {
            setJupitersArmId(parseInt(event.target.value))
                if (event.target.id.startsWith("facility")) {
                    const [,targetId] = event.target.id.split("--")
                    setJupitersArmMineralId(parseInt(targetId))
                }
        }
    }
)



const minerals = getMinerals();
export const jupitersArmMinerals = () =>{
    let htmlString = `<ul class="" id="facility1>`
    const allfacilityMinerals = getFacilitiesMinerals()
    const facility = getMiningFacilities().find((facility) => facility.name === "Jupiter's Arm")
    const facilityMinerals = allfacilityMinerals.filter((mineral) =>{return mineral.miningFacilityId === facility.id })
    for (const mineral of minerals){
        for (const facilityMineral of facilityMinerals){
            if (facilityMineral.mineralId === mineral.id){
                htmlString += `<li><input id="facility--${mineral.miningFacilityId}" type="radio" name="jupitersArmmineral" value="${mineral.id}">Mineral : ${mineral.name} || Available Supply: ${facilityMineral.quantityAvailable}`
            }
        }
    }
    htmlString += "</ul>"
    return htmlString
}
export const hermesArmpitMinerals = () =>{
    let htmlString = `<ul class="" id="facility2>`
    const allfacilityMinerals = getFacilitiesMinerals()
    const facility = getMiningFacilities().find((facility) => facility.name === "Hermes' Armpit")
    const facilityMinerals = allfacilityMinerals.filter((mineral) =>{return mineral.miningFacilityId === facility.id })
    for (const mineral of minerals){
        for (const facilityMineral of facilityMinerals){
            if (facilityMineral.mineralId === mineral.id){
                htmlString += `<li><input type="radio" name="hermesArmPitmineral" value="${mineral.id}">Mineral : ${mineral.name} || Available Supply: ${facilityMineral.quantityAvailable}`
            }
        }
    }
    htmlString += "</ul>"
    return htmlString
}
export const hermesPalaceMinerals = () =>{
    let htmlString = `<ul class=""id="facility3>`
    const allfacilityMinerals = getFacilitiesMinerals()
    const facility = getMiningFacilities().find((facility) => facility.name === "Hermes' Palace")
    const facilityMinerals = allfacilityMinerals.filter((mineral) =>{return mineral.miningFacilityId === facility.id })
    for (const mineral of minerals){
        for (const facilityMineral of facilityMinerals){
            if (facilityMineral.mineralId === mineral.id){
                htmlString += `<li><input type="radio" name="hermesPalacemineral" value="${mineral.id}">Mineral : ${mineral.name} || Available Supply: ${facilityMineral.quantityAvailable}`
            }
        }
    }
    htmlString += "</ul>"
    return htmlString
}
export const lilTayTaysMinerals = () =>{
    let htmlString = `<ul class=""id="facility4>`
    const allfacilityMinerals = getFacilitiesMinerals()
    const facility = getMiningFacilities().find((facility) => facility.name === "Lil' Tay-Tay's")
    const facilityMinerals = allfacilityMinerals.filter((mineral) =>{return mineral.miningFacilityId === facility.id })
    for (const mineral of minerals){
        for (const facilityMineral of facilityMinerals){
            if (facilityMineral.mineralId === mineral.id){
                htmlString += `<li><input type="radio" name="lilTayTaysmineral" value="${mineral.id}">Mineral : ${mineral.name} || Available Supply: ${facilityMineral.quantityAvailable}`
            }
        }
    }
    htmlString += "</ul>"
    return htmlString
}

