import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('/doctorData.json')
            .then(res => res.json())
            .then(data => setDoctors(data.slice(0, 3)))
    }, [])
    return (
        <div className='row g-4'>
            {
                doctors.map(doctor => <Doctor
                    key={doctor.id}
                    doctor={doctor}
                ></Doctor>)
            }
        </div>
    );
};

export default Doctors;