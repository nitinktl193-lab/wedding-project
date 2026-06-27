import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch, FaUser } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const activeTab = location.pathname.replace("/", "");

  const handleSearch = () => {
    const value = search.toLowerCase().trim();

    if (value === "men") {
      navigate("/products/men");
    } else if (value === "women") {
      navigate("/products/women");
    } else if (value === "kids") {
      navigate("/products/kids");
    } else if (value === "saree") {
      navigate("/products/saree");
    } else {
      alert("No category found");
    }
  };

  return (
    <>
      <div className="topbar">
        <div>INDIA | ₹ INR</div>
        <div>Trusted by millions</div>
      </div>

      <header className="header">
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <Link className={activeTab === "" ? "active-link" : ""} to="/">
            HOME
          </Link>

          <Link
            className={activeTab === "products/men" ? "active-link" : ""}
            to="/products/men"
          >
            MEN
          </Link>

          <Link
            className={activeTab === "products/women" ? "active-link" : ""}
            to="/products/women"
          >
            WOMEN
          </Link>

          <Link
            className={activeTab === "products/kids" ? "active-link" : ""}
            to="/products/kids"
          >
            KIDS
          </Link>
        </nav>

        <div className="logo" onClick={() => navigate("/")}>
          <img src={require("./image/1.webp")} alt="Wedding logo" />
        </div>

        <div className="right">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search men, women, kids..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
            <FaSearch onClick={handleSearch} />
          </div>

          <FaUser
            className="icon"
            onClick={() => navigate("/login")}
            style={{ fontSize: "2vw" }}
          />
        </div>
      </header>
    </>
  );
}

export default Header;