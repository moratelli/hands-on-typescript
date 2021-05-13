import React, { useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { USER_TYPE } from "./store/UserReducer";
import UserDisplay from "./UserDisplay";
import { POST_TYPE } from "./store/PostReducer";
import PostDisplay from "./PostDisplay";

function App() {
  const [userId, setUserId] = useState(0);
  const [postId, setPostId] = useState(0);
  const dispatch = useDispatch();

  const onChangedUserId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const userIdFromInput = e.target.value ? Number(e.target.value) : 0;
    console.log("userId", userIdFromInput);
    setUserId(userIdFromInput);

    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (usersResponse.ok) {
      const users = await usersResponse.json();
      console.log("users", users);
      const usr = users.find(
        (item: any) => item && item.id === userIdFromInput
      );
      console.log("usr", usr);
      dispatch({
        type: USER_TYPE,
        payload: {
          id: usr.id,
          username: usr.username,
          email: usr.email,
          city: usr.address.city,
        },
      });
    }
  };

  const onChangePostId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const postIdFromInput = e.target.value ? Number(e.target.value) : 0;
    setPostId(postIdFromInput);

    const postResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postIdFromInput}`
    );

    if (postResponse.ok) {
      const post = await postResponse.json();
      console.log("post", post);
      dispatch({
        type: POST_TYPE,
        payload: {
          id: post.id,
          title: post.title,
          body: post.body,
        },
      });
    }
  };

  return (
    <>
      <div className="App">
        <label>User ID</label>
        <input value={userId} onChange={onChangedUserId} />
      </div>
      <UserDisplay />
      <br />
      <div style={{ width: "300px" }}>
        <div className="App">
          <label>post id</label>
          <input value={postId} onChange={onChangePostId} />
        </div>
        <PostDisplay />
      </div>
    </>
  );
}

export default App;
