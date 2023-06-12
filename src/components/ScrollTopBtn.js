import React from "react";
import { useGlobalContext } from "../context";
import { FaChevronCircleUp } from "react-icons/fa";

const ScrollTopBtn = () => {
  const { scrollTopButtonRef, scrollTop } = useGlobalContext();
  return (
    <button
      type="button"
      className="scroll-top__btn"
      ref={scrollTopButtonRef}
      onClick={scrollTop}
    >
      <FaChevronCircleUp className="scroll-top__icon" />
    </button>
  );
};

export default ScrollTopBtn;
