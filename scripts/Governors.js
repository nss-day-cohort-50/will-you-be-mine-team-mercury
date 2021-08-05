import { getGovernors } from "./database.js";
import { findgovernor } from "./Colonies.js";
import { isGovernorClicked } from "./Facilities.js";

export const GovernorsSelection = () =>{
    const governors = getGovernors();
    let htmlString = `<label for="governors">Governors</label>
                        <select name="governors">`;
    const governorsHTML = governors.map((gov) =>{
        if (gov.isActive){
            return `
                <option name="governors"  value="governors--${gov.id}">${gov.name}</option>
            `
        }else{
            return `
                <option name="governors" disabled>${gov.name}</option>
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
            findgovernor(parseInt(eventId))
            isGovernorClicked(true)
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
        
    }
)