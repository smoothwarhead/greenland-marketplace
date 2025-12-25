import { FaWhatsapp } from "react-icons/fa6";
import "./help.scss";
import { AiOutlineMail } from "react-icons/ai";
import { faqItems } from "../../utils/data";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";


const Help = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };



  return (
    <div className="dash-page">
      <div className="dash-page-inner">
        <div className="dash-header">
          <h2>Help & Support</h2>
          <p>Get quick answers and contact support.</p>
        </div>

        <div className="help-section">
          <div className="support-card">
            <h3>Need support?</h3>
            <p>
              You can reach the support team on WhatsApp or email during working
              hours.
            </p>
            <div className="support-btns">
              <div className="support-btn support-whatsapp-btn">
                <FaWhatsapp />
                Whatsapp
              </div>

              <div className="support-btn support-email-btn">
                <AiOutlineMail />
                Email
              </div>
            </div>
          </div>

          <div className="faq-card">
            <h3>{"Frequently Asked Questions (FAQs)"}</h3>

            <div className="faq-content">
              {faqItems.map((item, index) => (
                <div 
                className="faq-item" 
                onClick={() => toggleFAQ(index)}>

                  <div className="faq-question">
                    <span className="faq-item-text">{item.question}</span>
                        {openIndex === index ? <FiMinus /> : <FiPlus />}

                  </div>

                   <div
                      
                       className={`faq-answer ${
                      openIndex === index ? "faq-answer-open" : ""
                    }`}
                      style={{
                        maxHeight: openIndex === index ? "20vh" : "0px",
                      }}
                    >
                      <p>{item.answer}</p>
                    </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
