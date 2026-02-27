import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ==========================================
 * EXPLANATION COMMENTS (Delete this block later)
 * ==========================================
 * 1. Iska koi visual output nahi hai (returns null).
 * 2. useEffect hook ka use kiya hai 'pathname' change hone par function chalane ke liye.
 * 3. window.scrollTo(0, 0) browser ko screen ke ekdum top pe le jata hai.
 * 4. Isko App.jsx mein Router ke andar bas ek baar daalna hota hai.
 * ==========================================
 */

export function ScrollToTop() {
  // Humein bas ye pata karna hai ki kab page ka rasta (URL) badla hai
  const { pathname } = useLocation();

  useEffect(function() {
    // Jab bhi pathname badlega, ye code chalega
    window.scrollTo(0, 0);
  }, [pathname]);

  // Iska kaam sirf background mein scroll handle karna hai, isliye ye kuch render nahi karta
  return null;
}