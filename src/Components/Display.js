import { Flex } from '@chakra-ui/react';
import { func } from 'prop-types';
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ComposedChart } from 'recharts';
import Chart from './Chart';
import '../css/Display.css'
import Slider  from './Slider';





const Display = ({data}) => {
    const [condition, setCondition]=useState('Normal');
    const [dataAll, setDataAll] = useState([]);

    const [begPoint, setBigPoint] =useState(0);
    const [endPoint, setEndPoint] = useState(400);

    let dataMe=[];
    console.log(typeof(data)) 
    !!data? callMeMaybe() : console.log('no data')
    function callMeMaybe(){
        console.log(data.length);
        for (let i=0; i<data.length ; i++){
            let dataHere= data[i].value;
            let dataMain= {uv : dataHere};
            dataMe.push(dataMain);                    

    }
    //setCondition(data[0].resultFin)
}
    
        var updateInterval=1000;
        var dataLength=400;
        var datamin=400;
        var len=dataMe.length;

    useEffect (()=>{
        var dps=[];
        var updateChart = function(startPoint, endPoint){
        
            console.log("i am strt", startPoint);
            console.log("I am end", endPoint)
            endPoint = endPoint || 1;
            for (var j=startPoint; j<endPoint; j++){
                dps.push(dataMe[j]);
                
                
            }
            // if (dps.length>=400){
            //     dps.shift()
            // }

        };

        
        

        updateChart(begPoint, endPoint);
        setDataAll(dps)
        
       
        //setBigPoint(begPoint+1)

        //updateChart(begPoint, endPoint);
        // setInterval(function(){
        //     setDataAll(dps);
        //     var updatePoint = begPoint+1;
        //     var updateAgain = endPoint+1;
        //     setBigPoint(updatePoint);
        //     setEndPoint(updateAgain);
        //     updateChart(begPoint, endPoint);
        // }, updateInterval);

        

    }, [begPoint])


    

   
    return (
        <div className="grid">
            <div style={{display:"flex"}}>
            <div style={{marginLeft:"20px", minWidth:"1010px", minHeight:"400px", maxHeight:""}} className="ui card">

            
            <LineChart width={1000} height={400} data={dataAll}>
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
        <div style={{marginLeft:"30px", marginTop:"20px", letterSpacing:'2px', fontFamily:'Raleway', color:"#CF1259", fontWeight:"900"}} className="ui header">
       <b> Emergency Contact</b>
        </div>
        <div className="ui content" >
            <Slider />
        </div>
      
        
        </div>

        </div>
        

            </div>
            
        
        <div style={{display:"inline-flex" , marginLeft:"20x", marginTop:"20x"}}  >
            <div style={{minHeight:"200px", minWidth:"400px", marginLeft:"50px", marginRight:"30px"}} className="ui raised card">
                <div style={{marginLeft:"120px", marginTop:"50px", letterSpacing:'2px', fontFamily:'Raleway'}} className="ui header" >
                    Current Condition 
                </div>
                <div style={{color:'#00A896', fontSize:"25px", marginLeft:'150px', marginTop:"20px"}}>
                    {condition}
                </div>
            </div>
            <div style={{minHeight:"200px", minWidth:"400px", marginLeft:"120px", marginRight:"30px"}} className="ui raised card">
                <div style={{marginLeft:"120px", marginTop:"50px", letterSpacing:'2px', fontFamily:'Raleway'}} className="ui header" >
                    Heart Rate
                    <div style={{color:'#941C2F', fontSize:"25px", marginLeft:'10px', marginTop:"20px"}}>
                        85pm

                    </div>
                </div>
            </div>
            <div>
                <div id='mobile-call-btn'>
                    <a href="call-me-baby"><span>Call Now</span>
                    <br />
                    <img src='https://res.cloudinary.com/aldridgedev/image/upload/v1584316596/icons/call-answer-200.png'></img>
                    </a>
                </div>
            </div>
            
        </div>

        </div>
       
    );
};

export default Display;



// const [condition, setCondition]=useState('Checking for heart beat...');
//     const [dataAll, setDataAll] = useState([]);
//     let dataMe=[];
//     console.log(typeof(data)) 
//     !!data? callMeMaybe() : console.log('no data')
//     const dataLen=4000;
//     function callMeMaybe(){
//         console.log('yes baby it is me')
//         console.log(data[0].name)
//         let dps=[];
        
//         setInterval(()=>{
//             for (let i=0; i<dataLen; i++){
//                 let dataHere= data[i].value;
//                 let dataMain = { uv : dataHere};
//                 dps.push(dataMain)
//                 setDataAll(dps)
//             }
//         }, 3000)
       
        

        
//         // for (let i=0; i<360 ; i++){
//         //     let dataHere= data[i].value;
//         //     let dataMain= {uv : dataHere};
//         //     dataMe.push(dataMain);
            
            
            
            
//         // }

//     }
//     useEffect(()=>{
//         if (dataAll.length > dataLen) {
//             dataAll.shift();
//         }

//     }, [])

    
    
    

//     // useEffect(()=>{
//     //     !!data? callMeMaybeAgain() : console.log('no data')
//     //     function callMeMaybeAgain(){
//     //         for (let j=0; j<1000; j++){
//     //             //setCondition(condition => data[j].resultFin)
//     //             console.log("I am the condition", data[j].resultFin)
//     //         }

//     //     }
        
//     // }, [condition])