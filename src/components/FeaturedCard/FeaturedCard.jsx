import { Link } from "react-router-dom";
import "./FeaturedCard.css"


export function FeaturedCard(props) {

  const product = props.product;

  return (
    <Link to={"/product/" + product.id} className="featured-card">
   
      <span className="featured-card__badge">Featured</span>
      
      <div className="featured-card__image-wrap">
        <img
          className="featured-card__image"
          src={product.image}
          alt={product.name}
          loading="lazy" 
        />
      
        <div className="featured-card__overlay"></div>
      </div>

      <div className="featured-card__body">
      
        <div className="featured-card__hindi">{product.hindiName}</div>
        
        <h3 className="featured-card__name">{product.name}</h3>
        
        <p className="featured-card__desc">{product.shortDescription}</p>
        
        <div className="featured-card__footer">
        
          <span className="featured-card__price">₹{product.price}</span>
          
      
          <span className="btn btn--outline btn--small">Explore</span>
        </div>
      </div>
    </Link>
  );
}