import React from "react";
import MinorBox from "./MinorBox";
import "./css/Feed.css";
import Post from "./Post";

function Feed()  {
  return (    
  <div className="feed">
    <MinorBox />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
  </div>
  );
}

export default Feed;