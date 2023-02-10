import React from "react";
import MyButton from "./button/MyButton";
import MyInput from "./input/MyInput";
import { useParams, Link } from "react-router-dom";

function PutPost({posts, setPosts}) {

  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-type": "application/json;"
      },
      body: JSON.stringify({title: e.target.title.value, body: e.target.body.value})
    };
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, requestOptions)
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setPosts(posts.map((post) => {
          if (post.id === Number(id)) {
            return {...post, title: e.target.title.value, body: e.target.body.value};
          } else {
            return post;
          }
        }))
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Link to='/'>Back</Link>
        <MyInput type="text" name="title" placeholder="Title" />
        <MyInput type="text" name="body" placeholder="Body" />
        <MyButton type="submit">Update Post</MyButton>
      </form>
    </div>
  );
}

export default PutPost;