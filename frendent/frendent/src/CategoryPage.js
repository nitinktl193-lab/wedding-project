import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products/category/${category}`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [category]);

  return (
    <div>
      <h2>{category.toUpperCase()} Products</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((item) => (
          <div key={item._id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img
              src={`http://localhost:5000/uploads/${item.profile}`}
              alt=""
              style={{ width: "150px", height: "150px" }}
            />
            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;