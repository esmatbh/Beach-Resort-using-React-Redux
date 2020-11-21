import React ,{ Fragment} from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import Services from '../Components/Services';
import Featured from '../Components/Featured';



 const Home=(props)=> {
     // I will use constructor becuase the constructor excutes berfore any other lifecycle
     //(connect>>>constructor>>>>render>>componentDidMount)
 
        return (
            <Fragment >
                
                <Hero hero="defaultHero">
                    <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                            <Link to ="/rooms" className="btn-primary"> our Rooms</Link>
                    </Banner>
                    
                </Hero>
                {/* when you call any component and you write code inside this component(called children) 
                    -as above- , you should go to this component and select where this component will be
                    */}
     
                    <Services/>
                    <Featured newState={props.newState} getFeatured={props.getFeatured} />
            </Fragment>
         )
    }


export default Home;
