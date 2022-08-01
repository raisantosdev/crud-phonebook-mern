import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./Post.css";

function Post() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);

  const addNewNumber = () => {
    Axios.post("http://localhost:8080/add-phone", { name, phone });
  };

  const refreshPostPage = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className="header">
        <Link to="/"> Home</Link>
        <Link to="/get"> Get</Link>
      </div>

      <div className="post__page">
        <h3 className="title">REGISTRO DE TELEFONE</h3>
        <div className="container">
          <div className="input__line">
            <label htmlFor="">Name: </label>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="input__line">
            <label htmlFor="">Telefone: </label>
            <input
              type="number"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>

          <button
            onClick={() => {
              addNewNumber();
              refreshPostPage();
            }}
          >
            Add New Number
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
