import React, { useState } from "react";
import { useBrandSignUp } from "../../context/BrandSignUpContext";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

export default function BrandSignUp() {
  const [error, setError] = useState("");

  const {
    name,
    setName,
    brandName,
    setBrandName,
    email,
    setEmail,
    password,
    setPassword,
    about,
    setAbout,
  } = useBrandSignUp();

  function handleSubmit(e) {
    e.preventDefault();

    try {
      const user = {
        id: nanoid(20),
        name,
        brandName,
        email,
        password,
        about,
        type: "Brand",
      };
      // Set User In DB //
      // await signUp(user) //
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      {error && (
        <div className="error-con bg-light d-flex align-items-center justify-content-center">
          <div>
            <div className="d-flex gap-2 align-items-center justify-content-center p-3">
              <i className="bi bi-x-circle text-danger fs-5" />
              <span>{error}</span>
            </div>
          </div>
        </div>
      )}
      <div className="w-100 d-flex flex-column gap-4 align-items-center justify-content-center container mt-3">
        <div className="d-flex flex-column align-items-center gap-3 justify-content-center ">
          <h1>Create Your Account</h1>
          <button className="btn btn-dark d-flex gap-2 align-items-center w-100 justify-content-center">
            <i className="bi bi-google" />
            Continue with Google
          </button>
        </div>
        <div className="separator">
          <span>or</span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column gap-3 form-signup"
        >
          <input
            required
            type="text"
            className="form-control w-100"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            type="text"
            className="form-control"
            placeholder="Brand Name"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
          />
          <input
            required
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <select
            required
            defaultValue={about}
            onChange={(e) => setAbout(e.target.value)}
            className="form-select"
          >
            <option value="default" disabled hidden>
              How did you hear about us
            </option>
            <option value="Facebook">Facebook</option>
            <option value="Friend/Colleague">Friend/Colleague</option>
            <option value="Google">Google</option>
            <option value="Youtube">Youtube</option>
            <option value="Instagram">Instagram</option>
          </select>
          <button type="submit" className="btn btn-dark fw-bold py-2">
            Sign Up
          </button>
        </form>
        <p
          style={{
            fontSize: "0.7rem",
          }}
        >
          By signing up, you agree to our <Link to="/terms" children="Terms" />{" "}
          and <Link to="/privacy" children="Privacy Policy" />.
        </p>
        <p>
          Already have an account? <Link to="/login" children="Login." />
        </p>
      </div>
    </>
  );
}
