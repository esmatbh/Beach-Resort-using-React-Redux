import React, { Fragment } from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';

//import defaultBcg from '../images/defaultBcg';

  let params,selected,selectedFeature;

const  SingleRoom =(props)=>   {
       
        params= props[0].match.params.parms;
        
        selected= props[1].newState.rooms.filter((room)=>{return room.fields.slug === params });
        
        selectedFeature=selected[0].fields.name;
       
            window.scrollTo(0,0); // to show page from the top 
          
      
        return (
          
            <Fragment >
            
                <Hero hero="roomsHero">
                    <Banner title={selectedFeature} >
                            <Link to ="/rooms" className="btn-primary"> our Rooms</Link>
                    </Banner>

                </Hero>
                <section className="single-room ">
                    <div className="single-room-images">
                        {selected[0].images.map(item=>{
                            return <img key={Math.random()} src={item} alt=""/>
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Description</h3>
                            <p>{selected[0].fields.description}</p>
                        </article>

                        <article className="info">
                            <h3>Info</h3>
                            <h6>price : ${selected[0].fields.price} </h6>
                            <h6>size : {selected[0].fields.size } SQFT</h6>
                            <h6>max capacity:{ selected[0].fields.capacity > 1 ?
                            `${selected[0].fields.capacity} pepole`:` ${selected[0].fields.capacity}person`} </h6>
                            <h6>{selected[0].fields.pets ? "pets allowed":"no pets allowed"} </h6>
                            <h6>{selected[0].fields.breakfast && "free breakfast is included "} </h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {selected[0].fields.extras.map(item=>{
                            return <li key={Math.random()}>-{item} </li>
                        })}
                    </ul>
                </section>
                </Fragment>
        )
    }


export default SingleRoom;
