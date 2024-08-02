// import React from 'react'
import "./Homepage.scss";
import { motion } from "framer-motion";
import Carousel from "../carousel/Carousel";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ChatModal from "../../chatbot/Chatmodal.jsx";
import homebg from "../../assets/homebg.jpg";
import botimg from "../../assets/bot.png";
function Homepage() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <div className="home">
      <div className="homewrapper">
        <div className="homeimagewrap">
          <img src={homebg} className="carrer" alt="" />
        </div>
        <motion.div className="textbox">
          <motion.div
            className="text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.9,
              },
            }}
          >
            <h1 className="maintext">Career Forge</h1>
            <p className="subtext">
              Crafting Careers, One Step at a Time with Career Forge.
            </p>
          </motion.div>
          <button className="learnbtn">
            <NavLink to="about">Learn more </NavLink>
          </button>
        </motion.div>
      </div>
      <motion.div
        className="Carousel-text"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
          },
        }}
      >
        <Carousel className="Carouselbody" />
      </motion.div>
      <img
        className="botavatar"
        src={botimg}
        alt="Chat Icon"
        onClick={toggleChat}
      />
      <ChatModal isOpen={isChatOpen} onRequestClose={toggleChat} />
    </div>
  );
}

export default Homepage;
