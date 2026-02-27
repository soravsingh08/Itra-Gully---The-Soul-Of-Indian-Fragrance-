import { useParams, Link, useNavigate } from "react-router-dom";
import { getProductById } from "../../data/products";
import "./ProductDetailPage.css"

/**
 * ==========================================
 * EXPLANATION COMMENTS (Delete this block later)
 * ==========================================
 * 1. TypeScript ki saari types (: string, : string[], etc.) hata di hain.
 * 2. useNavigate hook se 'Back' button ka logic handle kiya hai.
 * 3. Graceful Error: Agar product ID galat hai, toh 'Fragrance Not Found' wala div return hoga.
 * 4. Specs Block: Perfume ke liye notes, size, aur longevity ko alag sections mein dikhaya hai.
 * 5. Helpers: NoteGroup aur SpecItem functions ko niche simple rakha hai taaki code repeat na ho.
 * 6. formatPrice ki jagah seedha ₹ symbol use kiya hai beginner style mein.
 * ==========================================
 */

export function ProductDetailPage() {
  // URL se ID nikal rahe hain
  const { id } = useParams();
  const navigate = useNavigate();

  // Data fetch kar rahe hain
  const product = id ? getProductById(id) : undefined;

  // AGAR PRODUCT NAHI MILA (Graceful Error Handling)
  if (!product) {
    return (
      <div className="error-page">
        <div className="error-page__icon">✦</div>
        <h1 className="error-page__title">Fragrance Not Found</h1>
        <p className="error-page__text">
          The scent you're looking for doesn't exist in our collection — or perhaps
          it hasn't been distilled yet.
        </p>
        <Link to="/collection" className="btn btn--primary">
          Back to Collection
        </Link>
      </div>
    );
  }

  // Data ko use karne ke liye nikalna
  const fragranceNotes = product.fragranceNotes;

  return (
    <main className="detail-page">
      <div className="container">
        {/* Back Button */}
        <button className="detail__back" onClick={function () { navigate(-1); }}>
          ← Back
        </button>

        <div className="detail__layout">
          {/* LEFT SIDE: PRODUCT IMAGE */}
          <div className="detail__image-wrap">
            <img
              className="detail__image"
              src={product.image}
              alt={product.name}
            />
          </div>

          {/* RIGHT SIDE: PRODUCT INFO */}
          <div className="detail__info">
            <span className="detail__category-badge">{product.category}</span>
            <p className="detail__hindi">{product.hindiName}</p>
            <h1 className="detail__name">{product.name}</h1>

            <p className="detail__price">
              ₹{product.price}
              <span className="detail__price-note">incl. of all taxes</span>
            </p>

            <p className="detail__description">{product.fullDescription}</p>

            <div className="detail__divider" />

            {/* FRAGRANCE NOTES (Mandatory for Perfume Brands) */}
            <div className="notes-section">
              <h3 className="notes-section__title">Fragrance Notes</h3>
              <div className="notes-row">
                <NoteGroup label="Top" notes={fragranceNotes.top} />
                <NoteGroup label="Heart" notes={fragranceNotes.heart} />
                <NoteGroup label="Base" notes={fragranceNotes.base} />
              </div>
            </div>

            <div className="detail__divider" />

            {/* SPECS TABLE (Size, Longevity, etc.) */}
            <div className="specs">
              <SpecItem label="Size" value={product.size} />
              <SpecItem label="Longevity" value={product.longevity} />
              <SpecItem label="Occasion" value={product.occasion} />
              <SpecItem label="Category" value={product.category} />
            </div>

            {/* CRAFTSMANSHIP SECTION */}
            <div className="craftsmanship">
              <h4 className="craftsmanship__title">Craftsmanship Note</h4>
              <p className="craftsmanship__text">{product.craftsmanship}</p>
            </div>

            <Link to="/collection" className="btn btn--outline">
              ← Explore More Fragrances
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

// Chota function notes dikhane ke liye
function NoteGroup(props) {
  const label = props.label;
  const notes = props.notes;

  return (
    <div className="note-group">
      <span className="note-group__label">{label}</span>
      <div className="note-group__tags">
        {notes.map(function (note) {
          return <span key={note} className="note-tag">{note}</span>;
        })}
      </div>
    </div>
  );
}

// Chota function details/specs dikhane ke liye
function SpecItem(props) {
  return (
    <div className="spec-item">
      <div className="spec-item__label">{props.label}</div>
      <div className="spec-item__value">{props.value}</div>
    </div>
  );
}