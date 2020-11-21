import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const ImageContainer = (props) => {
  
  
    return (
      
        <Fragment>
             {
             
             props.rooms.map(room=>{
                       return(

                        <article className='room' key={Math.random()} >
                          <div className="img-container">
                              <img src={room.images[0] } alt="Single Room"/>
                              <div className="price-top">
                                <h6>${room.fields.price}</h6>
                                <p>per night</p>
                              </div>
                              <Link to={`/rooms/${room.fields.slug}`} className="btn-primary room-link" >Features</Link>
                          </div>
                          <p className="room-info">{room.fields.name}</p>
                        </article>
                       )
                      
                   })
                 
                  }   
        </Fragment>
         
    )
}

export default ImageContainer;
