import React from 'react';
import { Link } from 'react-router-dom';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className='banner d-flex justify-content-center align-items-center'>
                <div>
                    <h1 className='text-white text-center'>Core Health And Wellness Center</h1>
                    <p className='text-color '>a concern of Core Health And Wellness Center is the only multi-disciplinary super-specialty tertiary care hospital <br /> in Bangladesh,
                        confidently providing comprehensive health care with the latest medical, surgical and diagnostic facilities. <br /> These services are provided by expert medical professionals, skilled nurses and technologists using state-of-the-art technology.</p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Link to='/about'>
                            <button type="button" class="btn btn-outline-info px-5">About Us</button>
                        </Link>

                    </div>

                </div>

            </div>

            <section className='container mt-5'>
                <div className='text-center mb-5 pb-4 '>
                    <h1>Welcome to Health & Wellness
                    </h1>
                    <p><small className='text-secondary'>Highest level of service you can find</small></p>
                </div>

                <div className='row shadow-lg'>
                    <div className='col-lg-6 col-12'>
                        <img className='img-fluid' src="https://image.freepik.com/free-photo/cheerful-male-doctor-white-gown-portrait_53876-108641.jpg" alt="" />
                    </div>
                    <div className='col-lg-6 col-12'>
                        <p className='text-secondary'>Our focus is to work for the well being and helping you to achieve optimaal health and esthetics. We provide state-of-the-art Health care in a comfortable way.</p>
                        <p className='fw-bold'><i class="fas fa-hospital mx-3"></i>Our Missions</p>
                        <p><small className='ps-5' >Has provided a high class facility for the treatment</small></p>
                        <p className='fw-bold'><i class="fas fa-stethoscope mx-3"></i>Professionals in our Center</p>
                        <p><small className='ps-5' >Has provided a high class facilty for the treatment</small></p>
                        <Link to='/about'>
                            <button type="button" class="btn btn-dark">More About Us</button>
                        </Link>

                    </div>

                </div>
            </section>
            <section className='container'>
                <Services></Services>
            </section>
            <section className='container mt-5 pt-5 shadow-lg'>
                <div className='text-center mb-5 pb-4 '>
                    <h1>Meet Our Team
                    </h1>
                    <p><small className='text-secondary'>Best specialists in one place</small></p>
                </div>
                <Doctors></Doctors>
            </section>
        </div>


    );
};

export default Home;