/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Chatbot.scss";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

const VITE_API_KEY = "AIzaSyDafLklWkZ_ - Rmw6AE6ec7SLNJmh - k2maM";
const genAI = new GoogleGenerativeAI(VITE_API_KEY);

const Chatbot = () => {
  console.log(import.meta.env.VITE_API_KEY);

  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hi! I am career bot",
      sender: "Gemini",
      direction: "incoming",
    },
  ]);

  const handleSend = async (message) => {
    console.log(message);
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setTyping(true);

    const foundInDatabase = await processfromDatabase(newMessage);

    if (!foundInDatabase) {
      await processMessageToGemini(newMessage);
    }

    setTyping(false);
  };

  async function processfromDatabase(newMessage) {
    const lowercase = newMessage.message.toLowerCase();
    const predefinedResponses = {
      "resume builder":
        "Our Resume Builder will help you create a perfect resume step by step. You can start building your resume under the 'Services' section.",
      "career guide":
        "Our Career Guide will help you navigate your career path effectively. Check the 'Guides' section for more information.",
      "placement statistics":
        "Our Placement Statistics section provides detailed information about past placements. Visit the 'Statistics' section to learn more.",
      "interview probes":
        "Our Interview Probes section contains common interview questions and tips. Explore the 'Interview' section for more insights.",
      about:
        "We are dedicated to helping you build your career. Visit the 'About Us' section to learn more.",
      "contact us":
        "You can reach out to us via the 'Contact Us' section for any inquiries or support.",
      service:
        "Career Forge provides the following services: Resume Builder, Placement Statistics, Career Guide and Interview Probes",
    };

    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowercase.includes(key)) {
        const botMessage = {
          message: response,
          sender: "bot",
          direction: "incoming",
        };

        await new Promise((resolve) => setTimeout(resolve, 1500));

        setMessages((prevMessages) => [...prevMessages, botMessage]);
        return true;
      }
    }

    return false;
  }

  async function processMessageToGemini(chatMessage) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = chatMessage.message;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        message: text,
        sender: "Gemini",
        direction: "incoming",
      },
    ]);
  }

  return (
    <div style={{ height: "400px", width: "300px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList
            typingIndicator={
              typing ? <TypingIndicator content="Bot is typing" /> : null
            }
          >
            {messages.map((message, i) => (
              <Message key={i} model={message} />
            ))}
          </MessageList>
          <MessageInput
            placeholder="Type Here!!!"
            onSend={handleSend}
            autoFocus
            attachDisabled
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default Chatbot;
