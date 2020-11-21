
import React,{Fragment} from 'react';

const Banner = (props) => {
    return (
      <Fragment>

       <div className='banner'>
           <h1>{props.title}</h1>
           <div/>
           <p>{props.subtitle} </p>
           {props.children}
       </div>
      </Fragment>
    )
}

export default Banner;
