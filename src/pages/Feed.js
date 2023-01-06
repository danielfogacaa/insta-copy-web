import React, { useState, useEffect } from "react";

import api from "../services/api";
import io from "socket.io-client";

import "./Feed.css";
import more from "../assests/more.svg";
import like from "../assests/like.svg";
import comment from "../assests/comment.svg";
import send from "../assests/send.svg";

function Feed() {
  const [posts, setPosts] = useState([]);

  const getResponse = async () => {
    const response = await api.get("posts");
    const data = response.data;
    setPosts(data);
  };

  const handleLike = async (id) => {
    api.post(`/posts/${id}/like`);
  };

  const registerToSocket = async () => {
    const socket = io("http://localhost:3333", { transports: ["websocket"] });

    socket.on("post", (newPost) => {
      setPosts((oldState) => {
        if (!oldState.some((elem) => elem._id === newPost._id))
          return [newPost, ...oldState];
        else return [...oldState];
      });
    });

    socket.on("like", (likedPost) => {
      setPosts((oldState) => {
        return oldState.map((post) =>
          post._id === likedPost._id ? likedPost : post
        );
      });
    });
  };

  useEffect(() => {
    registerToSocket();
    getResponse();
  }, []);

  return (
    <section id="post-list">
      {posts.length &&
        posts.map((post) => (
          <article key={post._id}>
            <header>
              <div className="user-info">
                <span>{post.author}</span>
                <span className="place">{post.place}</span>
              </div>
              <img src={more} alt="Mais" />
            </header>
            <img src={`http://localhost:3333/files/${post.image}`} alt="Mais" />
            <footer>
              <div className="actions">
                <button type="button" onClick={() => handleLike(post._id)}>
                  <img src={like} alt="Like" />
                </button>
                <img src={comment} alt="Comentar" />
                <img src={send} alt="Enviar" />
              </div>
              <strong>{`${post.likes} curtidas`}</strong>
              <p>
                {post.description}
                <span>{post.hashtags}</span>
              </p>
            </footer>
          </article>
        ))}
    </section>
  );
}

export default Feed;
