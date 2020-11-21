import React ,{Fragment} from 'react';
import RoomsList from '../Components/RoomsList';
import RoomsFilter from '../Components/RoomsFilter';



const RoomsContainer = (props) => {
   
    return (
        <Fragment>
            
            <RoomsFilter {...props} />
            <RoomsList rooms={props.newState.sortedRooms} />
        </Fragment>
    )
}

export default RoomsContainer
