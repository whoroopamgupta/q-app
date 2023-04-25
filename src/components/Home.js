import React, { useState } from "react";
import { data } from "../data";
import "../Styles/Home.css";
import { Link } from "react-router-dom";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
};

function Home() {
  const [location, setLocation] = useState("");

  // console.log(location);

  return (
    <section className="section">
      <div className="heading">
        <h2>Choose Location</h2>
      </div>
      <div className="buttons">
        <button className="btn" onClick={() => setLocation("lakshadweep")}>
          Lakshadweep
        </button>
        <button className="btn" onClick={() => setLocation("kashmir")}>
          Kashmir
        </button>
        <button className="btn" onClick={() => setLocation("kerala")}>
          Kerala
        </button>
        <button className="btn" onClick={() => setLocation("sikkim")}>
          Sikkim
        </button>
      </div>

      <div className="profiles">
        {data.map((profile) => {
          return (
            <section key={profile.id} className="profile">
              <h3> {profile.name}</h3>
              <img src={profile.img} alt={profile.name} />
              <p>Gender : {profile.gender}</p>
              <p>Age : {profile.age}</p>
              <p>Location : {profile.location}</p>
              <p>Looking For : {profile.finding} Travel Buddy</p>
              <button className="request-btn">
                <Link to={`/profile/${profile.id}`} style={linkStyle}>
                  See Profile
                </Link>
              </button>
            </section>
          );
        })}
      </div>
    </section>
  );
}

export default Home;
