import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="container text-center mb-5">
      <div className="row p-5">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="fs-2 mb-3">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, EFTs,
          bonds, and more.
        </p>
        <button
          onClick={handleSignup}
          className="mx-auto mt-3 w-25 p-2 btn  fs-5 cta-btn"
          style={{
            backgroundColor: "#387ED8",
            color: "white",
            marginBottom: "4rem",
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
