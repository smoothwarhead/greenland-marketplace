import { calculateCommission, setClass } from "../../../utils/methods";
import "./sale-card.scss";

const SalesCard = ({ sale, setDropdown }) => {
 

  return (
    <div className="sale-card">
      <span className="grid-item id">{sale.id}</span>
      <div className="grid-item product desc">
        <div className="p-d-img">
          <img src={sale.image} alt="" className="p-img" />
        </div>

        <span className="p-details">
          <p className="p-details-name">{sale.productName}</p>
          <p className="p-details-size">{sale.size}</p>
          <p className="p-details-bulk">{`${sale.quantity} x ${sale.bulk}`}</p>
          <p className="p-details-price">₦{(sale.unitPrice * sale.quantity).toLocaleString('en-US')}</p>
        </span>
      </div>

      <span className="grid-item customer">
        <p>{sale.buyerName ? sale.buyerName : "N/A"}</p>
        <p>{sale.buyerPhone ? sale.buyerPhone : "N/A"}</p>
      </span>

      <div className="grid-item status p-status">
        <div className={setClass(sale.status)}>{sale.status}</div>
      </div>


      <div className="grid-item commission p-commission">
        
        ₦{calculateCommission(sale.unitPrice * sale.quantity).toLocaleString('en-US')}
        
      </div>


      <div className="grid-item action p-action">
        {sale.status.toLowerCase() === "pending" && <div className="buyer-ready" onClick={() => setDropdown(true)}>Buyer is ready</div>}
      </div>
    </div>
  );
};

export default SalesCard;
