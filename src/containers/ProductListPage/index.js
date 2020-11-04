import React from "react";
import { getParams } from "../../utils/getParams";
import Layout from "../../components/Layout";
import ProductStore from "./ProductStore";
import ProductPage from "./ProductPage";
import "./style.css";

const ProductListPage = (props) => {
  const renderProduct = () => {
    const params = getParams(props.location.search);
    switch (params.type) {
      case "page":
        return <ProductPage {...props} />;
      case "store":
        return <ProductStore {...props} />;
      default:
        return null;
    }
  };

  return <Layout>{renderProduct()}</Layout>;
};

export default ProductListPage;
