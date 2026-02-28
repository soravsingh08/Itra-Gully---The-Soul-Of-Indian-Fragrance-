import { useState, useMemo } from "react";
import { products, categories } from "../../data/products";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./ListingPage.css"


export function ListingPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const [sortBy, setSortBy] = useState("default");


  const filteredAndSorted = useMemo(function () {
    let result = activeCategory === "all"
      ? [...products]
      : products.filter(function (p) {
        return p.category === activeCategory;
      });

 
    if (sortBy === "price-low") {
      result.sort(function (a, b) { return a.price - b.price; });
    }
    else if (sortBy === "price-high") {
      result.sort(function (a, b) { return b.price - a.price; });
    }
    else if (sortBy === "name-az") {
      result.sort(function (a, b) { return a.name.localeCompare(b.name); });
    }

    return result;
  }, [activeCategory, sortBy]);

  return (
    <main className="listing-page">

      {/* --- PAGE HEADER --- */}
      <section className="listing-hero">
        <div className="container">
          <h1 className="listing-hero__title">
            The <em>Collection</em>
          </h1>
          <p className="listing-hero__subtitle">
            Every bottle, a chapter from India's fragrance heritage
          </p>
        </div>
      </section>

      <div className="container">
        {/* --- FILTERS & SORTING BAR --- */}
        <div className="filters">
          {/* Category Buttons */}
          <div className="filters__categories">
            {categories.map(function (cat) {
              return (
                <button
                  key={cat.value}
                  className={"filter-btn " + (activeCategory === cat.value ? "filter-btn--active" : "")}
                  onClick={function () { setActiveCategory(cat.value); }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Sort Dropdown */}
          <div className="filters__sort">
            <select
              value={sortBy}
              onChange={function (e) { setSortBy(e.target.value); }}
            >
              <option value="default">Sort By</option>
              <option value="price-low">Price: Low → High</option>
              <option value="price-high">Price: High → Low</option>
              <option value="name-az">Name: A → Z</option>
            </select>
          </div>
        </div>

        {/* --- PRODUCT GRID --- */}
        {filteredAndSorted.length > 0 ? (
          <div className="product-grid">
            {filteredAndSorted.map(function (product) {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        ) : (
      
          <div className="empty-state">
            <div className="empty-state__icon">🌿</div>
            <p className="empty-state__text">No fragrances found in this category.</p>
          </div>
        )}
      </div>
    </main>
  );
}