import React, { useState } from "react";
import "./dashboard.scss";
import { mockProducts } from "../../utils/data";
import { useAuth } from "../../context/AuthContext";




const Dashboard = () => {

  const { user } = useAuth();

  const availableBalance = 17000;
  const totalEarned = 42000;
  const totalSales = 18;



  return (
    <div className="agent-dashboard">
     
      {/* Main Content */}
      <main className="agent-main">
        {/* Top bar */}
        <header className="agent-header">
          <div>
            <h1>Dashboard</h1>
            <p>{`Welcome back, ${user.name}. Track your leads and commissions.`}</p>
          </div>
          <div className="header-badge">
            <span className="status-dot" />
            Active Agent
          </div>
        </header>

        {/* Stats */}
        <section className="stats-row">
          <div className="stat-card">
            <span className="stat-label">Available Balance</span>
            <span className="stat-value">
              ₦{availableBalance.toLocaleString()}
            </span>
            <span className="stat-caption">Ready for withdrawal</span>
          </div>

          <div className="stat-card">
            <span className="stat-label">Total Earned</span>
            <span className="stat-value">
              ₦{totalEarned.toLocaleString()}
            </span>
            <span className="stat-caption">All-time commission</span>
          </div>

          <div className="stat-card">
            <span className="stat-label">Total Sales</span>
            <span className="stat-value">{totalSales}</span>
            <span className="stat-caption">Submitted to store</span>
          </div>

        </section>


      </main>
    </div>
  );
};





export default Dashboard;
