/**
 * ==========================================
 * EXPLANATION COMMENTS (Delete this block later)
 * ==========================================
 * 1. TypeScript ka ': number' aur ': string' hata diya hai.
 * 2. toLocaleString("en-IN") ka use kiya hai taaki commas Indian style mein lagein (e.g., 1,00,000).
 * 3. Backticks (``) use kiye hain ₹ symbol ko price ke saath jodne ke liye.
 * ==========================================
 */

export function formatPrice(price) {
  // toLocaleString se number 10000 se 10,000 ban jata hai
  return `₹${price.toLocaleString("en-IN")}`;
}