import { Link } from "react-router-dom";
import { getFeaturedProducts } from "../../data/products";
import { FeaturedCard } from "../../components/FeaturedCard/FeaturedCard";
import "./LandingPage.css"



export function LandingPage() {
  const featured = getFeaturedProducts();

  return (
    <main>
      {/* --- HERO SECTION --- */}
      <section className="hero">
        <div className="hero__image-container">
          <img
            src="/hero.png"
            alt="Traditional Indian Perfume Cnollection"
            className="hero__image"
          />
      
          <div className="hero__overlay" />
        </div>
        <div className="hero__bg-pattern" />
        <div className="hero__glow" />
        <div className="hero__content">
          
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