import img from "../assets/img/CodePen-404-Page.gif";
import { useNavigate } from "react-router-dom";


const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div class="error-container">
      <img  class= "error-img" src={img} alt="error" />
      <button  class= "error-button" onClick={() => navigate("/")}>
        Go to Home Page
      </button>
    </div>
  );
};

export default NotFound;
