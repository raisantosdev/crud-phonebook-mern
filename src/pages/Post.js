import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Post() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);

  const addNewNumber = () => {
    Axios.post("http://localhost:8080/add-phone", { name, phone });
  };

  return (
    <div>
      <div className="home__headerLeft">
        <Link to="/"> Home</Link>
        <Link to="/get"> Get</Link>
      </div>

      <div>
        <div className="container">
          <label htmlFor="">Name: </label>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <br />
          <label htmlFor="">Phone: </label>
          <input
            type="number"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <br />
          <br />

          <button onClick={addNewNumber}>Add New Number</button>
        </div>
      </div>
    </div>
  );
}

export default Post;
