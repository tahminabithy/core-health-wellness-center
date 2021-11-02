import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { name, description, img, id } = service;
    return (
        <div class="col shadow-lg">
            <div class="card h-100">
                <img className='img-size img-fluid' src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <div className='m-4'>
                    <Link to={`/detailservices/${id}`}>
                        <button type="button" class="btn btn-outline-dark">More Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Service;