import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Accordion from './Accordion';
import axios from 'axios';
const Chart = ({name, age, email}) => {

    const [currentDoctorName, setCurrentDoctorName]= useState('');
    const [currentContact, setCurrentContact]= useState('');
    const [currentGuardian, setCurrentGuardian]= useState('');
    useEffect(()=>{
        axios.get('/time').then(
            (response) => {
                const res = response.data;
                setCurrentDoctorName(res.doctor);
                setCurrentContact(res.contact);
                setCurrentGuardian(res.guardian);
                
            }
        );
    }, [currentDoctorName, currentGuardian, currentContact]);

    

    const items = [
        {
            title: 'Last Checked on',
            content: 'Patient heart was stable when the doctor checked last.'
        },
        {
            title:'Medicines being taken',
            content:'Cetamol'
        }, 
        {
            title: 'Additional notes',
            content: 'The patient suffers from anxiety'
        }
    ];
    return (
        <div style={{marginTop:"50px"}}>
            <div style={{minWidth:"400px", minHeight:"700px"}} className="ui raised blue card">
                <div style={{marginLeft:"120px", marginTop:"50px", letterSpacing:'2px', fontFamily:'Raleway'}} className="ui header">
                    Patient's details
                </div>
                <div style={{fontSize:"20px"}} className="ui content">
                   <div className="name">
                       Name : {name}
                   </div>
                   <div className="age">
                       Age: {age}
                   </div>
                   <div className="doctor">
                       Doctor : Dr. {currentDoctorName}
                   </div>
                   <div className="contact">
                       Contact details: {currentContact}
                   </div>
                   <div className="Guardian">
                       Guardian: {currentGuardian}
                   </div>
                   <div className="email">
                       Email: {email}
                   </div>
                </div>
                <div className="ui content">
                    <Accordion items={items} />
                </div>
            </div>
        </div>
    )
};

export default Chart;