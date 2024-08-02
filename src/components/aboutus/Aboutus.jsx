import "./Aboutus.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import ChatModal from "../../chatbot/Chatmodal.jsx";
import botimg from "../../assets/bot.png";
function Aboutus() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <div className="aboutus">
      <div className="aboutwrapper">
        <div className="aboutimgswrapper">
          <img
            src="https://calista6784.hocoos.com/_ipx/f_webp,q_90,s_1900x237/https://img2.hocoos.com/cache/img-pack/404/w-1900/h-237/ww-1900/wh-237/img-pack/404/dtfmjgujklk.jpg"
            className="aboutimg"
            alt=""
          />
        </div>
        <motion.div
          className="maintextbox"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.9,
            },
          }}
        >
          <p className="firstline">
            Forge ahead in your career journey with Career Forge as your trusted
            companion.
          </p>
          <h1 className="firsthead">
            Becoming A Career Strategist: All You Need To Know
          </h1>
          <p className="secondline">
            Welcome to Career Forge, your ultimate companion on the journey to
            professional success. At Career Forge, we understand that navigating
            the complexities of the job market can be daunting, especially for
            college students stepping into the world of careers. That is why we
            are here to guide you every step of the way. Our comprehensive
            platform offers a range of facilities tailored to meet your needs,
            including a user-friendly resume builder to help you craft standout
            resumes that showcase your skills and experiences. Our chatbot
            provides a personalized space for you to discuss companies,
            placements, and career-related queries anytime, anywhere. Explore
            placement statistics and industry roadmaps to gain insights into
            trends and opportunities, empowering you to make informed decisions
            about your future. With Career Forge, your journey to professional
            success starts.
          </p>
        </motion.div>
        <img
          className="botavatar"
          src={botimg}
          alt="Chat Icon"
          onClick={toggleChat}
        />
        <ChatModal
          isOpen={isChatOpen}
          onRequestClose={toggleChat}
          style={{ zIndex: 5 }}
        />
      </div>
    </div>
  );
}

export default Aboutus;
