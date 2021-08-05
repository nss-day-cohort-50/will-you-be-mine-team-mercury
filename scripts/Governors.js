import { getGovernors } from "./database.js";


export const GovernorsSelection = () =>{
    const governors = getGovernors();
    let htmlString = `<label for="governors">Governors</label>
                        <select name="governors">`;
    const governorsHTML = governors.map((gov) =>{
        if (gov.isActive){
            return `
                <option>${gov.name}</option>
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