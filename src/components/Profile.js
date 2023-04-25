import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
};

function Profile() {
  const profile = {
    id: 1,
    name: "Jayadeva Bakshi",
    img: "https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.jpg?s=170667a&w=0&k=20&c=RnDFi5oZnuJU_IlxCkn7imk9h7HOH7p6Z_FjC4yvtXc=",
    location: "Lakshadweep",
    gender: "Male",
    age: 27,
    finding: "Male",
  };

  return (
    <div className="user-profiles">
      <section key={profile.id} className="profile">
        <h3> Jayadeva Bakshi</h3>
        <img src={profile.img} alt={profile.name} />
        <p>Gender : {profile.gender}</p>
        <p>Age : {profile.age}</p>
        <p>Location : {profile.location}</p>
        <p>Looking For : {profile.finding} Travel Buddy</p>
        <button className="request-btn">Edit Profile</button>
      </section>
    </div>
  );
}

export default Profile;
