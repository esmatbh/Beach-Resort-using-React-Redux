import React, { Fragment } from 'react';
import ImageContainer from '../Components/ImageContainer'

const RoomsList = (props) => {

    
    return ( 
      <Fragment >
         <section className="roomslist">
             <div className="roomslist-center">
               <ImageContainer rooms={props.rooms} />
             </div>
         </section>

        </Fragment>
    )
}

export default RoomsList;