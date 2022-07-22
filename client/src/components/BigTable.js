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


    const handleSubmit = async (e) => {
        e.preventDefault()

        //to check for null values and alert 
        var inputNow = [];
        var allInputs = [];
        var x;
        inputNow = document.getElementsByTagName("input");
        for (x = 0; x < inputNow.length; x++) {
            allInputs.push([inputNow[x].value, inputNow[x].id]);
            if(allInputs[x][0]===""){
                alert(`Please fill ${allInputs[x][1]}`);
                return false;
            }
        }


        //to download the updated file
        var dataStr = "data:text/json;charset=utf-8," +  encodeURIComponent(JSON.stringify(data));
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
                        <Form configObj={item} key={index} data={data} setData={setData} />
                    ))
                }
                <div className='formControl'>
                    <button type='submit' className='saveButton'>Save</button>
                <button type='reset' className='resetButton'>Reset</button>
                </div>
            </form>
            <a id="downloadAnchorElem" href="hi" style={{ display: 'none' }}>made by anayyy</a>
        </div>
        </div> : <h1>Loading...refresh to retry</h1>}
        </div>
    )
}

export default BigTable