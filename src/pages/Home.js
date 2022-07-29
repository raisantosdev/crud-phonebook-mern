import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/post"> Post</Link>
          <Link to="/get"> Get</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
