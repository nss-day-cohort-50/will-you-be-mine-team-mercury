const database = {
    colonies : [
        {
            id: 1,
            name: "Earth",
        }, {
            id: 2,
            name: "Mercury",
        }, {
            id: 3,
            name: "Venus",
        }, {
            id: 4,
            name: "Moon",
        }, {
            id: 5,
            name: "Space Station Theta",
        }
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
        {
            id: 1,
            name: "SaltNPeppa Scott",
        }, {
            id: 2,
            name: "Iron",
        }, {
            id: 3,
            name: "Black Matter",
        }, {
            id: 4,
            name: "Vibranium",
        }, {
            id: 5,
            name: "Adamantium",
        }
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
    orders : [],
    orderBuilder: {},
}

export const getColonies = () => { return database.colonies.map(colony => ({...colony}))}
export const getGovernors = () => { return database.governors.map(governor => ({...governor}))}
export const getMinerals = () => { return database.minerals.map(mineral => ({...mineral}))}
export const getMiningFacilities = () => { return database.miningFacilities.map(miningFacility => ({...miningFacility}))}
export const getOrders = () => { return database.orders.map(order => ({...order}))}
export const getOrderBuilder = () => { return database.orderBuilder}

