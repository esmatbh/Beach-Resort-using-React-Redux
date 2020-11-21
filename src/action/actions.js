import { GET_TYPE, GUESTS_FILTER, PRICE_FILTER, SIZE_FILTER, BREAKFAST_FILTER, PETS_FILTER } from '../actiontypes';

// Type Filter
export const typeFilter = (value) => {


    const action = {
        type: GET_TYPE,
        value

    }
    return action;
}

// Guests Filter
export const guestsFilter = (value) => {


    const action = {
        type: GUESTS_FILTER,
        value

    }
    return action;
}

//Price Filter
export const priceFilter = (value) => {


    const action = {
        type: PRICE_FILTER,
        value

    }
    return action;
}

//Size Filter
export const sizeFilter = (value, floorType, minSize, maxSize) => {
        const action = {
            type: SIZE_FILTER,
            value,
            floorType,
            minSize,
            maxSize
        }
        return action;
    }
    // Breakfast Filter
export const breakfastFilter = (value) => {
    const action = {
        type: BREAKFAST_FILTER,
        value

    }
    return action;
}

// Breakfast Filter
export const petsFilter = (value) => {
    const action = {
        type: PETS_FILTER,
        value

    }
    return action;
}