// import React from 'react'
import "./Homepage.scss"
import { motion } from 'framer-motion'
import Carousel from "../carousel/Carousel"
import { NavLink } from "react-router-dom"
function Homepage() {
    return (
        <div className="home">
            <div className="homewrapper">
                <div className="homeimagewrap">
                    <img src="src/assets/homebg.jpg" className="carrer" alt="" />
                </div>
                <motion.div className="textbox" >
                    <motion.div className="text" initial={{ opacity: 0, y: 30 }}
                        whileInView={{
                            opacity: 1, y: 0, transition: {
                                duration: 0.9
                            }
                        }}>
                        <h1 className="maintext">Career Forge</h1>
                        <p className="subtext">Crafting Careers, One Step at a Time with Career Forge.</p>
                    </motion.div>
                    <button className="learnbtn"><NavLink to='about'>Learn more </NavLink></button>
                </motion.div>
            </div>
            <motion.div className="Carousel-text" initial={{ opacity: 0, y: 0 }}
                whileInView={{
                    opacity: 1, y: 0, transition: {
                        duration: 0.6
                    }
                }}>
                <Carousel className='Carouselbody' />
            </motion.div>

        </div>

    )
}

export default Homepage