import { getGovernors, setChosenGovernorId } from "./database.js";



export const GovernorsSelection = () =>{
    const governors = getGovernors();
    let htmlString = `  <select id="governorSelector" name="governors">
                        <option class="governorOption" value="" selected disabled hidden>Choose here</option>`;
    const governorsHTML = governors.map((gov) =>{
        if (gov.isActive){
            return `
                <option class="governorOption" name="governors"  value="governors--${gov.id}">${gov.name}</option>
            `
        }else{
            return `
                <option class="governorOption" name="governors" disabled>${gov.name}</option>
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