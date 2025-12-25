import "./how-it-works.scss";
import { stepImages } from "../../../utils/data";
import { useState } from "react";



const HowItWorks = () => {

    const [active, setActive] = useState(1);
    


  return (
     <div className="how-contents">
        <div className="drop-header">
          <h2>How it works</h2>
          <p>
            We handle stock, logistics, and payment. You focus on connecting
            buyers to products.
          </p>
        </div>

        <div className="steps-process">
          {/* left column */}
          <div className="sp-left">
            {stepImages.map((step, index) => (
              <div className="sp-left-step" key={index} onMouseEnter={() => setActive(index + 1)}>
                <div className="sp-number-con">
                  <div
                    className={`sp-number ${
                      active === index + 1 ? "active" : ""
                    }`}
                  >
                    {step.id}
                  </div>
                  {step.line && <span className={`sp-line ${
                      active === index + 1 ? "active" : ""
                    }`}></span>}
                </div>

                <div className="sp-text-block">
                  <h3 className={active === index + 1 ? "active" : ""}>
                    {step.title}
                  </h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>


          <div className="sp-right">
            {
                stepImages.map((step, index) => (
                    <div className={`sp-card ${active === index + 1 ? "active" : ""}`} key={index}>
                        
                            <div className="sp-card-img">
                                <img src={active === index + 1 ? step.bigImg : step.smallImg} alt="" />
                            </div>
                        
                    </div>
                ))
            }

          </div>

        </div>
      </div>
  )
}

export default HowItWorks