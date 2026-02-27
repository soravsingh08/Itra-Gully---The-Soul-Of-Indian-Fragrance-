import { useState, useMemo } from "react";
import { products, categories } from "../../data/products";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./ListingPage.css"

/**
 * ==========================================
 * EXPLANATION COMMENTS (Delete this block later)
 * ==========================================
 * 1. TypeScript ki saari 'types' (SortOption, etc.) hata di hain.
 * 2. useState hook use kiya hai category aur sorting manage karne ke liye.
 * 3. useMemo ka use kiya hai products ko filter aur sort karne ke liye (Performance ke liye achha hai).
 * 4. 'as SortOption' jaisi casting hata di hai, simple value handle ki hai.
 * 5. Agar category mein koi product nahi milta, toh 'Empty State' dikhaya hai.
 * 6. Sorting logic mein simple if-else/switch use kiya hai jo samajhne mein aasaan hai.
 * ==========================================
 */

export function ListingPage() {
  // State: Kaunsi category select ki hai (Default: all)
  const [activeCategory, setActiveCategory] = useState("all");

  // State: Sorting kaise karni hai (Default: default)
  const [sortBy, setSortBy] = useState("default");

  // Filter aur Sort karne ka logic
  const filteredAndSorted = useMemo(function () {
    // Pehle category ke hisaab se filter karo
    let result = activeCategory === "all"
      ? [...products]
      : products.filter(function (p) {
        return p.category === activeCategory;
      });

    // Phir sorting apply karo
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
          /* Agar search/filter khali hai toh ye dikhega */
          <div className="empty-state">
            <div className="empty-state__icon">🌿</div>
            <p className="empty-state__text">No fragrances found in this category.</p>
          </div>
        )}
      </div>
    </main>
  );
}