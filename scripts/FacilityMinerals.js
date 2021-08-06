import {getFacilitiesMinerals, getMiningFacilities, getMinerals} from "./database.js"


const minerals = getMinerals();
export const jupitersArmMinerals = () =>{
    let htmlString = `<ul class="">`
    const allfacilityMinerals = getFacilitiesMinerals()
    const facility = getMiningFacilities().find((facility) => facility.name === "Jupiter's Arm")
    const facilityMinerals = allfacilityMinerals.filter((mineral) =>{return mineral.miningFacilityId === facility.id })
    for (const mineral of minerals){
        for (const facilityMineral of facilityMinerals){
            if (facilityMineral.mineralId === mineral.id){
                htmlString += `<li><input type="radio" name="jupitersArmmineral" value="${mineral.id}">Mineral : ${mineral.name} || Available Supply: ${facilityMineral.quantityAvailable}`
            }
        }
    }
    htmlString += "</ul>"
    return htmlString
}
export const hermesArmpitMinerals = () =>{
    let htmlString = `<ul class="">`
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
    let htmlString = `<ul class="">`
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
    let htmlString = `<ul class="">`
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
