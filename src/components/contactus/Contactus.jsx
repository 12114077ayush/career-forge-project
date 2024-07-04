// import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
// import Navbar from "../navbar/Navbar"
import './Contactus.scss'

function Contactus() {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_19k2zte', 'template_6wxlbxn', form.current, {
                publicKey: 'qq1PicJXBL2OWy51p',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('SUCCESS');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            )
            ;
        e.target.reset()

    };

    return (
        <div className="contactus">
            <div className="contactuswrapper">
                <motion.div className="contacttext" initial={{ opacity: 0, y: 30 }}
                    whileInView={{
                        opacity: 1, y: 0, transition: {
                            duration: 0.9
                        }
                    }}>
                    <h1 >Have a question?</h1>
                    <p className="firstline">Contact us whenever you have any questions. We are always here for you!</p>
                    <div className="contactonfo">
                        <div className="contactinfotext">
                            <h3>Email</h3>
                            <p>2003ayushchoudhary@gmail.com</p>
                        </div>
                        <div className="contactinfotext">
                            <h3>Phone</h3>
                            <p>+91 7877722737</p>
                        </div>
                        <div className="contactinfotext">
                            <h3>Address</h3>
                            <p>National Institute of Technology Kurukshetra, <br /> Haryana-136119</p>
                        </div>
                    </div>
                </motion.div>
                <div className="contactformwrapper">
                    <form className="contact-form" ref={form} onSubmit={sendEmail}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="user_name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactus