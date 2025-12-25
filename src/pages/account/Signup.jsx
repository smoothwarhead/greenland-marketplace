import { Link } from "react-router-dom";
import "./account.scss";
import { agentRegisterData } from "../../utils/data";
import FormInput from "../../components/forms/form-input/FormInput";
import { useState } from "react";
import Apple from "../../assets/logos/apple-logo.png";
import Google from "../../assets/logos/Google__G__logo.svg.png";
import Twitter from "../../assets/logos/x-logo.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="account-page">
      <div className="account-con">
        <div className="form-intro">
          <p>Start earning within 24 hours</p>

          <span>Alternatively, you can register using:</span>

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
            <h2>Register your account</h2>
            <p>
              Signed up already? <Link to="/account/sign-in-as-agent">Log in here</Link>
            </p>
          </div>

          <div className="form-elements">
            {agentRegisterData.map((input, index) => (
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

          <div className="account-btn register-btn">Become an Agent</div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
