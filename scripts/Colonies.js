import { getGovernors, getColonies, getChosenMinerals} from "./database.js"


 const findgovernor = (id) =>{
    const governors = getGovernors();
    
    const foundGovernor = governors.find((gov) =>  gov.id === id)
    return foundGovernor
}

 const findColony = () =>{
    const governor = findgovernor(getChosenMinerals().governorId)
    const colonies = getColonies();
    if (governor !== undefined){
        const foundColony = colonies.find((colony) => colony.id === governor.colonyId)
        return foundColony

    }
}
export const displaySelectedGovernor = () =>{
    const governor = findgovernor(getChosenMinerals().governorId)
    return (governor === undefined ?  "" : `<h2>${governor.name}</h2>`)
}
export const displayColonyAvailableResources = () =>{
    const governor = findgovernor(getChosenMinerals().governorId)
    const colony = findColony(governor)
    if (colony === undefined){
        return "<h2>Colonies</h2>"
    }else{
        return `
            <h2>${colony.name}</h2>
        `

    }
}