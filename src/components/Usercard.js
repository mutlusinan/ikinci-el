import Avatar from "../constants/Avatar.js";
import React from "react";

function Usercard() {
  return (
    <>
      <div className="userCard">
        <span className="userAvatar">
          <Avatar />
        </span>
        <span className="userNameDisplay">
          {JSON.parse(localStorage.getItem("userInfo"))?.user?.email}
        </span>
      </div>
    </>
  );
}

export default Usercard;
