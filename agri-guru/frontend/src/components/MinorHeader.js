import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faWindowMaximize,
  faClipboardCheck,
  faUserFriends,
  faBell,
  faMagnifyingGlass,
  faUser,
  faTimes,
  faUserCircle,
  faUsers,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "react-responsive-modal/styles.css";
import Modal from "react-responsive-modal";
import "./css/MinorHeader.css";
import axios from "axios";

function MinorHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");
  const closeIcon = <FontAwesomeIcon icon={faTimes} />;

  const handleSubmit = async () => {
    console.log("Button clicked");
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        questionName: question,
        questionUrl: inputUrl,
      };

      try {
        console.log("Submitting data:", body);
        const res = await axios.post("/api/questions", body, config);
        console.log("Response:", res.data);
        alert(res.data.message);

        // Reset form fields and close modal after successful submission
        setQuestion("");
        setInputUrl("");
        setIsModalOpen(false);
      } catch (error) {
        console.error("Error in adding question:", error);
        alert("Error in adding question");
      }
    } else {
      alert("Please enter a question.");
    }
  };

  return (
    <div className="mHeader">
      <div className="mHeader-content">
        <div className="mHeader-logo">
          <img
            src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
            alt="logo"
          />
        </div>

        <div className="mHeader-icons">
          <div className="mHeader-icon">
            <FontAwesomeIcon icon={faHouse} />
          </div>
          <div className="mHeader-icon">
            <FontAwesomeIcon icon={faWindowMaximize} />
          </div>
          <div className="mHeader-icon">
            <FontAwesomeIcon icon={faClipboardCheck} />
          </div>
          <div className="mHeader-icon">
            <FontAwesomeIcon icon={faUserFriends} />
          </div>
          <div className="mHeader-icon">
            <FontAwesomeIcon icon={faBell} />
          </div>
        </div>

        <div className="mHeader-input">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="Search" />
        </div>

        <div className="mHeader-Rem">
          <FontAwesomeIcon icon={faUser} size="2x" />
        </div>

        <div className="button">
          <button className="add-question-button" onClick={() => setIsModalOpen(true)}>
            Add Question
          </button>
        </div>

        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          closeIcon={closeIcon}
          closeOnEsc
          center
          closeOnOverlayClick={false}
          styles={{
            overlay: {
              height: "auto",
            },
          }}
        >
          <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>

          <div className="modal__info">
            <FontAwesomeIcon icon={faUserCircle} className="avatar" size="2x" />
            <div className="modal__scope">
              <FontAwesomeIcon icon={faUsers} />
              <p>Public</p>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>

          <div className="modal__Field">
            <input
              onChange={(e) => setQuestion(e.target.value)}
              type="text"
              placeholder="Start your question with 'What', 'How', 'Why', etc."
              value={question}
            />
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              style={{
                margin: "5px 0",
                border: "1px solid lightgray",
                padding: "10px",
                outline: "2px solid #000",
              }}
              placeholder="Optional: include a link that gives context"
            />
            {inputUrl !== "" && (
              <img
                style={{
                  height: "40vh",
                  objectFit: "contain",
                }}
                src={inputUrl}
                alt="displayimage"
              />
            )}
          </div>

          <div className="modal__buttons">
            <button className="cancel" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button onClick={handleSubmit} type="submit" className="add">
              Add Question
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default MinorHeader;
