import CommissionCard from "../../components/commission-card/CommissionCard";
import { commissionFilters, mockCommissions } from "../../utils/data";
import "./commissions.scss";


const Commissions = () => {
  return (
    <div className="commission-page">
      <div className="commission-page-inner">
        <div className="commission-header">
          <h2>Commissions</h2>
          {/* <p>
                Choose a commission to market. When your buyer is ready, submit their
                details.
              </p> */}

          <div className="p-a-btns">
            <div className="filters">
              {commissionFilters.map((f, index) => (
                <span className="p-a-btn filter-btn" key={index}>
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="commission-grid">
              {
                mockCommissions.map((c, index) => (
                  <CommissionCard 
                    key={index}
                    commission={c}
                  />
                ))
              }
          </div>

        </div>
      </div>
    </div>
  );
};

export default Commissions;
