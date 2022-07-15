import React from 'react'
import Attributes from './Attributes';
// import './Form.css'

const Form = ({data,i}) => {




function toggleVisibility() {
    var x = document.getElementById(`${data[0]}`);
    var y= document.getElementById(`${data[0]}box`);
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.backgroundColor = "aliceblue";
      } else {
        x.style.display = "block";
        y.style.backgroundColor = "lightcoral";
      }
  }
  return (
    <div className='boxForButton'>
        <button className='formHeadingButton' type='button' onClick={toggleVisibility} id={data[0]+'box'}>{data[0]}</button>
<div id={data[0]} className="formBody">
        {Object.entries(data[1]).map((item,index)=>(
            <Attributes nameOfConfig={data[0]} data={item} key={index} />
            
        ))}
        </div>

    </div>
  )
}

export default Form