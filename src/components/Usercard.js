import Avatar from "../constants/Avatar.js";
import { useNavigate } from "react-router-dom";
import React from "react";

function Usercard() {
  const navigate = useNavigate();

  return (
    <>
      <div className="userCard">
        <span className="userAvatar">
          <Avatar />
        </span>
        <span className="userNameDisplay">
          {JSON.parse(localStorage.getItem("userInfo"))?.user?.email}
        </span>
        <button
          onClick={() => {
            localStorage.removeItem("userInfo");
            navigate("/", { replace: false });
          }}
        >
          Çıkış Yap
        </button>
      </div>
    </>
  );
}

export default Usercard;
