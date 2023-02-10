import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./Info";
import PutPost from "./PutPost";
import { useState } from "react";

function Routing() {
    const [posts, setPosts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App posts={posts} setPosts={setPosts} isLoaded={isLoaded} setIsLoaded={setIsLoaded} />} />
            <Route path={"/info/:id"} element={<Info posts={posts} setPosts={setPosts} />} />
            <Route path={"/update/:id"} element={<PutPost posts={posts} setPosts={setPosts} />} />
        </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Routing />
    </React.StrictMode>
);
