import React, { Fragment } from 'react'
import Title from '../Components/Title';
const RoomsFilter = (props) => {
 
 //get rooms arrays to use it in form filter
  let fields={roomsType:[],people:[], priceArray:[],sizeArray:[]};
  
  props.newState.rooms.map(item=>{
      fields.roomsType.push(item.fields.type);
      fields.people.push(item.fields.capacity);
      fields.priceArray.push(item.fields.price);
      fields.sizeArray.push(item.fields.size);
      
  return fields;   
  });
  //Note: types is repeated so should make it unique value in the array :use [...new Set(array)]
  // array1=["all", ...array2] is mean add array2 and item "all" to array1
 let uniqueTypes=["all",...new Set(fields.roomsType)].map((item,index)=>{
  return <option key={index} value={item}>{item} </option>
  });

  let uniqueCapacity=[...new Set(fields.people)].map((item,index)=>{
    return <option key={index} value={item}>{item} </option>
    });
    
    fields.priceArray.sort(function(a, b){return a - b});
   let minPrice=fields.priceArray[0];
   let maxPrice=fields.priceArray[fields.priceArray.length-1];

   fields.sizeArray.sort(function(a, b){return a - b});
   let minSize=fields.sizeArray[0];
   let maxSize=fields.sizeArray[fields.sizeArray.length-1]
  return ( 
    < Fragment >
       <section className="filter-container">
         <Title title="search rooms"/>
         <form action="" className="filter-form">
           {/* type filter */}
      <div className="form-group">
        <label htmlFor="type">Room Type</label>
        <select name="type" id="type" className="form-control " defaultValue={'DEFAULT'} //should use it for first option
        onChange={(e)=>{props.typeFilter(e.target.value)}}
        >
          <option  value="DEFAULT"   > -- select rooms type -- </option> {/*first option is not working so we put it */}
         {uniqueTypes}
          </select>
          </div>

           {/* guests filter */}
      <div className="form-group">
        <label htmlFor="guests">Guests</label>
        <select name="guests" id="guests" className="form-control " defaultValue={'DEFAULT'} 
        onChange={(e)=>{props.guestsFilter(e.target.value)}}
        >
          <option   value="DEFAULT"   > -- select rooms capacity -- </option>
         {uniqueCapacity}
          </select>
          </div>

          {/* Price Filter */}
     <div className="form-group">
             <label htmlFor="price">Room Price $ <span id="priceSpan"></span></label>
        
            <input type="range" name="price"  id="price" className="form-control"  
            min={minPrice} max={maxPrice} onInput={(e)=>{
            document.getElementById('priceSpan').innerHTML = e.target.value
            props.priceFilter(e.target.value)
            }} />
      
     </div>

     {/* Size Filter */}
     <div className="form-group">
        <label htmlFor="size">Room Size</label>
        <div className="size-inputs">
            <input type="number" name="minSize"  id="size" className="size-input" min={minSize} defaultValue={minSize}
            onChange={(e)=>{ props.sizeFilter(e.target.value,"min",minSize,maxSize)}}
            />
            <input type="number" name="maxSize"  id="size" className="size-input" max={maxSize} defaultValue={maxSize}
            onChange={(e)=>{props.sizeFilter(e.target.value,"max",minSize,maxSize)}}
            />

        </div>
      
     </div>

    {/* Extra Filter */}
     <div className="form-group">
          {/* Breakfast */}
        <div className="single-extra">
            <input type="checkbox" name="breakfast" id="breakfast" onChange={(e)=>{props.breakfastFilter(e.target.checked);}}/>
           <label htmlFor="breakfast">Breakfast</label>
           </div>
        {/* Pets */}
        <div className="single-extra">
            <input type="checkbox" name="pets" id="pets"  onChange={(e)=>{props.petsFilter(e.target.checked);}}/>
           <label htmlFor="pets">Pets</label>
           </div>
           </div>
         </form>
       </section>
      </Fragment>
    )
}

export default RoomsFilter