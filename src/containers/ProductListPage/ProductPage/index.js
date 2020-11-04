import React, { useEffect } from "react";
import { getParams } from "../../../utils/getParams";
import { useSelector, useDispatch } from "react-redux";
import { getProductPage } from "../../../actions";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Card from "../../../components/UI/Card";
import "./style.css";

const ProductPage = (props) => {
  const product = useSelector((state) => state.product);
  const { page } = product;
  const dispatch = useDispatch();

  useEffect(() => {
    const params = getParams(props.location.search);
    dispatch(getProductPage(params));
  }, []);

  return (
    <>
      <div style={{ margin: "0 10px" }}>
        <h3>{page.title} </h3>
        <Carousel renderThumbs={() => {}} renderIndicator={() => {}}>
          {page.banners &&
            page.banners.map((banner, index) => (
              <a
                key={index}
                style={{ display: "block" }}
                href={banner.navigateTo}
              >
                <img src={banner.img} alt="" />
              </a>
            ))}
        </Carousel>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            margin: "10px 0",
          }}
        >
          {page.products &&
            page.products.map((product, index) => (
              <Card
                key={index}
                style={{
                  width: "400px",
                  height: "200px",
                  margin: "5px",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src={product.img}
                  alt=""
                />
              </Card>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
