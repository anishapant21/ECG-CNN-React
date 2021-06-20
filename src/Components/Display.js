import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const Display = ({data}) => {
    const [condition, setCondition]=useState('Checking for heart beat...')
    let dataMe=[];
    console.log(typeof(data)) 
    !!data? callMeMaybe() : console.log('no data')

    function callMeMaybe(){
        console.log('yes baby it is me')
        console.log(data[0].name)
        var datas;
        for (let i=0; i<360 ; i++){
            let dataHere= data[i].value;
            let dataMain= {uv : dataHere};
            dataMe.push(dataMain);
            
            
        }
    }

    useEffect(()=>{
        !!data? callMeMaybeAgain() : console.log('no data')
        function callMeMaybeAgain(){
            for (let j=0; j<1000; j++){
                setCondition(data[j].resultFin)
            }

        }
        
    }, [condition])
    
     

    

    
    return (
        <div className="grid">
            <div style={{display:"flex"}}>
            <div style={{marginLeft:"20px", minWidth:"1010px", minHeight:"400px", maxHeight:""}} className="ui card">
            <LineChart width={1000} height={400} data={dataMe}>
                <Line type="monotone" dataKey="uv" stroke ="#8884d8" dot={false} />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                
            </LineChart>
            
        </div>
        <div>
        <div style={{marginLeft:"25px", marginTop:"0px",minWidth:"200px", minHeight:"100px"}} className="ui card">
        <div style={{marginLeft:"20px", marginTop:"20px", letterSpacing:'1px', fontFamily:'Raleway', fontSize:"15px"}} className="ui header" >
            Access patient's heart Condition history here:
            </div>
            <button className="ui teal button">History</button>
        </div>
        <div style={{marginLeft:"25px", marginTop:"20px",minWidth:"200px", minHeight:"280px"}} className="ui card">
        <div style={{marginLeft:"30px", marginTop:"20px", letterSpacing:'2px', fontFamily:'Raleway'}} className="ui header">
        Emergency Contact
        </div>
        
        </div>

        </div>
        

            </div>
            
        
        <div style={{display:"inline-flex" , marginLeft:"20x", marginTop:"20x"}}  >
            <div style={{minHeight:"200px", minWidth:"400px", marginLeft:"20px", marginRight:"30px"}} className="ui raised card">
                <div style={{marginLeft:"120px", marginTop:"50px", letterSpacing:'2px', fontFamily:'Raleway'}} className="ui header" >
                    Current Condition 
                </div>
                <div>
                    {condition}
                </div>
            </div>
            <div style={{minHeight:"200px", minWidth:"400px", marginLeft:"100px", marginRight:"30px"}} className="ui raised card">
                <div style={{marginLeft:"120px", marginTop:"50px", letterSpacing:'2px', fontFamily:'Raleway'}} className="ui header" >
                    Heart Rate
                    <div style={{color:'#DCCCA3', fontSize:"25px"}}>
                        85pm

                    </div>
                </div>
            </div>
            <div style={{marginLeft:"200px", marginTop:"150px"}}>
                Call now
            </div>
            
        </div>

        </div>
       
    );
};

export default Display;
