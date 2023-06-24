import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftNav = () => {
  const { selectCategories, setSelectCategories, mobileMenu } =
    useContext(Context);
  return (
    
  );
};

export default LeftNav;
