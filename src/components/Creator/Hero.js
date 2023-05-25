import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "../../context/SignUpContext";
import { usePostReq } from "../../hooks/usePostReq";

export default function Hero() {
  const nameRef = useRef();
  const navigate = useNavigate();
  const { setUsername } = useSignUp();
  const { loading, error, execute, setError } = usePostReq("/username");

  async function handleSubmit(e) {
    e.preventDefault();
    const name = nameRef.current.value;
    try {
      const response = await execute({
        username: name,
      });
      if (response.already_exist) {
        setError("Username not available");
        return setTimeout(() => setError(""), 2000);
      }
    } catch {
      setError("Something went wrong");
      return setTimeout(() => setError(""), 2000);
    }

    setUsername(name);
    navigate(`/creator-signup/${name}`);
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
      <div
        id="create-influencers"
        className="px-3 py-5 text-center hero-container creator-hero"
      >
        <h1 className="fw-bold px-4 fs-1">BACKEND v2.0</h1>
        <p className="mb-4">
          The simple way to sell, manage, and get paid for your Instagram and
          YouTube brand deals
        </p>
        <form onSubmit={handleSubmit} className="container">
          <div className="d-flex">
            <div>websitename/</div>
            <div>
              <input
                required
                ref={nameRef}
                type="text"
                placeholder="yourname"
              />
            </div>
          </div>
          <button type="submit">
            {loading ? (
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Claim"
            )}
          </button>
        </form>
      </div>{" "}
    </>
  );
}
