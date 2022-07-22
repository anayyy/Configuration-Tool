import React, { useState, useEffect } from 'react'
import { ENDPOINT } from '../const'
import Form from './Form';


const BigTable = () => {

    const [data, setData] = useState(null);


    const fetchData = async () => {
        try {
            const response = await fetch(ENDPOINT);
            const result = await response.json();
            setData(result)
            console.log(result);

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchData()

    }, []);


    const handleSubmit = (e) => {
        e.preventDefault()

        
        var inputNow = [];
        var allInputs = [];
        var x;
        inputNow = document.getElementsByTagName("input");

        for (x = 0; x < inputNow.length; x++) {
            allInputs.push([inputNow[x].name, inputNow[x].value, inputNow[x].type, inputNow[x].id]);
            if(allInputs[x][1]===""){
                alert(`Please fill ${allInputs[x][3]}`);
                return false;
            }
        }




        var result = data;
        x = 0;

        Object.entries(result).forEach(configs => {
            Object.entries(configs[1]).forEach(item => {
                if (allInputs[x][2] === 'number') {
                    item[1].value = Number(allInputs[x][1]);
                }
                else {

                    var arrOfStr = allInputs[x][1].split(',');
                    const arrOfNum = arrOfStr.map(str => {
                        return Number(str);
                    });
                    item[1].value = arrOfNum;
                }

                x = x + 1;
            })
        })


        console.log(result)

        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(result));
        var dlAnchorElem = document.getElementById('downloadAnchorElem');
        dlAnchorElem.setAttribute("href", dataStr);
        dlAnchorElem.setAttribute("download", "output.json");
        dlAnchorElem.click();


    }









    return (
        <div>{data ? <div>

            <h1 className='mainHeading'>Configuration Tool</h1>
            <div className='mainContainer'>
            
            <form onSubmit={handleSubmit}>
                {
                    Object.entries(data).map((item, index) => (
                        <Form data={item} key={index} />
                    ))
                }
                <div className='formControl'>
                    <button type='submit' className='saveButton'>Save</button>
                <button type='reset' className='resetButton'>Reset</button>
                </div>
            </form>
            <a id="downloadAnchorElem" href="ok" style={{ display: 'none' }}>ok</a>
        </div>
        </div> : <h1>Loading...refresh to retry</h1>}
        </div>
    )
}

export default BigTable