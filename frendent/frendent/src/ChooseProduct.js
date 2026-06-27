import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import ProductGrid from "./ProductGrid";
import "./Product.css";

// Live Backend URL
const API_URL = "https://wedding-project-4-5rqj.onrender.com";

function Product() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = `${API_URL}/products`;

        if (category) {
          url = `${API_URL}/products?category=${category}`;
        }

        const res = await axios.get(url);

        const formatted = res.data.map((item) => ({
          id: item._id,
          name: item.name,
          price: item.price,

          // Image URL
          image: `${API_URL}/uploads/${item.image}`,
        }));

        setProducts(formatted);
        AOS.refresh();
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="product-page">
      <ProductGrid
        products={products}
        showNavigate={true}
      />
    </div>
  );
}

export default Product;