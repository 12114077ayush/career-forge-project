/* eslint-disable no-unused-vars */
import React from "react";
import Modal from "react-modal";
import Chatbot from "./Chatbot";
import PropTypes from "prop-types";
Modal.setAppElement("#root"); // Bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const ChatModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Chatbot Modal"
      style={{
        overlay: {
          backgroundColor: "transparent",
        },
        content: {
          width: "300px",
          height: "400px",
          marginLeft: "65.5vw",
          marginTop: "140px",
          padding: "0",
          border: "none",
          borderRadius: "10px",
          overflow: "hidden",
        },
      }}
    >
      <Chatbot />
    </Modal>
  );
};

ChatModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default ChatModal;
