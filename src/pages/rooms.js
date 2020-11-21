import React,{Fragment} from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import RoomsContainer from '../Components/RoomsContainer'

const Rooms = (props) => {
  
    return (
      <Fragment>
          <Hero hero='roomsHero'>

          <Banner title="Our rooms" >
                       <Link to ="/" className="btn-primary"> return Home</Link>
               </Banner>
          </Hero>
          
          <RoomsContainer {...props} />
          {/* to pass props object to child component use <parent  {...propsObject} */}
      </Fragment> 
    )
}

export default Rooms;
