//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data.js";
// import data 

const PostsPage = () => {
  // set up state for your data
const [stateValue, setStateValue] = useState(dummyData);

  // const [state] = useState(dummyData);
  // console.log(state);

  return (
    <div className="posts-container-wrapper">
      {stateValue.map(item => {
        return <Post post={item} key={post.id} />;
      })}

      {/* map through data here to return a Post and pass data as props to Post */}

    </div>
  );
};

export default PostsPage;
