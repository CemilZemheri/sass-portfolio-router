import img from "../assets/img/CodePen-404-Page.gif";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div style={{display:"flex",flexDirection:"column"}}class="error-container">
      <img style={{ width: "100vw", height: "93vh" }} src={img} alt="error" />
      <button
        style={{
          backgroundColor: "green",
          padding: "1rem",
          justifyContent: "center",
          alignItems:"center",
          height: "7vh"
        }}
        onClick={() => navigate("/")}
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default NotFound;
