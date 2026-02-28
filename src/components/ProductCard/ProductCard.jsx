import { Link } from "react-router-dom";
import "./ProductCard.css"



export function ProductCard(props) {

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
      
        <span className="product-card__category">{product.category}</span>
      </div>

      <div className="product-card__body">
    
        <div className="product-card__hindi">{product.hindiName}</div>
        
        <h3 className="product-card__name">{product.name}</h3>
        
        <p className="product-card__desc">{product.shortDescription}</p>
        
        <div className="product-card__footer">
     
          <span className="product-card__price">₹{product.price}</span>
          
   
          <span className="btn btn--outline btn--small">View Details</span>
        </div>
      </div>
    </Link>
  );
}