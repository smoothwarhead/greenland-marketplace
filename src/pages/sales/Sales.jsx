import { useState, useEffect } from "react";
import SalesCard from "../../components/sales/sales- card/SalesCard";
import { mockSales, saleFilters } from "../../utils/data";
import "./sales.scss";
import ProductDropdown from "../../components/products/dropdown/ProductDropdown";
import BuyerReadyForm from "../../components/sales/buyer-ready/BuyerReadyForm";



const Sales = () => {
  const [sales, setSales] = useState(mockSales);

  const [dropdown, setDropdown] = useState(false);


  const [filterResult, setFilterResult] = useState("Pending");

  useEffect(() => {
    const pendingId = "pending";
    const allId = "all sales";
    const negId = "Negotiating";
    const completedId = "Completed";
    const CancelledId = "Cancelled";

    if (filterResult.toLowerCase() === allId.toLowerCase()) {
      setSales(mockSales);
    }
    if (filterResult.toLowerCase() === pendingId.toLowerCase()) {
      const pends = mockSales.filter(
        (m) => m.status.toLowerCase() === pendingId.toLowerCase()
      );
      setSales(pends);
    }
    if (filterResult.toLowerCase() === negId.toLowerCase()) {
      const neg = mockSales.filter(
        (m) => m.status.toLowerCase() === negId.toLowerCase()
      );
      setSales(neg);
    }
    if (filterResult.toLowerCase() === completedId.toLowerCase()) {
      const comp = mockSales.filter(
        (m) => m.status.toLowerCase() === completedId.toLowerCase()
      );
      setSales(comp);
    }
    if (filterResult.toLowerCase() === CancelledId.toLowerCase()) {
      const can = mockSales.filter(
        (m) => m.status.toLowerCase() === CancelledId.toLowerCase()
      );
      setSales(can);
    }
  }, [filterResult]);

  return (

    <>
      <ProductDropdown 
        dropdown={dropdown} 
        setDropdown={setDropdown} 
        dropdownContent={<BuyerReadyForm />}

      />

    <div className="sales-page">
      {!sales ? (
        <div>Loading...</div>
      ) : (
        <div className="sales-page-inner">
          <div className="sales-header">
            <h2>Sales</h2>
          </div>

          <div className="p-a-btns">
            <div className="filters">
              {saleFilters.map((f, index) => (
                <span
                  className={`p-a-btn filter-btn ${f.toLowerCase() === filterResult.toLowerCase() ? "filter-btn-active" : ""}`}
                  key={index}
                  onClick={() => setFilterResult(f)}
                >
                  {`${f}`}
                </span>
              ))}
            </div>
          </div>

          <div className="filter-result">{`${filterResult} (${sales.length})`}</div>


          <div className="sales-grid">
            <div className="grid-title">
              <span className="grid-item id">Id</span>
              <span className="grid-item product">Product</span>
              <span className="grid-item customer">Customer</span>
              <span className="grid-item status">Status</span>
              <span className="grid-item commission">Commission</span>
              <span className="grid-item action">Action</span>
            </div>

            {sales.map((sale, index) => (
              <SalesCard key={index} sale={sale}  setDropdown={setDropdown}/>
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Sales;
