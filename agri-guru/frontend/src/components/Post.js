import React, { useState } from "react";
import "./css/Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowUp, faArrowDown, faExchangeAlt, faCommentAlt, faShareAlt,faTimes, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-modal/styles.css";
import Modal from "react-responsive-modal";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

function Post() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeIcon = <FontAwesomeIcon icon={faTimes} />;
  return (
    <div className="post">
      <div className="post_info">
        <FontAwesomeIcon icon={faUser} size="2x" />
        <h4>User Name</h4>
        <small>TimeStamp</small>
      </div>

      <div className="post_body">
        <p>This is test question</p>
        <button onClick = {() => setIsModalOpen(true)}
      className="post_btnAnswer">Answer</button>
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
          <div className="modal_question">
            <h1>This is testing Question</h1>
            <p>Asked by {""}</p><span>Username</span>{" "}on{" "}timestamp
          </div>
          <div className="modal_answer">
            <ReactQuill placeholder="Entre the answer"/>
          </div>
          <div className="modal__buttons">
            <button className="cancel" onClick={() => setIsModalOpen(false)}>Cancel</button>
            <button type="submit" className="add" >Add Answer</button>
          </div>
        </Modal>
      </div>

      <div className="post_footer">
        <div className="post_footerAction">
          <FontAwesomeIcon icon={faArrowUp} size="lg" className="post_icon" />
          <FontAwesomeIcon icon={faArrowDown} size="lg" className="post_icon" />
        </div>
        <FontAwesomeIcon icon={faExchangeAlt} size="lg" className="post_icon" />
        <FontAwesomeIcon icon={faCommentAlt} size="lg" className="post_icon" />
        <div className="post_footerleft">
          <FontAwesomeIcon icon={faShareAlt} size="lg" className="post_icon" />
          <FontAwesomeIcon icon={faEllipsisH} size="lg" className="post_icon" />
        </div>
      </div>
      <p 
        style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0",
        }}
        >
        1 Answer</p>
      <div 
        style={{
          margin: "5px 0px 0px 0px ",
          padding: "5px 0px 0px 20px",
          borderTop: "1px solid lightgray",
        }}
        
        className="post_answer">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: "10px 5px",
            borderTop: "1px solid lightgray",
          }}
          className="post-answer-container">
          <div 
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#888",
            }}
            className="post-answered">
            <FontAwesomeIcon icon={faUser} size="2x" />
            <div 
              style={{
                margin: "0px 10px",
              }}
              className="post-info">
              <p>Username</p>
           <span>Timestamp</span>
            </div>
          </div>
          <div className="post-answer">This is the test answer</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
