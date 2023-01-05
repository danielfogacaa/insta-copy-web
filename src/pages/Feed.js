import React, { useState, useEffect } from "react";

import api from "../services/api";

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
    return data;
  };

  useEffect(() => {
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
                <img src={like} alt="Like" />
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
