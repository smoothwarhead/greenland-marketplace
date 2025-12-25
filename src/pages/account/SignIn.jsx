import { Link, useNavigate } from "react-router-dom";
import "./account.scss";
import { agentLoginData, agentRegisterData } from "../../utils/data";
import FormInput from "../../components/forms/form-input/FormInput";
import { useState } from "react";
import Apple from "../../assets/logos/apple-logo.png";
import Google from "../../assets/logos/Google__G__logo.svg.png";
import Twitter from "../../assets/logos/x-logo.png";
import { useAuth } from "../../context/AuthContext";

const SignIn = () => {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const { login } = useAuth();

  const navigate = useNavigate();

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (e) => {
    login({ name: "Alex" });
    navigate("/dashboard");
  };

  return (
    <div className="account-page">
      <div className="account-con">
        <div className="form-intro">
          {/* <p>Start earning within 24 hours</p> */}

          <span>Alternatively, you can login using:</span>

          <div className="social-account-btns">
            <div className="s-account-btn x">
              <img src={Google} alt="" />
              Continue with Google
            </div>

            <div className="s-account-btn x">
              <img src={Apple} alt="" />
              Continue with Apple
            </div>

            <div className="s-account-btn x">
              <img src={Twitter} alt="" />
              Continue with X
            </div>
          </div>
        </div>

        <form action="" className="form-container">
          <div className="form-header">
            <h2>Login to your account</h2>
            <p>
              New agent?{" "}
              <Link to="/account/become-an-agent">Register here</Link>
            </p>
          </div>

          <div className="form-elements">
            {agentLoginData.map((input, index) => (
              <FormInput
                key={index}
                inputType="text"
                {...input}
                icon={null}
                value={formData[input.name]}
                handleChange={handleChange}
                isPassword={input.isPassword}
                validate={input.validate}
                errorMessage={input.errorMessage}
                error={error}
                cName="register-input"
              />
            ))}
          </div>

          <div className="account-btn register-btn" onClick={handleLogin}>Login</div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
