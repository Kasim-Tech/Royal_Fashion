/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import css from "../../Components/Fillter/Filter.module.css";
import { ProductsData } from "../../assets/data/products";

function Products() {
  const [MenuProducts, setMenuProducts] = useState(ProductsData);

  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };

  return (
    <div className={css.container} id="Collection">
      <div className={css.topic}>
        <h1>Our Featured Product</h1>

        <p>
          Here You Get Our Best <strong>Collection</strong> And Tranding
          Products
        </p>
      </div>

      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => filter("Shoes")}>Shoes</li>
          <li onClick={() => filter("Watch")}>Watchs</li>
          <li onClick={() => filter("Huddy")}>Huddys</li>
        </ul>

        <div className={css.list}>
          {MenuProducts.map((Product, i) => (
            <div className={css.product}>
              <div className={css.left_s}>
                <div className={css.name}>
                  <span>{Product.name}</span>
                  <span>{Product.detail}</span>
                </div>
                <span>{Product.price}$</span>
                <div className={css.shopNowButton}>Shop_Now</div>
              </div>
              <img src={Product.img} alt="" className="img_p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
