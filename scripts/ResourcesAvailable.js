import { getColonies, getMinerals, getResources } from "./database.js"


export const AvailableResources = () => {
    // if colony.id === colonyId, display available resources for that specific colony
    let html = "<ul>"

    const resources = getResources()
    const colonies = getColonies()
    const minerals = getMinerals()
    
    const resourceByColonyHTMl = resources.map((resource) => {
        for (const mineral of minerals) {
            for (const colony of colonies) {
                for (const resource of resources) {
                    if (resource.colonyId === colony.id && resource.mineralId === mineral.id) {
                    return `<li value=${resource.id}>${mineral.name} quantity: ${resource.amount}</li>`
                    }
                }
            }
        }
    })
    
    html += resourceByColonyHTMl.join("")
    html += "</ul>"

    return html
}
