import React from 'react';
//import React ,{useState} from 'react';
import  './Square.css'

const Square=(props)=>{
  //const [value, setValue]= useState(null);
    return(
      <button 
         className="Square"
         //onClick={()=>setValue('X')}>
          onClick={props.onClickEvent}
          > 
         {/* {value} */}
        {props.value}
      </button>
    )
  }

export default Square;