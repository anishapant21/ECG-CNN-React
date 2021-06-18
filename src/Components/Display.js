import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const Display = ({data}) => {
    let dataMe=[];
    console.log(typeof(data)) 
    !!data? callMeMaybe() : console.log('no data')

    function callMeMaybe(){
        console.log('yes baby it is me')
        console.log(data[0].name)
        var datas;
        for (let i=0; i<data.length ; i++){
            let dataHere= data[i].value;
            let dataMain= {uv : dataHere};
            dataMe.push(dataMain);
        }
    }
    
     

    

    
    return (
        <div style={{marginLeft:"50px", minWidth:"1010px", minHeight:"400px", maxHeight:""}} className="ui card">
            <LineChart width={1000} height={400} data={dataMe}>
                <Line type="monotone" dataKey="uv" stroke ="#8884d8" dot={false} />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                
            </LineChart>
            
        </div>
    );
};

export default Display;
