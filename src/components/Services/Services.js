import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container mt-5 pt-3'>
            <div className='text-center mb-5 pb-4 '>
                <h1>Our Clinic Services</h1>
                <p><small className='text-secondary'>Services we provide</small></p>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;