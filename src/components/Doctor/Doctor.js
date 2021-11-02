import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, specialised, img, chamber } = doctor
    return (
        <div className='col-lg-4 col-12'>
            <div className='rounded-3' >
                <img src={img} className='img-fluid rounded pb-3' alt="" />
                <h5 >{name}</h5>
                <p className=' text-secondary'>Senior Doctor</p>
                <p className=' text-secondary'>{specialised}</p>
                <p><small >{name} Types of bridges may vary, depending upon how they are fabricated and the way they anchor to the adjacent health</small></p>
                <p className=' text-info'>{chamber}</p>
            </div>
        </div>
    );
};

export default Doctor;