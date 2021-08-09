import { getGovernors, setChosenGovernorId, getChosenMinerals } from "./database.js";



export const GovernorsSelection = () =>{
    const governors = getGovernors();
    let htmlString = `  <select name="governors">
                        <option class="governor-option" value=""  selected disabled hidden>Choose here</option>`;
    const governorsHTML = governors.map((gov) =>{
        if (gov.isActive){
            if (gov.id === getChosenMinerals().governorId){
                return `<option class="governor-option" name="governors" selected value="governors--${gov.id}">${gov.name}</option>`
            }
            return `
                <option class="governor-option" name="governors"  value="governors--${gov.id}">${gov.name}</option>
            `
        }else{
            return `
                <option class="governor-option" name="governors" disabled>${gov.name}</option>
            `
        }
    })
    htmlString += governorsHTML.join("")
    htmlString += `</select>`
    return htmlString
}

document.addEventListener(
    "change",
    (event) =>{
        if (event.target.value.startsWith("governors")){
            const [,eventId] = event.target.value.split("--")
            
            
            setChosenGovernorId(parseInt(eventId))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
        
    }
)