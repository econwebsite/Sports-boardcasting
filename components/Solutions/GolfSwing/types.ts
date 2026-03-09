export interface CategoryProps {
  id: string;               // for anchor link
  title: string;
  description: string;
  features: string[];
  images: string[];          // for main slider images
  productImages: string[];   // for carousel images (thumbnails)
  productLinks: string[];    // links for product images
  datasheetLink?: string;
  buyNowLink?: string;
  contactLink?: string;
  showContactOnly?: boolean; // for second category
}

export interface Point {
  id: string;
  top: string;
  left: string;
  label: string;
  targetId: string;         // which category to scroll to
}