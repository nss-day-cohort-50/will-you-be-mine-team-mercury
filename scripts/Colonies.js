import { getGovernors, getColonies} from "./database.js"

let governor = ""
export const findgovernor = (id) =>{
    const governors = getGovernors();
    const foundGovernor = governors.find((gov) =>  gov.id === id)
    governor = foundGovernor
}
 const findColony = (governor) =>{
    const colonies = getColonies();
    const foundColony = colonies.find((colony) => colony.id === governor.colonyId)
    return foundColony
}
export const getColonyAvailableResources = () =>{
    const colony = findColony(governor)
    if (colony === undefined){
        return "<h2>Colonies</h2>"
    }else{
        return `
            <h2>${colony.name}</h2>
        `

    }
}