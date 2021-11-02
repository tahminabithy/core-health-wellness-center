import React from 'react';

const About = () => {
    return (
        <div>
            {/* slider */}
            <section>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img style={{ height: '650px' }} src="https://media.istockphoto.com/photos/vigilantly-monitoring-his-patients-vitals-picture-id592647720?b=1&k=20&m=592647720&s=170667a&w=0&h=QrmU3JvrT95eD8TS1xEJY6e2OloGEfshU-5KqPgchcQ=" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </section>
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
                        <button type="button" class="btn btn-dark">More About Us</button>
                    </div>

                </div>
            </section>

            <section className='container mt-5 shadow-lg'>
                <div className='text-center mb-5 pb-4 '>
                    <p className='fs-4'>Our Happy Clients
                    </p>
                    <p><small className='text-secondary'>What people say about us</small></p>
                    <p className='text-secondary' >" We are very happy and satisfied by the services provided by <br /> the Core Health And Wellness Center .They are provide best service in less cost "</p>
                    <p><small className='text-primary'>Jenny walker</small></p>
                </div>
            </section>
        </div>
    );
};

export default About;