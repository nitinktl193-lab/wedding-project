import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import ProductGrid from "./ProductGrid";
import "./Product.css";

function Product() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      let url = "http://localhost:5000/products";

      if (category) {
        url = `http://localhost:5000/products?category=${category}`;
      }

      const res = await axios.get(url);


      const formatted = res.data.map((item) => ({
        id: item._id,
        name: item.name,
        price: item.price,
        image: item.image
      }));

      setProducts(formatted);
      AOS.refresh();
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="product-page">
      <ProductGrid products={products} showNavigate={true} />
    </div>
  );
}

export default Product;