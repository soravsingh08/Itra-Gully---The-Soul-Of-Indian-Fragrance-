import { Link } from "react-router-dom";
import { getFeaturedProducts } from "../../data/products";
import { FeaturedCard } from "../../components/FeaturedCard/FeaturedCard";
import "./LandingPage.css"

/**
 * ==========================================
 * EXPLANATION COMMENTS (Delete this block later)
 * ==========================================
 * 1. TypeScript ki interfaces aur types poori tarah hata di hain.
 * 2. 'featured' variable mein humne data fetch kiya hai simple function se.
 * 3. map() function ka use kiya hai featured products dikhane ke liye.
 * 4. key={product.id} zaroori hai React ke liye, isliye usko rakha hai.
 * 5. BEM class naming (hero__title, brand-intro__text) ko bilkul nahi cheda.
 * 6. Brand Intro text ko "luxury" aur "specific" rakha hai jaisa assignment mein maanga tha.
 * ==========================================
 */

export function LandingPage() {
  // Products data se sirf 'featured' wale items nikal rahe hain
  const featured = getFeaturedProducts();

  return (
    <main>
      {/* --- HERO SECTION --- */}
      <section className="hero">
        <div className="hero__image-container">
          <img
            src="public/hero.png"
            alt="Traditional Indian Perfume Collection"
            className="hero__image"
          />
          {/* Dark overlay taaki text white/gold mein chamke */}
          <div className="hero__overlay" />
        </div>
        <div className="hero__bg-pattern" />
        <div className="hero__glow" />
        <div className="hero__content">
          {/* Hindi text for premium Indian look */}
          <p className="hero__hindi animate-in animate-in--delay-1">इत्र गली</p>
          <h1 className="hero__title animate-in animate-in--delay-2">Itra Gully</h1>
          <p className="hero__subtitle animate-in animate-in--delay-3">
            Where every drop tells a story of ancient India
          </p>
          <div className="hero__divider animate-in animate-in--delay-3" />
          <Link to="/collection" className="btn btn--primary animate-in animate-in--delay-4">
            Explore the Collection
          </Link>
        </div>
      </section>

      {/* --- BRAND INTRO SECTION --- */}
      {/* Assignment Rule: 2-3 lines specific to your brand */}
      <section className="brand-intro">
        <div className="container">
          <p className="brand-intro__label">Our Story</p>
          <h2 className="brand-intro__title">From Kannauj's Narrow Lanes to Your Skin</h2>
          <p className="brand-intro__text">
            Itra Gully is rooted in the <span>500-year-old attar-making tradition</span> of
            Kannauj, Uttar Pradesh, India's perfume capital. We work directly with
            master distillers who still use the ancient <span>deg-bhapka</span> method,
            where flowers are coaxed into sandalwood oil over days, not minutes.
            No synthetic shortcuts. No mass production. Just pure, soulful Indian
            fragrance, the kind your nani would recognize.
          </p>
        </div>
      </section>

      {/* --- FEATURED PRODUCTS SECTION --- */}
      <section className="featured">
        <div className="container">
          <div className="section-header">
            <p className="section-header__label">Hand-picked</p>
            <h2 className="section-header__title">
              Our <em>Signature</em> Fragrances
            </h2>
          </div>
          <div className="featured__grid">
            {/* Array par loop chala kar FeaturedCards dikha rahe hain */}
            {featured.map(function (product) {
              return <FeaturedCard key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION (CTA) SECTION --- */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-section__title">
            Ready to find <em>your scent</em>?
          </h2>
          <p className="cta-section__text">
            Browse our full collection of attars, ittars, and essential oils,
            each one crafted by hand in the heart of India.
          </p>
          <Link to="/collection" className="btn btn--primary">
            View Full Collection
          </Link>
        </div>
      </section>
    </main>
  );
}