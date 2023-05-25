import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/imgs/check.png";
import { useSignUp } from "../../context/SignUpContext";

export default function WelcomePage() {
  const { username } = useSignUp();
  const navigate = useNavigate();

  return (
    <div className="width-60-form mb-4 d-flex flex-column gap-1 align-items-center">
      <h1 className="text-center">Sign Up Complete</h1>
      <img
        src={img}
        alt="Check"
        style={{
          width: "300px",
          aspectRatio: "1/1",
        }}
      />
      <button
        type="button"
        onClick={() => navigate(`/${username}`)}
        className="btn btn-dark w-100 text-center"
      >
        Go to Profile
      </button>
    </div>
  );
}
