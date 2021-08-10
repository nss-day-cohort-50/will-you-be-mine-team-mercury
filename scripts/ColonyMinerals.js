import { getColonies, getMinerals, getResources } from "./database.js";




export const colonyMinerals = (colonyName) => {
    const minerals = getMinerals();
    let html = "<ul>"

    const colony = getColonies().find((colony) => colony.name === colonyName)
    const colonyResources = getResources().filter((resource) => {return resource.colonyId === colony.id})

    for (const mineral of minerals) {
        for (const colonyResource of colonyResources) {
            if (colonyResource.mineralId === mineral.id)
        html +=`<li value="${colonyResource.id}">${colonyResource.amount} tons of ${mineral.name} </li>`
        }
    }

    html += "</ul>"
    return html
}