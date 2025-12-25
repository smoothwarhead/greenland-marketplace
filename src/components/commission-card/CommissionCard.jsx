import { setClass } from "../../utils/methods";
import "./commission-card.scss";

const CommissionCard = ({ commission }) => {


  return (
    <div className="commission-card">
        <div className="header">
            <span className={setClass(commission.status)}>
                {commission.status}

            </span>
        </div>

        <div className="com-img-con">
            <div className="com-img">
                <img src={commission.image} alt={commission.productName} />
            </div>
        </div>
        <div className="name">{commission.productName}</div>
        <div className="amt">₦{(commission.amount).toLocaleString('en-US')}</div>

    </div>
  )
}

export default CommissionCard;