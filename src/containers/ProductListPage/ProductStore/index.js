import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsByCategorySlug } from "../../../actions";
import { generatePublicUrl } from "../../../urlConfig";

import "./style.css";

const ProductStore = (props) => {
  const [priceRange, setPriceRange] = useState({
    under5k: 5000,
    under10k: 10000,
    under15k: 15000,
    under20k: 20000,
    under30k: 30000,
  });

  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsByCategorySlug(props.match.params.slug));
  }, []);

  return (
    <>
      {Object.keys(product.productsByPrice).map((key, index) => {
        return (
          <div className="store-card">
            <div className="store-card__header">
              <div className="store-card__header__title">
                {props.match.params.slug} Mobiles {priceRange[key]}
              </div>
              <button>view all</button>
            </div>
            <div className="store-card__body">
              {product.productsByPrice[key].map((product) => (
                <a
                  //target="_blank"
                  href={`/${product.slug}/${product._id}/p`}
                  style={{ display: "flex" }}
                >
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
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductStore;
