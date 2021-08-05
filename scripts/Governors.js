import { getGovernors } from "./database.js";
import { findgovernor } from "./Colonies.js";

export const GovernorsSelection = () =>{
    const governors = getGovernors();
    let htmlString = `<label for="governors">Governors</label>
                        <select name="governors">`;
    const governorsHTML = governors.map((gov) =>{
        if (gov.isActive){
            return `
                <option id="governors--${gov.id}" value="love">${gov.name}</option>
            `
        }else{
            return `
                <option disabled>${gov.name}</option>
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
        if (event.target.id.startsWith("governors")){
            const [,eventId] = event.target.id.split("--")
            findgovernor(parseInt(eventId))
        }
    }
)