import { useState } from "react";
import FormSelect from "../../forms/select/form-select/FormSelect";
import "./product-card.scss";
import { formatPrice } from "../../../utils/methods";


const ProductCard = ({product}) => {

    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [selectedBulk, setSelectedBulk] = useState(product.bulks[0]);
    
     

  return (
    <div className="product-card">
      <div className="product-img">
        <img src={product.image} alt={product.name} />
        {/* <div>
          <h3>{p.name}</h3>
          <p className="product-sku">SKU: {p.sku}</p>
          <p className="product-price">Price: ₦{p.price.toLocaleString()}</p>
          <p className="product-commission">
            Commission: <strong>₦{p.commission.toLocaleString()}</strong>
          </p>
        </div> */}
      </div>

      <div className="product-main">
        <div className="product-name">{product.name}</div>
        <div className="product-selectors">
            {/* <div className="lbl">Select size</div> */}
            <FormSelect 
              options={product.sizes}
              label="Select size"
              placeholder={product.sizes[0]}
                selected = {selectedSize}
              setSelected = {setSelectedSize}           
               
            />

            <FormSelect 
              options={product.bulks}
              label="Select bulk"
              placeholder={product.bulks[0]}
              selected = {selectedBulk}
              setSelected = {setSelectedBulk}         
              
            />

        </div>

        <div className="product-price">₦{formatPrice(product.name, selectedSize, selectedBulk)}</div>




      </div>
      <div className="product-actions">
        <button
          className="btn-outline"
          onClick={() =>
            alert(
              "This is where you’d generate a referral link, e.g. /product/" +
                p.id +
                "?ref=AGENT123"
            )
          }
        >
          Get Link
        </button>
        <button
          className="btn-primary"
          // onClick={() => setSelectedProduct(p)}
        >
          Get Buyer
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
