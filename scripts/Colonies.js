import { colonyMinerals } from "./ColonyMinerals.js";
import { getGovernors, getColonies, getChosenMinerals, setColonyId} from "./database.js"


 const findGovernor = (id) =>{
    const governors = getGovernors();
    
    const foundGovernor = governors.find((gov) =>  gov.id === id)
    return foundGovernor
}

 const findColony = () =>{
    const governor = findGovernor(getChosenMinerals().governorId)
    const colonies = getColonies();
    if (governor !== undefined){
        const foundColony = colonies.find((colony) => colony.id === governor.colonyId)
        setColonyId(foundColony.id) 
        return foundColony

    }
}
export const displaySelectedGovernor = () =>{
    const governor = findGovernor(getChosenMinerals().governorId)
    return (governor === undefined ?  "" : `<h2>${governor.name}</h2>`)
}
export const displayColonyAvailableResources = () =>{
    const governor = findGovernor(getChosenMinerals().governorId)
    const colony = findColony(governor)
    if (colony === undefined){
        return `<h2 class="colony__title">Colony</h2>`
    }else{
        return `
            <h2 class="colony__title">${colony.name} Colony</h2>
            <p>(governor: ${governor.name})</p>
            ${colonyMinerals(colony.name)}
        `
    }
}