import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsByCategorySlug } from "../../actions";
import Layout from "../../components/Layout";
import "./style.css";
import { generatePublicUrl } from "../../urlConfig";

const ProductListPage = (props) => {
  const product = useSelector((state) => state.product);
  const [priceRange, setPriceRange] = useState({
    under5k: 5000,
    under10k: 10000,
    under15k: 15000,
    under20k: 20000,
    under30k: 30000,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsByCategorySlug(props.match.params.slug));
  }, []);

  return (
    <Layout>
      {Object.keys(product.productsByPrice).map((key, index) => {
        return (
          <div className="card">
            <div className="card__header">
              <div className="card__header__title">
                {props.match.params.slug} Mobiles {priceRange[key]}
              </div>
              <button>view all</button>
            </div>
            <div className="card__body">
              {product.productsByPrice[key].map((product) => (
                <div className="product__container">
                  <div className="product__container__img">
                    <img
                      src={generatePublicUrl(product.productPictures[0].img)}
                      alt=""
                    />
                  </div>
                  <div className="product__container__info">
                    <div className="product__container__info__name">
                      {product.name}
                    </div>
                    <div>
                      <span>4.3</span>
                      <span>1231</span>
                    </div>
                    <div className="product__container__info__price">
                      {product.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default ProductListPage;
