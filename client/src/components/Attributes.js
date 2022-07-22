import React from 'react'

const Attributes = ({ attrObj, nameOfConfig, i, data, setData }) => {

    const handleChange = (e) => {

        if (attrObj[1].type === 'float' || attrObj[1].type === 'int') {
            data[nameOfConfig][attrObj[0]].value = Number(e.target.value);
        }
        else {

            var arrOfStr = e.target.value.split(',');
            const arrOfNum = arrOfStr.map(str => {
                return Number(str);
            });
            data[nameOfConfig][attrObj[0]].value = arrOfNum;
        }
    }



    if (attrObj[1].type === "float") {
        return (
            <div className='attributes'>
                <label className='attributeLabel' >{attrObj[1].display}</label>
                <input type='number' step='0.0001' name='float' className='atrributeInput' id={attrObj[1].display + ' for ' + nameOfConfig} defaultValue={attrObj[1].value} onChange={handleChange}></input>
            </div>
        )
    }
    else if (attrObj[1].type === "int") {
        return (
            <div className='attributes'>
                <label className='attributeLabel' >{attrObj[1].display}</label>
                <input type='number' step='1' name='int' className='atrributeInput' id={attrObj[1].display + ' for ' + nameOfConfig} defaultValue={attrObj[1].value} onChange={handleChange}></input>
            </div>
        )
    }
    else {
        return (
            <div className='attributes'>
                <label className='attributeLabel' >{attrObj[1].display}</label>
                <input type='text' name='list' className='atrributeInput' id={attrObj[1].display + ' for ' + nameOfConfig} defaultValue={attrObj[1].value} onChange={handleChange}></input>
            </div>
        )
    }
}

export default Attributes