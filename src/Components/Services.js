import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

 class Services extends Component {

    state = {
        services: [{
            icon: <FaCocktail/>,
            title: 'free cocktail',
            info: " Lorem Ipsum is simply dummy text of the printing and typesetting alley of type and scrambl"
            
        },

        {
            icon: <FaHiking/>,
            title: 'Endless Hiking',
            info: " Lorem Ipsum is simply dummy text of the printing and typesetting alley of type and scrambl"
            
        },

        {
            icon: <FaShuttleVan/>,
            title: 'free shuttle',
            info: " Lorem Ipsum is simply dummy text of the printing and typesetting alley of type and scrambl"
            
        },

        {
            icon: <FaBeer/>,
            title: 'Strongest Beer',
            info: " Lorem Ipsum is simply dummy text of the printing and typesetting alley of type and scrambl"
            
        }
        
    ]
    }
    render() {
        return (
           <section className="services">
             <Title title="services"/>
             <div className="services-center">
             {this.state.services.map((item)=>{
                   return(
                    <article key={Math.random()} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title} </h6>
                    <p>{item.info} </p>
                    
                    </article>
                   )
                      
                   
               })}
             </div>

           </section>
          
        )
    }
}

export default Services;