import React from 'react'
import Attributes from './Attributes';
// import './Form.css'

const Form = ({configObj,data,setData,i}) => {




function toggleVisibility() {
    var x = document.getElementById(`${configObj[0]}`);
    var y= document.getElementById(`${configObj[0]}box`);
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
        <button className='formHeadingButton' type='button' onClick={toggleVisibility} id={configObj[0]+'box'}>{configObj[0]}</button>
<div id={configObj[0]} className="formBody">
        {Object.entries(configObj[1]).map((item,index)=>(
            <Attributes nameOfConfig={configObj[0]} attrObj={item} key={index} data={data} setData={setData}/>
            
        ))}
        </div>

    </div>
  )
}

export default Form