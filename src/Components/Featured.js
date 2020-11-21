import React, { Component } from 'react';
import Title from './Title';
//import defaultImg from '../images/defaultBcg'
import {Link} from 'react-router-dom';
import ImageContainer from '../Components/ImageContainer'
class Featured extends Component {

    render() {

        return (
            <section className="featured-rooms">
                <Title title='featured rooms' />
              
                <div className='featured-rooms-center' >
                    <ImageContainer rooms={this.props.newState.featured} />
                  
                </div>

            </section>
               
            
        )
    }
}

export default Featured;
