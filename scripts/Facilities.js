import { getChosenMinerals, getMiningFacilities, setSelectedFacility } from "./database.js";
import {facilityMineralsList} from "./FacilityMinerals.js"
export const facilityList = () => {

    let htmlString = ""
    const miningFacility = getMiningFacilities()
    const governor = getChosenMinerals().governorId
    const miningFacilityHTML = miningFacility.map((facility) => {
        if (facility.isActive && governor !== 0) {
            
                return `<article>
                <button type="button" id="facilityButton"value=${facility.id}>${facility.name}</button>
                ${facilityMineralsList(facility)}
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

document.addEventListener("click",
    (event) =>{
        if (event.target.id === "facilityButton"){
            setSelectedFacility(parseInt(event.target.value))
            hideFacility(parseInt(event.target.value))
        }
})

const hideFacility = (id)=>{
    const facilityOne = document.getElementById("facility1")
    const facilityTwo = document.getElementById("facility2")
    const facilityThree = document.getElementById("facility3")
    const facilityFour = document.getElementById("facility4")
     
    switch (id){
        case 1:
            facilityOne.classList.remove("hidden")
            facilityTwo.classList.add("hidden")
            facilityThree.classList.add("hidden")
            facilityFour.classList.add("hidden")
            break;
        case 2:
            facilityOne.classList.add("hidden")
            facilityTwo.classList.remove("hidden")
            facilityThree.classList.add("hidden")
            facilityFour.classList.add("hidden")
            break;
        case 3:
            facilityOne.classList.add("hidden")
            facilityTwo.classList.add("hidden")
            facilityThree.classList.remove("hidden")
            facilityFour.classList.add("hidden")            
            break;
        case 4:
            facilityOne.classList.add("hidden")
            facilityTwo.classList.add("hidden")
            facilityThree.classList.add("hidden")
            facilityFour.classList.remove("hidden")
            break;
    }
    
}