import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "40px", color: "#333" }}>
      <h1 style={{ fontSize: "36px" }}> Oops! The page you are looking for doesnt exist.</h1>
      <Link to="/">Go to Home page</Link>
    </div>
  );
};

export default NotFoundPage;
