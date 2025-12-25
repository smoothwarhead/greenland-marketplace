import { IoAlertCircleOutline } from "react-icons/io5";
import "./wallet.scss";

const Wallet = () => {

    const availableBalance = 1700000;
  // const totalEarned = 42000;
  // const totalLeads = 18;

  return (
    <div className="wallet-page">
      <div className="wallet-page-inner">
        <div className="wallet-header">
          <h2>Wallet & Withdrawals</h2>
          <p>Check your balance and request payouts.</p>
        </div>

        <div className="wallet-grid">

          <div className="wallet-card available-card">
            <div>
              <span className="wallet-label">Available Balance</span>
              <span className="wallet-value">
                ₦{"500000".toLocaleString("en-US")}
              </span>
              <span className="wallet-caption">
                Approved commissions ready for withdrawal
              </span>
            </div>
            <div
              className="request-btn btn-primary"
              onClick={() =>
                alert("Open withdrawal flow here (connect to backend).")
              }
            >
              Request Withdrawal
            </div>

            <p className="wallet-note">
              <IoAlertCircleOutline />
              Withdrawals are processed within 24–48 hours on business days.
            </p>
          </div>

          <div className="wallet-card pending-card">
            <div>
              <span className="wallet-label">Pending commissions</span>
              <span className="wallet-value">
                ₦{"1500000".toLocaleString("en-US")}
              </span>
           
            </div>

            <p className="wallet-note">
              <IoAlertCircleOutline />
              Pending commissions show up in available balance after the sale is completed.
            </p>
          </div>

          <div className="wallet-card cancelled-card">
            <div>
              <span className="wallet-label">Cancelled commissions</span>
              <span className="wallet-value">
                ₦{availableBalance.toLocaleString("en-US")}
              </span>
           
            </div>

            <span className="wallet-note">
              <IoAlertCircleOutline />
              Pending commissions show up in available balance after the sale is completed.
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Wallet;
