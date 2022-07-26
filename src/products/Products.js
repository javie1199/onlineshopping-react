import { useState, useEffect } from "react";
import Product from "./Product.js";
import useFetch from "../helpers/useFetch";
import Loader from "../helpers/Loader";
import "./Products.Style.css";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const { getUrl, loading } = useFetch(
    "https://react-jmart-default-rtdb.firebaseio.com/"
  );

  useEffect(() => {
    getUrl("products.json")
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.log("Could not load products", error));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="products-grid">
        {loading && <Loader />}
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              details={product}
              cart={props.cart}
              onProductAdd={props.onProductAdd}
              onProductDelete={props.onProductDelete}
              onProductDecrease={props.onProductDecrease}
            />
          );
        })}
      </div>
    </div>
  );
}
// eslint-disable-next-line
