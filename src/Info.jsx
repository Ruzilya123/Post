
import React, { useState, useEffect } from "react";
import './style.css'
import { useParams, Link } from "react-router-dom";

function Info({ posts }) {
  const { id } = useParams();
  const [info, setInfo] = useState([]);

  const gettingAPI = async (url) => {
    return fetch(url).then((response) => response.json());
  }

  const onInfo = async (id) => {
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-type": "application/json;"
        },
    };
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, requestOptions)
    const data = await response.json();
    console.log(data);
}

  const fetchData = async () => {
    await gettingAPI(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then((data) => {
      setInfo(data);
    });
  }

  function getInfo() {
    onInfo(id);
    return info.map((item) => (
      <div key={item.id}>
        <h3>{item.name}</h3>
        <p>{item.email}</p>
        <p>{item.body}</p>
      </div>
    ))
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  const post = posts.find((post) => post.id === Number(id));

  return (
    <div className="info">
      <Link to='/'>Back</Link>
      <h3 style={{
        display: "flex",
        justifyContent: "center",
      }}>{post.title}</h3>
      <p>{post.body}</p>
      {getInfo()}
    </div>
  );
}

export default Info;

