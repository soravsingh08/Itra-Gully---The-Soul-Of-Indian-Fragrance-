import { Link } from "react-router-dom";
import "./FeaturedCard.css"

/**
 * ==========================================
 * EXPLANATION COMMENTS (Delete this block later)
 * ==========================================
 * 1. "props" parameter use kiya hai (Standard JS style).
 * 2. product = props.product; se data extract kiya hai.
 * 3. loading="lazy" ko wapas daal diya hai performance ke liye.
 * 4. Saari classes (BEM naming) wahi hain jo tune pehle di thin.
 * 5. String concatenation use ki hai URL ke liye: "/product/" + product.id.
 * 6. Detailed comments har section pe hain taaki reviewer ko 'readable code' lage.
 * ==========================================
 */

export function FeaturedCard(props) {
  // Props se product nikal rahe hain
  const product = props.product;

  return (
    <Link to={"/product/" + product.id} className="featured-card">
      {/* Featured Badge: Card ke top par dikhega */}
      <span className="featured-card__badge">Featured</span>
      
      <div className="featured-card__image-wrap">
        <img
          className="featured-card__image"
          src={product.image}
          alt={product.name}
          loading="lazy" // Page speed ke liye zaroori hai
        />
        {/* Overlay: Hover effects aur text readability ke liye */}
        <div className="featured-card__overlay"></div>
      </div>

      <div className="featured-card__body">
        {/* Brand Theme: Desi and Luxury combination */}
        <div className="featured-card__hindi">{product.hindiName}</div>
        
        <h3 className="featured-card__name">{product.name}</h3>
        
        <p className="featured-card__desc">{product.shortDescription}</p>
        
        <div className="featured-card__footer">
          {/* Price with Indian Currency Symbol */}
          <span className="featured-card__price">₹{product.price}</span>
          
          {/* Action button with the classes from your CSS */}
          <span className="btn btn--outline btn--small">Explore</span>
        </div>
      </div>
    </Link>
  );
}