import React from 'react'

const Attributes = ({data, nameOfConfig,i}) => {
    if(data[1].type==="float"){
        return(
            <div className='attributes'>
                <label className='attributeLabel' >{data[1].display}</label>
                <input type='number' step='0.0001' name='float' className='atrributeInput' id={data[1].display+' from '+nameOfConfig}  defaultValue={data[1].value} ></input>
            </div>
        )
    }
    else if(data[1].type==="int"){
        return(
            <div className='attributes'>
                <label className='attributeLabel' >{data[1].display}</label>
                <input type='number' step='1' name='int' className='atrributeInput' id={data[1].display+' from '+nameOfConfig} defaultValue={data[1].value} ></input>
            </div>
        )
    }
    else {
        return (
            <div className='attributes'>
                <label className='attributeLabel' >{data[1].display}</label>
                <input type='text' name='list' className='atrributeInput' id={data[1].display+' from '+nameOfConfig}  defaultValue={data[1].value} ></input>
            </div>
        )
    }
}

export default Attributes