import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (seconds == 0) {
    navigate("/");
  }

  return (
    <div>
      <div className="not-found-container">
        <h1 className="not-found-heading">Oops! Page not found.</h1>
        <p className="not-found-text">
          You will be returned to Login page in {seconds} seconds
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
