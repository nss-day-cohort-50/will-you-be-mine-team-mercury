import { foundFacilityMineral } from "./ChosenMinerals.js"
import { getFacilitiesMinerals, getMiningFacilities, getMinerals, getChosenMinerals } from "./database.js"
import { setChosenMaterials, setSelectedFacility } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "jupitersArmMineral") {
                if (event.target.id.startsWith("facility")) {
                    const [,targetId] = event.target.id.split("--")
                    const chosenMat = {mineralId:parseInt(event.target.value)}
                    setChosenMaterials(chosenMat)
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
                const chosenMat = {mineralId:parseInt(event.target.value)}
                    setChosenMaterials(chosenMat)
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
                const chosenMat = {mineralId:parseInt(event.target.value)}
                    setChosenMaterials(chosenMat)
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
                const chosenMat = {mineralId:parseInt(event.target.value)}
                    setChosenMaterials(chosenMat)
                document.dispatchEvent(new CustomEvent ("stateChanged"))
            }
        }
    }
)



const minerals = getMinerals();
export const jupitersArmMinerals = () =>{
    let htmlString = ``
    
    const allfacilityMinerals = getFacilitiesMinerals()
    const facility = getMiningFacilities().find((facility) => facility.name === "Jupiter's Arm")
    const facilityMinerals = allfacilityMinerals.filter((mineral) =>{return mineral.miningFacilityId === facility.id })
    if (getChosenMinerals().facilityId === facility.id){
        htmlString += `<ul class="" id="facility1">`
    }else{
        htmlString +=`<ul class="hidden" id="facility1">`
    }
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
    let htmlString = ``
    const allfacilityMinerals = getFacilitiesMinerals()
    const facility = getMiningFacilities().find((facility) => facility.name === "Hermes' Armpit")
    if (getChosenMinerals().facilityId === facility.id){
        htmlString += `<ul class="" id="facility2">`
    }else{
        htmlString +=`<ul class="hidden" id="facility2">`
    }
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
    let htmlString = ``
    const allfacilityMinerals = getFacilitiesMinerals()
    const facility = getMiningFacilities().find((facility) => facility.name === "Hermes' Palace")
    if (getChosenMinerals().facilityId === facility.id){
        htmlString += `<ul class="" id="facility3">`
    }else{
        htmlString +=`<ul class="hidden" id="facility3">`
    }
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
    let htmlString = ``
    const allfacilityMinerals = getFacilitiesMinerals()
    const facility = getMiningFacilities().find((facility) => facility.name === "Lil' Tay-Tay's")
    if (getChosenMinerals().facilityId === facility.id){
        htmlString += `<ul class="" id="facility4">`
    }else{
        htmlString +=`<ul class="hidden" id="facility4">`
    }
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

