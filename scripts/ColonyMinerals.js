import { getMinerals } from "./database.js";



const minerals = getMinerals();
// export const jupitersArmMinerals = () =>{
//     let htmlString = `<ul class="" id="facility1>`
//     const allfacilityMinerals = getFacilitiesMinerals()
//     const facility = getMiningFacilities().find((facility) => facility.name === "Jupiter's Arm")
//     const facilityMinerals = allfacilityMinerals.filter((mineral) =>{return mineral.miningFacilityId === facility.id })
//     for (const mineral of minerals){
//         for (const facilityMineral of facilityMinerals){
//             if (facilityMineral.mineralId === mineral.id){
//                 htmlString += `<li><input type="radio" name="jupitersArmmineral" value="${mineral.id}">Mineral : ${mineral.name} || Available Supply: ${facilityMineral.quantityAvailable}`
//             }
//         }
//     }
//     htmlString += "</ul>"
//     return htmlString
// }