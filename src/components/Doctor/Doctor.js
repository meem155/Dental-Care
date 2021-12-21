import React, { useEffect, useState } from 'react';
import DoctorDetails from './DoctorDetails';

const Doctor = (props) => {
    const { city, IPv4, postal, state, country_code } = props.monitor
    console.log("Hello", props.monitor)
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctor.json')
            .then(res => res.json())
            .then(data => {
                setDoctors(data)
                console.log(data)
            });
    }, []);




    return (
        <div >
            <br />
            <h1 className="mt-5">Doctor Details</h1>
            <h1 className="mt-5">{city}</h1>
            <h1 className="mt-5">Device IP Address : {IPv4}</h1>
            <h1 className="mt-5">{postal}</h1>
            <h1 className="mt-5">{state}</h1>
            <h1 className="mt-5">{country_code}</h1>
            <div className="res">
                {/* 
                {
                    doctors.map(doctor => <DoctorDetails
                        key={doctor.key}
                        doctor={doctor} />)
                } */}
            </div>

        </div>
    );
};

export default Doctor;