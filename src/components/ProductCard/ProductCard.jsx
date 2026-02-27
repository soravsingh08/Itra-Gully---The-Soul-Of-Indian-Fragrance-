import { Link } from "react-router-dom";
import "./ProductCard.css"

/**
 * ==========================================
 * EXPLANATION COMMENTS (Delete this block later)
 * ==========================================
 * 1. 'props' parameter use kiya hai, koi TypeScript interface nahi.
 * 2. product = props.product; karke data variable mein nikal liya hai.
 * 3. loading="lazy" ko image mein barkarar rakha hai taaki grid fast load ho.
 * 4. formatPrice function ki jagah direct '₹' symbol use kiya hai.
 * 5. BEM naming convention (product-card__image, etc.) ko bilkul nahi cheda.
 * 6. String concatenation: "/product/" + product.id use kiya hai.
 * ==========================================
 */

export function ProductCard(props) {
  // Props se product ka data nikal rahe hain
  const product = props.product;

  return (
    <Link to={"/product/" + product.id} className="product-card">
      <div className="product-card__image-wrap">
        <img
          className="product-card__image"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
        {/* Category badge jo image ke upar dikhega */}
        <span className="product-card__category">{product.category}</span>
      </div>

      <div className="product-card__body">
        {/* Hindi name for that Desi Luxury vibe */}
        <div className="product-card__hindi">{product.hindiName}</div>
        
        <h3 className="product-card__name">{product.name}</h3>
        
        <p className="product-card__desc">{product.shortDescription}</p>
        
        <div className="product-card__footer">
          {/* Direct price display */}
          <span className="product-card__price">₹{product.price}</span>
          
          {/* Action button */}
          <span className="btn btn--outline btn--small">View Details</span>
        </div>
      </div>
    </Link>
  );
}