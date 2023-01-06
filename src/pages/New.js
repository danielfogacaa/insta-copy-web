import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "./New.css";

function New() {
  const [state, setState] = useState({
    image: null,
    author: "",
    place: "",
    description: "",
    hashtags: ""
  });
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setState((oldState) => ({
      ...oldState,
      image: e.target.files[0]
    }));
  };

  const handleChange = (e) => {
    setState((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("image", state.image);
    data.append("author", state.author);
    data.append("place", state.place);
    data.append("description", state.description);
    data.append("hashtags", state.hashtags);

    await api.post("posts", data);

    navigate("/");
  };

  return (
    <form id="new-post" onSubmit={handleSubmit}>
      <input type="file" onChange={handleImageChange} />
      <input
        type="text"
        onChange={handleChange}
        value={state.author}
        name="author"
        placeholder="Autor do post"
      />
      <input
        type="text"
        onChange={handleChange}
        value={state.place}
        name="place"
        placeholder="Local do post"
      />
      <input
        type="text"
        onChange={handleChange}
        value={state.description}
        name="description"
        placeholder="Descrição do post"
      />
      <input
        type="text"
        onChange={handleChange}
        value={state.hashtags}
        name="hashtags"
        placeholder="Hashtags do post"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default New;
