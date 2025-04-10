import React from "react";
import basestyle from "../Base.module.css";
import profile from "../Profile/Profile.module.css";

const Profile = ({ setUserState, username }) => {
  return (
    <div className={profile.profile}>
   
      <h1 style={{ color: "white", marginTop: "40px" }}>Welcome {username} !!</h1>
      <h2 style={{ color: "#E1EEBC" }}>Thank you for visiting this site</h2>

      <button
        className={basestyle.button_common}
        onClick={() => setUserState({})}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
