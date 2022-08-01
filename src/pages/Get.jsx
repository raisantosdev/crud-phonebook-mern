import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./Get.css";

function Get() {
  const [phonebook, setPhonebook] = useState([]);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();

  const refreshGetPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    Axios.get("http://localhost:8080/get-phone").then((res) => {
      setPhonebook(res.data.data.phoneNumbers);
    });
  }, []);

  const updatePhone = (id, passName) => {
    Axios.patch(`http://localhost:8080/update-phone/${id}`, { name, phone });
    console.log(`http://localhost:8080/update-phone/${id}`, { name, phone });
  };

  const deletePhone = (id) => {
    Axios.delete(`http://localhost:8080/delete-phone/${id}`);
  };

  return (
    <div>
      <div className="header">
        <Link to="/"> Home</Link>
        <Link to="/post"> Post</Link>
      </div>
      <div className="get__page">
        <div className="container">
          <h1>PhoneBook List</h1>
          {phonebook.map((val, key) => {
            let nameToUpdate = val.name;
            return (
              <div key={key} className="phone">
                <h1>{val.name}</h1>
                <h1>{val.phone}</h1>
                <input
                  className="input"
                  type="text"
                  placeholder="update Name..."
                  onChange={(e) => {
                    setName(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <input
                  className="input"
                  type="number"
                  placeholder="update Phone..."
                  onChange={(e) => {
                    setPhone(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <button
                  className="update-btn"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Tem certeza que deseja atualizar esse registro?"
                      )
                    ) {
                      updatePhone(val._id, nameToUpdate);
                      refreshGetPage();
                    }
                  }}
                >
                  Update
                </button>
                <button
                  className="delete-btn"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Tem certeza que deseja apagar esse registro?"
                      )
                    ) {
                      deletePhone(val._id);
                      refreshGetPage();
                    }
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Get;
