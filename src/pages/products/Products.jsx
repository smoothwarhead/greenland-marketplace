import "./products.scss";
import { mockProducts, productFilters } from "../../utils/data";
import ProductCard from "../../components/products/product-card/ProductCard";
import { BsFilterRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import ProductDropdown from "../../components/products/dropdown/ProductDropdown";
import HowItWorks from "../../components/products/how-it-works/HowItWorks";

const Products = () => {

  const [products, setProducts] = useState(mockProducts);

  const [filterResult, setFilterResult] = useState("All Products");

  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const cropId = "crops";
    const liveId = "livestocks";
    const availableId = "available now"
    if (filterResult.toLowerCase() === "all products") {
      setProducts(mockProducts);
    }
    if (filterResult.toLowerCase() === cropId.toLowerCase()) {
      const crops = mockProducts.filter(
        (m) => m.tag.toLowerCase() === cropId.toLowerCase()
      );
      setProducts(crops);
    }
    if (filterResult.toLowerCase() === liveId.toLowerCase()) {
      const lives = mockProducts.filter(
        (m) => m.tag.toLowerCase() === liveId.toLowerCase()
      );
      setProducts(lives);
    }
    if (filterResult.toLowerCase() === liveId.toLowerCase()) {
      const lives = mockProducts.filter(
        (m) => m.tag.toLowerCase() === liveId.toLowerCase()
      );
      setProducts(lives);
    }


  }, [filterResult]);

  return (
    <>
      <ProductDropdown
        dropdown={dropdown}
        setDropdown={setDropdown}
        dropdownContent={<HowItWorks />}
      />
      <div className="product-page">
        {!products ? (
          <div>Loading...</div>
        ) : (
          <div className="product-page-inner">
            <div className="product-header">
              <h2>Product Marketplace</h2>
              {/* <p>
            Choose a product to market. When your buyer is ready, submit their
            details.
          </p> */}

              <div className="p-a-btns">
                <div
                  className="p-a-btn how-it-works"
                  onClick={() => setDropdown(true)}
                >
                  See how it works
                </div>
                <div className="filters">
                  {productFilters.map((f, index) => (
                    <span
                      className={`p-a-btn filter-btn ${
                        f.toLowerCase() === filterResult.toLowerCase()
                          ? "filter-btn-active"
                          : ""
                      }`}
                      key={index}
                      onClick={() => setFilterResult(f)}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="filter-result">{`${filterResult} (${products.length})`}</div>

            <div className="products-grid">
              {products.map((p) => (
                <ProductCard product={p} key={p.id} />
              ))}
            </div>
            

          
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
