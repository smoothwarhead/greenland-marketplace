import { FaX } from "react-icons/fa6";
import "./product-dropdown.scss";
import gsap, { Power2 } from "gsap";
import { useRef, useEffect, useState } from "react";
import { stepImages } from "../../../utils/data";

const ProductDropdown = (props) => {
  const { dropdown, setDropdown, dropdownContent } = props;



  const dropRef = useRef();

  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current.fromTo(
      dropRef.current,
      {
        y: -1000,
        //    opacity: 0
      },
      {
        y: 0,
        //    opacity: 1,
        duration: 0.5,
        ease: Power2.Out,
      }
    );
  }, []);

  useEffect(() => {
    dropdown ? tl.current.play() : tl.current.reverse();
  }, [dropdown]);

  return (
    <div className="product-dropdown" ref={dropRef}>
      <div className="close-header-con">
        <div className="close-header" onClick={() => setDropdown(false)}>
          <span>Close</span>
          <FaX />
        </div>
      </div>

      {dropdownContent}


     
    </div>
  );
};

export default ProductDropdown;
