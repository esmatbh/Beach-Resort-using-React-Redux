import React,{Fragment} from 'react';
import Hero from '../Components/Hero';
import {Link} from 'react-router-dom';
import Banner from '../Components/Banner';

const Error = () => {
    return (
       <Fragment>
           <Hero hero="defaultHero">
           <Banner title="404" subtitle="Page not found">
                       <Link to ="/" className="btn-primary"> return Home</Link>
               </Banner>
           </Hero>
       </Fragment>
    )
}

export default Error;
