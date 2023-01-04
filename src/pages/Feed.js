import React, { Component } from "react";

import "./Feed.css";
import more from "../assests/more.svg";
import like from "../assests/like.svg";
import comment from "../assests/comment.svg";
import send from "../assests/send.svg";

class Feed extends Component {
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>Daniel Fogaça</span>
              <span className="place">Cerquilho</span>
            </div>
            <img src={more} alt="Mais" />
          </header>
          <img src="http://localhost:3333/files/galax.jpg" alt="Mais" />
          <footer>
            <div className="actions">
              <img src={like} alt="Like" />
              <img src={comment} alt="Comentar" />
              <img src={send} alt="Enviar" />
            </div>
            <strong>900 curtidas</strong>
            <p>
              Um post muito massa
              <span>#react #omnistack #top</span>
            </p>
          </footer>
        </article>
        <article>
          <header>
            <div className="user-info">
              <span>Daniel Fogaça</span>
              <span className="place">Cerquilho</span>
            </div>
            <img src={more} alt="Mais" />
          </header>
          <img src="http://localhost:3333/files/galax.jpg" alt="Mais" />
          <footer>
            <div className="actions">
              <img src={like} alt="Like" />
              <img src={comment} alt="Comentar" />
              <img src={send} alt="Enviar" />
            </div>
            <strong>900 curtidas</strong>
            <p>
              Um post muito massa
              <span>#react #omnistack #top</span>
            </p>
          </footer>
        </article>
      </section>
    );
  }
}

export default Feed;
