
import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/hero-img.png';
const About = () => {
    return (
        <>
            <section id='header' className='d-flex align-items-center'>

                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>

                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
                                    <h1> Welcome to  <strong className='brand-name'>About page </strong></h1>
                                    <p className='my-3' >
                                        ❝ My name is Om prakash pattjoshi.<br /> i'm a MERN Stack Developer. <br />
                                        I describe myself as a passionated developer who loves❤️ coding and cofee☕ .❞
                                    </p>
                                    <div className='my-3'>
                                        <NavLink to='/contact' className='btn-get-started'> Contact Me </NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img"  >
                                    <img src={web} className='img-fluid animated' alt='About Image' />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>

    );
}

export default About;
