import React from 'react';
import './about.css'
import outlineCat from '../../assets/outlineCat.png'
import {IoMdSchool} from 'react-icons/io'
import {DiJava} from 'react-icons/di'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={outlineCat} alt="image"/>
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <a href='https://www.iths.se/' target='_blank'><article className='about__card'>
                            <IoMdSchool className='about__icon'></IoMdSchool>
                            <h5>Studying @</h5>
                            <small>IT-Högskolan</small>
                        </article>
                        </a>
                        <p>Hello, I'm a swedish java developer currently studying at IT-Högskolan in Stockholm.</p>

                        <a href='#contact' className='btn btn-primary'>Let's Talk</a>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About