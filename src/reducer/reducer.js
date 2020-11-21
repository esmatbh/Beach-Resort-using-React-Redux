import { GET_TYPE, GUESTS_FILTER, PRICE_FILTER, SIZE_FILTER, BREAKFAST_FILTER, PETS_FILTER } from '../actiontypes';
import Items from '../data';
let sizeFilter = [],
    breakfastFilter = [],
    withBreakfast = false;
export const roomReducer = (state = { rooms: [], featured: [], sortedRooms: [] }, action) => {
    // get data
    //action.type starts with "@@redx/...." if no action type come to reducer
    if (action.type[0] === "@") {
        let rooms = [];
        Items.map((item) => {

            let id = item.sys.id;
            let roomimages = item.fields.images.map((image) => {
                return image.fields.file.url;
            })
            let room = { id: id, images: roomimages, fields: item.fields };
            rooms.push(room);

            return rooms;
        })

        state.rooms = rooms;
        let featuredRooms = state.rooms.filter((room) => {
            return room.fields.featured === true;
        })
        state.featured = featuredRooms;
        //sortedRooms : rooms from current filter
        state.sortedRooms = state.rooms;

    }
    console.log(action.type);
    switch (action.type) {

        //Types filter
        case GET_TYPE:

            action.value === "all" ? state.sortedRooms = state.rooms :
                state.sortedRooms = state.sortedRooms.slice().filter(item => {
                    return item.fields.type === action.value
                });
            //  typeFilter=state.sortedRooms;

            return {...state } //OR  Object.assign({}, state);

            //Guests filter
        case GUESTS_FILTER:

            state.sortedRooms = state.sortedRooms.slice().filter(item => {
                return item.fields.capacity >= Number(action.value)
            });
            //   guestsFilter=state.sortedRooms;
            return {...state }; //OR  Object.assign({}, state);


            //Price Filter
        case PRICE_FILTER:

            state.sortedRooms = state.sortedRooms.slice().filter(item => {
                return item.fields.price <= Number(action.value)
            });
            // priceFilter=state.sortedRooms;
            return {...state }; // OR Object.assign({}, state);


            //Size Filter
        case SIZE_FILTER:

            action.floorType === "min" ? action.minSize = action.value : action.maxSize = action.value

            state.sortedRooms = state.sortedRooms.slice().filter(item => {
                return item.fields.size >= Number(action.minSize) && item.fields.size <= Number(action.maxSize)
            });


            //     sizeFilter=state.sortedRooms;
            return {...state }; // OR Object.assign({}, state);

            //Breakfast Filter
        case BREAKFAST_FILTER:

            if (action.value) {
                state.sortedRooms = state.sortedRooms.slice().filter(item => {
                    return item.fields.breakfast === action.value
                })
                breakfastFilter = state.sortedRooms;
                withBreakfast = true
            } else { state.sortedRooms = state.sortedRooms }
            return {...state }; // OR Object.assign({}, state);

            //Breakfast Filter
        case PETS_FILTER:
            if (action.value) {
                withBreakfast ?
                    state.sortedRooms = breakfastFilter.slice().filter(item => {
                        return item.fields.pets === action.value
                    }) :
                    state.sortedRooms = state.sortedRooms.slice().filter(item => {
                        return item.fields.pets === action.value
                    })
            } else { state.sortedRooms = state.sortedRooms }
            return {...state }; // OR Object.assign({}, state);

        default:
            return state;

    }
    // to return state use : return Object.assign({}, state)  OR  return {... state} alos if you want
    // to change value of  returned opject use return {... state ,sortedRooms:any value}


}


// example for state in reducer
// const Reducer1 = (state = initialState, action) => {
//     switch(action.type) {
//         case ACTION_TYPES.SUCCESS:
//           return {
//             ...state,
//             stateprop1: true
//           }
//         case ACTION_TYPES.FAILURE:
//           return {
//             ...state,
//             stateprop1: false
//           }
//         default:
//           return state
//       }
//   }