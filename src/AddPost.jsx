import React from "react";
import MyButton from "./button/MyButton";
import MyInput from "./input/MyInput";
import './style.css'

function AddPost({onAdd}) {

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.title.value, e.target.body.value);
    e.target.title.value = "";
    e.target.body.value = "";
  };

  return (
    <div className="add-post">
      <form onSubmit={handleOnSubmit}>
        <MyInput
          type="text"
          name="title"
          placeholder="Title"
        />
        <MyInput
          type="text"
          name="body"
          placeholder="Body"
        />
        <MyButton type="submit">Add Post</MyButton>
      </form>
    </div>
  );
}

export default AddPost;