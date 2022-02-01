import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/img2.svg';
const Home = () => {
    return (
        <>
            <section id='header' className='d-flex align-items-center'>

                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>

                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
                                    <h1> Hi 👋 i'm <strong className='brand-name'> Om Prakash </strong></h1>
                                    <h2 className='my-3' >
                                        AND  I'M  AN  PROGRAMMER
                                    </h2>
                                    <div className='my-3'>
                                        <NavLink to='/service' className='btn-get-started'> Get Stated </NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img"  >
                                    <img src={web} className='img-fluid animated' alt='home Image' />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </section>


        </>
    );
}

export default Home;


