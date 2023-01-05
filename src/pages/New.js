import React, { Component } from "react";
import "./New.css";

class New extends Component {
  state = {
    image: null,
    author: "",
    place: "",
    description: "",
    hashtags: ""
  };

  handleImageChange = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form id="new-post" onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.handleImageChange} />
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.author}
          name="author"
          placeholder="Autor do post"
        />
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.place}
          name="place"
          placeholder="Local do post"
        />
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.description}
          name="description"
          placeholder="Descrição do post"
        />
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.hashtags}
          name="hashtags"
          placeholder="Hashtags do post"
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default New;
