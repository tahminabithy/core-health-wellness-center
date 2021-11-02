import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const DoctorsDetails = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('/doctorData.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className='container shadow'>
            <p className='text-center fs-3 mt-3'>Our Experts</p>
            <p className='text-center text-secondary'>We are here to serve you...</p>
            <div className='row g-4 p-5'>
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default DoctorsDetails;