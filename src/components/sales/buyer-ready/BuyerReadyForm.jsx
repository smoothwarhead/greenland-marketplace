import { useState } from "react";
import { buyerFormData } from "../../../utils/data";
import FormInput from "../../forms/form-input/FormInput";
import "./buyer-ready-form.scss";




const BuyerReadyForm = () => {

  const [formData, setFormData] = useState({
    buyerName: "",
    buyerPhoneNumber: "",
    buyerAddress: "",
    
  });

  
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };



  return (
    <div className="buyer-ready-con">
      <div className="drop-header">
        <h2>Buyer Information</h2>
        <p>Fill out the buyer's information below</p>
      </div>

      <form className="buyer-form">
        {buyerFormData.map((input, index) => (
          <FormInput
            key={index}
            inputType= "text"
            {...input}
            icon={null}
            value={formData[input.name]}
            handleChange={handleChange}
            isPassword={input.isPassword}
            validate={input.validate}
            errorMessage={input.errorMessage}
            error={error}
            cName="buyer-r-input"
          />
        ))}

        <button type="submit" className="btn-primary submit-sale">
          Submit sale
        </button>
      </form>
    </div>
  );
};

export default BuyerReadyForm;
