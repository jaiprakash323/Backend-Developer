import Form from "../components/Form";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Register Page</h2>
      <Form route="/api/user/register/" method="register" />
      
      {/* Link back to login */}
      <p style={{ marginTop: "1rem" }}>
        Already have an account?{" "}
        <Link to="/login">
          <button style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
            Login
          </button>
        </Link>
      </p>
    </div>
  );
}

export default Register;