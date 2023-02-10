import React, {useState, useEffect} from "react";
import Posts from "./Posts";
import AddPost from "./AddPost";

const gettingAPI = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function App({posts, setPosts, isLoaded, setIsLoaded}) {
    const [loading, setLoading] = useState(false);
    

    const fetchData = async () => {
        setLoading(true);
        setTimeout(async () => {
            await gettingAPI("https://jsonplaceholder.typicode.com/posts").then((data) => {
                setPosts(data);
                setIsLoaded(true);
                setLoading(false);
                });
        }, 2000);
    }

    const onDelete = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE"
        })
            .then((response) => {
              if (response.status !== 200) {
                return;
              } else {
                setPosts(posts.filter((post) => post.id !== id));
              }
            })
            .catch((err) => console.log(err));
    }

    const onAdd = async (title, body) => {
        await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                body: body,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        })
            .then((response) => {
              if (response.status !== 201) {
                return;
              } else {
                return response.json();
              }
            })
            .then((data) => {
              setPosts((posts) => [...posts, data])
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        if(!isLoaded) {
            fetchData();
        }
    }, []);

    return (
        <div className="App">
            <AddPost onAdd={onAdd} />
            {loading 
                ? 
                <h1>Loading...</h1> 
                : 
                <div>
                    {posts.map((post) => (
                        <Posts
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            body={post.body}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            }
        </div>
    );
}

export default App;