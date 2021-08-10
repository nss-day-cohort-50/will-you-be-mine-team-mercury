import { foundFacilityMineral } from "./ChosenMinerals.js"
import { getFacilitiesMinerals, getMiningFacilities, getMinerals, getChosenMinerals } from "./database.js"
import { setChosenMaterials, setSelectedFacility } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "Jupiter's Arm") {
                if (event.target.id.startsWith("facility")) {
                    const [,targetId] = event.target.id.split("--")
                    const chosenMat = {mineralId:parseInt(event.target.value), facilityId: parseInt(targetId)}
                    setChosenMaterials(chosenMat, 0)
                    console.log(getChosenMinerals())
                    document.dispatchEvent(new CustomEvent ("stateChanged"))
                }
        }
    }
)
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "Lil' Tay-Tay's") {
            if (event.target.id.startsWith("facility")) {
                const [,targetId] = event.target.id.split("--")
                const chosenMat = {mineralId:parseInt(event.target.value), facilityId: parseInt(targetId)}
                setChosenMaterials(chosenMat, 3)
                console.log(getChosenMinerals())
                document.dispatchEvent(new CustomEvent ("stateChanged"))
                }
        }
    }
)
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "Hermes' Palace") {
            if (event.target.id.startsWith("facility")) {
                const [,targetId] = event.target.id.split("--")
                const chosenMat = {mineralId:parseInt(event.target.value), facilityId: parseInt(targetId)}
                setChosenMaterials(chosenMat, 2)
                console.log(getChosenMinerals())
                document.dispatchEvent(new CustomEvent ("stateChanged"))
            }
        }
    }
)
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "Hermes' Armpit") {
            if (event.target.id.startsWith("facility")) {
                const [,targetId] = event.target.id.split("--")
                const chosenMat = {mineralId:parseInt(event.target.value), facilityId: parseInt(targetId)}
                setChosenMaterials(chosenMat, 1)
                console.log(getChosenMinerals())
                document.dispatchEvent(new CustomEvent ("stateChanged"))
            }
        }
    }
)



const minerals = getMinerals();
export const facilityMineralsList = (facility) =>{
    let htmlString = ``
    
    const allfacilityMinerals = getFacilitiesMinerals()
    const facilityMinerals = allfacilityMinerals.filter((mineral) =>{return mineral.miningFacilityId === facility.id })
    const selectedMinerals = getChosenMinerals().selectedMinerals.find((min)=> {return min.facilityId === facility.id})
    if (getChosenMinerals().facilityId === facility.id){
        htmlString += `<ul class="" id="facility${facility.id}">`
    }else{
        htmlString +=`<ul class="hidden" id="facility${facility.id}">`
    }
    for (const mineral of minerals){
        for (const facilityMineral of facilityMinerals){
            if (facilityMineral.mineralId === mineral.id){
                
                if (selectedMinerals === undefined){
                    htmlString += `<li><input id="facility--${facilityMineral.miningFacilityId}" type="radio" name="${facility.name}" value="${mineral.id}">Mineral: ${mineral.name} <br> Available Supply: ${facilityMineral.quantityAvailable}`
                    

                } else {
                    if (selectedMinerals.mineralId === facilityMineral.mineralId){
                        htmlString += `<li><input checked id="facility--${facilityMineral.miningFacilityId}" type="radio" name="${facility.name}" value="${mineral.id}">Mineral: ${mineral.name} <br> Available Supply: ${facilityMineral.quantityAvailable}`
                }   else{
                    htmlString += `<li><input id="facility--${facilityMineral.miningFacilityId}" type="radio" name="${facility.name}" value="${mineral.id}">Mineral: ${mineral.name} <br> Available Supply: ${facilityMineral.quantityAvailable}`
                }
            } 
        }
        }
    }
    htmlString += "</ul>"
    return htmlString
}
