import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsByCategorySlug } from "../../../actions";
import { generatePublicUrl } from "../../../urlConfig";
import Card from "../../../components/UI/Card";
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
          <Card
            headerleft={`${props.match.params.slug} mobiles under ${priceRange[key]}`}
            headerright={<button>View All</button>}
            style={{ width: "calc(100% - 40px)", margin: "20px" }}
          >
            <div className="store-card__body">
              {product.productsByPrice[key].map((product) => (
                <Link
                  //target="_blank"
                  to={`/${product.slug}/${product._id}/p`}
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
                </Link>
              ))}
            </div>
          </Card>
        );
      })}
    </>
  );
};

export default ProductStore;
