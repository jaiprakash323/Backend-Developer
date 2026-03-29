import Form from "../components/Form";
import { Link } from "react-router-dom"; 

function Login() {
  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Login Page</h2>
      <Form route="/api/token/" method="login" />
      
      {/* Add a button/link to register page */}
      <p style={{ marginTop: "1rem" }}>
        Don't have an account?{" "}
        <Link to="/register">
          <button style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
            Register
          </button>
        </Link>
      </p>
    </div>
  );
}

export default Login;