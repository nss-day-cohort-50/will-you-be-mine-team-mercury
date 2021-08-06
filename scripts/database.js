const database = {
    colonies : [
        {id: 1, name: "Earth"}, 
        {id: 2, name: "Mercury"}, 
        {id: 3, name: "Venus"},
        {id: 4, name: "Moon"},
        {id: 5, name: "Space Station Theta"}
    ],

    governors : [
        {
            id: 1,
            name: "Bruno Mars",
            isActive: true,
            colonyId: 3
        }, {
            id: 2,
            name: "Alicia Llamacita",
            isActive: true,
            colonyId: 5
        }, {
            id: 3,
            name: "Freddie Mercury",
            isActive: false,
            colonyId: 2
        }, {
            id: 4,
            name: "Bruce Wayne",
            isActive: false,
            colonyId: 1
        }, {
            id: 5,
            name: "Phillip J. Fry",
            isActive: true,
            colonyId: 1
        }, {
            id: 6,
            name: "David Baowie",
            isActive: true,
            colonyId: 4
        }
    ],

    minerals : [
        {id: 1, name: "SaltNPeppa Scott"}, 
        {id: 2, name: "Iron"},
        {id: 3, name: "Black Matter"},
        {id: 4, name: "Vibranium"},
        {id: 5, name: "Adamantium"}
    ],

    miningFacilities : [
        {
            id: 1,
            name: "Jupiter's Arm",
            isActive: true
        }, {
            id: 2,
            name: "Hermes' Armpit",
            isActive: true
        }, {
            id: 3,
            name: "Hermes' Palace",
            isActive: true
        }, {
            id: 4,
            name: "Lil' Tay-Tay's",
            isActive: true
        }
    ],

    mineralsAvailableByFacilities : [
        {
            id: 1,
            mineralId: 1,
            miningFacilityId: 2,
            quantityAvailable: 30
        }, {
            id: 2,
            mineralId: 1,
            miningFacilityId: 3,
            quantityAvailable: 50
        }, {
            id: 3,
            mineralId: 2,
            miningFacilityId: 4,
            quantityAvailable: 5
        },{
            id: 4,
            mineralId: 3,
            miningFacilityId: 1,
            quantityAvailable: 0
        }, {
            id: 5,
            mineralId: 3,
            miningFacilityId: 2,
            quantityAvailable: 45
        }, {
            id: 6,
            mineralId: 4,
            miningFacilityId: 1,
            quantityAvailable: 9
        }, {
            id: 7,
            mineralId: 5,
            miningFacilityId: 2,
            quantityAvailable: 16
        }, {
            id: 8,
            mineralId: 2,
            miningFacilityId: 3,
            quantityAvailable: 3000
        }
    ],
    resources : [
        {id: 1, mineralId: 1, colonyId: 1, amount: 49},
        {id: 2, mineralId: 3, colonyId: 1, amount: 7},
        {id: 3, mineralId: 5, colonyId: 1, amount: 18},
        {id: 4, mineralId: 3, colonyId: 2, amount: 99},
        {id: 5, mineralId: 4, colonyId: 2, amount: 76},
        {id: 6, mineralId: 2, colonyId: 3, amount: 43},
        {id: 7, mineralId: 1, colonyId: 3, amount: 34},
        {id: 8, mineralId: 5, colonyId: 3, amount: 56},
        {id: 9, mineralId: 3, colonyId: 4, amount: 92},
        {id: 10, mineralId: 2, colonyId: 4, amount: 5},
        {id: 11, mineralId: 4, colonyId: 5, amount: 1}
    ],
    chosenMinerals: {},
}

export const getColonies = () => { return database.colonies.map(colony => ({...colony}))}
export const getGovernors = () => { return database.governors.map(governor => ({...governor}))}
export const getMinerals = () => { return database.minerals.map(mineral => ({...mineral}))}
export const getMiningFacilities = () => { return database.miningFacilities.map(miningFacility => ({...miningFacility}))}
export const getChosenMinerals = () =>{return database.chosenMinerals}
export const getResources = () => {return database.resources.map(resource => ({...resource}))}


export const getFacilitiesMinerals = ()=>{return database.mineralsAvailableByFacilities.map(mineral =>({...mineral}))}
// export const getOrderBuilder = () => { return database.orderBuilder}
export const setChosenGovernorId = (id)=>{database.chosenMinerals.governorId = id}
export const setSelectedFacility = (id)=>{database.chosenMinerals.facilityId = id}
export const setChosenMaterials = (object) =>{database.chosenMinerals.selectedMinerals += object}
// Also need to add getter function for mineralsAvailableByFacilities

export const setJupitersArmId = (id) =>{database.chosenMinerals.jupitersArmId = id}
export const setHermesArmpitId = (id) =>{database.chosenMinerals.hermesArmpitId = id}
export const setHermesPalaceId = (id) =>{database.chosenMinerals.hermesPalaceId = id}
export const setLilTayTaysId = (id) =>{database.chosenMinerals.lilTayTaysId = id}

export const setJupitersArmMineralId = (id) =>{database.chosenMinerals.jupitersArmMineralId = id}
export const setHermesArmpitMineralId = (id) =>{database.chosenMinerals.hermesArmpitMineralId = id}
export const setHermesPalaceMineralId = (id) =>{database.chosenMinerals.hermesPalaceMineralId = id}
export const setLilTayTaysMineralId = (id) =>{database.chosenMinerals.lilTayTaysMineralId = id}
//