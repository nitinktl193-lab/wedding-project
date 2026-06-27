import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "https://wedding-project-4-5rqj.onrender.com";

function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div>
      <h2>{category.toUpperCase()} Products</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {products.map((item) => (
          <div
            key={item._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "10px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={`${API_URL}/uploads/${item.profile}`}
              alt={item.name}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
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