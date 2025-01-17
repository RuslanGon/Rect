import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const NotFoundPage = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  if (timer === 5) return <Navigate to="/" replace />;

  return (
    <div style={{ textAlign: "center", padding: "40px", color: "#333" }}>
      <h1 style={{ fontSize: "36px" }}>
        Oops! The page you are looking for doesnt exist.
      </h1>
      <h2 style={{ fontSize: "26px" }}>You will be redirected to home in {5 - timer} seconds</h2>
      <Link to="/">Go to Home page</Link>
    </div>
  );
};

export default NotFoundPage;
