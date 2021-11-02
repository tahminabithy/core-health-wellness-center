import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const [details, setDetails] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);
    const info = details.filter(detail => detail.id == id);
    // console.log(info[0]?.name)
    return (
        <div>
            <div className='container mt-5 pt-5 shadow-lg'>
                <div className='row'>
                    <div className='col-lg-6 col-12'>
                        <h1>{info[0]?.name}</h1>
                        <p><small className='text-secondary'>Popular Information About Our Clinic</small></p>
                        <p>{info[0]?.description}</p>
                        <button type="button" class="btn btn-outline-dark">Contact Us</button>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <img src={info[0]?.img} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center py-5 m-5 shadow-lg'>
                <div>
                    <h1 className='text-center'>Core Health And Wellness Center</h1>
                    <p className='text-center'>Make Appointment Or Call 0183973484</p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button type="button" class="btn btn-outline-dark">Make An Appointment</button>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default ServiceDetails;