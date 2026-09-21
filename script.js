/**
 * ==========================================================================
 * ZELORA Fashion Store - Core JavaScript
 * Features:
 *  - Product Data Catalog (43 Fashion Items across 6 Categories)
 *    * Women: 8 products
 *    * Men: 8 products
 *    * Dresses: 8 products
 *    * Tops: 7 products
 *    * Jeans: 6 products
 *    * Accessories: 6 products
 *  - LocalStorage Shopping Cart Management
 *  - Dynamic Shop Grid, Search & Category Filters
 *  - Dynamic Product Details Page (Sizes, Quantity Stepper, Gallery)
 *  - Cart Rendering, Quantity Modifiers, Coupon Engine & Checkout Modal
 *  - Contact Form & Newsletter Validation
 *  - Real-time Toast Notifications & Badge Updates
 * ==========================================================================
 */

// Global Constants for LocalStorage
const CART_STORAGE_KEY = 'zelora_fashion_cart';
const COUPON_STORAGE_KEY = 'zelora_applied_coupon';

/* --------------------------------------------------------------------------
   1. Complete Product Catalog (43 Products across all required categories)
   -------------------------------------------------------------------------- */
const ZELORA_PRODUCTS = [
  // ===================== WOMEN (8 Products) =====================
  {
    id: 1,
    name: "Tailored Cashmere-Blend Coat",
    category: "Women",
    price: 260.00,
    originalPrice: 320.00,
    rating: 4.8,
    reviews: 84,
    badge: "Bestseller",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80"
    ],
    description: "An impeccably structured outerwear piece tailored with an oversized silhouette, horn buttons, and wide notch lapels. Lined with silky cupro for effortless layering over knitwear.",
    fabric: "80% Virgin Wool, 20% Mongolian Cashmere. Specialist dry clean.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 2,
    name: "Embroidered Peasant Cotton Blouse",
    category: "Women",
    price: 94.00,
    originalPrice: 115.00,
    rating: 4.8,
    reviews: 58,
    badge: "Trending",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Bohemian luxury at its finest. Cut from semi-sheer cotton voile with artisanal floral eyelet embroidery, scalloped cuffs, and tassel tie-front cords.",
    fabric: "100% Cotton Voile. Gentle machine wash inside laundry bag.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 3,
    name: "Double-Breasted Wool Trench",
    category: "Women",
    price: 245.00,
    originalPrice: 295.00,
    rating: 4.9,
    reviews: 67,
    badge: "New",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80"
    ],
    description: "A commanding double-breasted trench tailored in structured wool blend. Features storm flap detailing, detachable waist belt, and tortoiseshell buckles.",
    fabric: "70% Wool, 30% Polyamide. Dry clean.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 4,
    name: "Autumn Wool Tailored Overcoat",
    category: "Women",
    price: 280.00,
    originalPrice: 340.00,
    rating: 4.9,
    reviews: 92,
    badge: "Seasonal",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Elegantly constructed tailored coat woven in rich caramel wool with deep welt pockets and a smooth satin inner lining. An investment piece for cooler seasons.",
    fabric: "100% Sustainable Virgin Wool. Dry clean only.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 5,
    name: "Draped Silk Cocoon Trench",
    category: "Women",
    price: 220.00,
    originalPrice: 265.00,
    rating: 4.7,
    reviews: 49,
    badge: "Exclusive",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Flowing silk-blend duster jacket with dropped shoulders, minimalist open front, and subtle side-seam slits for effortless movement.",
    fabric: "65% Silk, 35% Lyocell. Gentle steam or dry clean.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 6,
    name: "Classic Belted Trench Coat",
    category: "Women",
    price: 210.00,
    originalPrice: null,
    rating: 4.8,
    reviews: 73,
    badge: "Popular",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Water-resistant cotton gabardine trench coat with raglan sleeves, traditional gun flap, and buckle-fastening cuff straps in classic stone beige.",
    fabric: "100% Cotton Gabardine with water-repellent finish.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 7,
    name: "Chic Cropped Bouclé Jacket",
    category: "Women",
    price: 175.00,
    originalPrice: 210.00,
    rating: 4.7,
    reviews: 41,
    badge: "New",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Vintage-inspired cropped jacket tailored from textured Parisian bouclé fabric with embossed gold-tone crest buttons and frayed edge trims.",
    fabric: "Bouclé knit blend. Dry clean.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 8,
    name: "Oversized Alpaca Knit Cardigan",
    category: "Women",
    price: 160.00,
    originalPrice: 195.00,
    rating: 4.9,
    reviews: 64,
    badge: "Sale",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Sumptuously soft rib-knitted cardigan with exaggerated balloon sleeves, mother-of-pearl buttons, and cozy patch pockets in dusty cream.",
    fabric: "70% Baby Alpaca, 30% Organic Merino. Hand wash cold.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },

  // ===================== MEN (8 Products) =====================
  {
    id: 9,
    name: "Classic Structured Linen Blazer",
    category: "Men",
    price: 175.00,
    originalPrice: 210.00,
    rating: 4.7,
    reviews: 62,
    badge: "Trending",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Lightweight, breathable, and refined. Crafted from European flax linen with a soft shoulder construction and horn button detailing. Transition effortlessly from business casual to weekend elegance.",
    fabric: "100% European Flax Linen. Dry clean or gentle steam.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 10,
    name: "Crisp Poplin Oxford Shirt",
    category: "Men",
    price: 88.00,
    originalPrice: 105.00,
    rating: 4.6,
    reviews: 98,
    badge: "Sale",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80"
    ],
    description: "A perennial wardrobe staple tailored from two-ply Egyptian cotton poplin. Features mother-of-pearl buttons, a button-down collar, and curved hem.",
    fabric: "100% Long-Staple Egyptian Cotton. Machine wash warm.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 11,
    name: "Heritage Leather Biker Jacket",
    category: "Men",
    price: 295.00,
    originalPrice: 360.00,
    rating: 4.9,
    reviews: 87,
    badge: "Premium",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Crafted from supple, vegetable-tanned lambskin leather with heavy-duty silver-tone zip closures, snap lapels, and quilted satin interior.",
    fabric: "100% Full-Grain Lambskin Leather. Professional leather clean.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 12,
    name: "Slim-Fit Italian Wool Suit Jacket",
    category: "Men",
    price: 320.00,
    originalPrice: null,
    rating: 4.8,
    reviews: 54,
    badge: "New",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Tailored in Biella, Italy from Super 130s virgin wool. Features notch lapels, double back vents, pick stitching, and full Bemberg lining.",
    fabric: "100% Super 130s Italian Wool. Dry clean only.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 13,
    name: "Brushed Flannel Check Overshirt",
    category: "Men",
    price: 95.00,
    originalPrice: 120.00,
    rating: 4.7,
    reviews: 63,
    badge: "Sale",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Heavyweight brushed cotton flannel woven in a muted earth check. Designed to be worn over tees or under heavy coats during crisp autumn days.",
    fabric: "100% Brushed Cotton Flannel. Machine wash cold.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 14,
    name: "Cable-Knit Fisherman Sweater",
    category: "Men",
    price: 140.00,
    originalPrice: 170.00,
    rating: 4.8,
    reviews: 79,
    badge: "Bestseller",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Traditional Aran cable knitting rendered in pure un-dyed Scottish wool. Dense, warming, and naturally water-resistant with ribbed crew neckline.",
    fabric: "100% Scottish Wool. Hand wash cold, dry flat.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 15,
    name: "Pima Cotton Mercerized Polo",
    category: "Men",
    price: 78.00,
    originalPrice: null,
    rating: 4.6,
    reviews: 51,
    badge: "Essential",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Made from silky Peruvian Pima cotton with a subtle mercerized luster. Features three mother-of-pearl buttons and a clean ribbed collar.",
    fabric: "100% Mercerized Pima Cotton. Machine wash delicate.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 16,
    name: "Minimalist Utility Cargo Overshirt",
    category: "Men",
    price: 115.00,
    originalPrice: 140.00,
    rating: 4.7,
    reviews: 44,
    badge: "New",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Military-inspired field overshirt crafted from resilient cotton twill with concealed button placket and twin bellows chest pockets.",
    fabric: "100% Heavy Organic Cotton Twill. Machine wash.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },

  // ===================== DRESSES (8 Products) =====================
  {
    id: 17,
    name: "Silk Wrap Midi Dress",
    category: "Dresses",
    price: 145.00,
    originalPrice: 185.00,
    rating: 4.9,
    reviews: 128,
    badge: "Bestseller",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Crafted from pure mulberry silk, this fluid wrap midi dress features a self-tie waist, gentle pleated shoulder details, and a fluttering A-line hem. Perfect for both gallery openings and sunset dinners.",
    fabric: "100% Mulberry Silk. Dry clean only.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 18,
    name: "Pleated Floral Chiffon Gown",
    category: "Dresses",
    price: 195.00,
    originalPrice: 240.00,
    rating: 4.8,
    reviews: 73,
    badge: "Sale",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80"
    ],
    description: "An ethereal floor-length chiffon gown patterned with soft blush botanicals. Features micro-accordion pleats, sheer poet sleeves, and an open back detail with delicate ties.",
    fabric: "100% Recycled Chiffon with silk lining. Delicate dry clean.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 19,
    name: "Sculpted Satin Slip Dress",
    category: "Dresses",
    price: 135.00,
    originalPrice: null,
    rating: 4.9,
    reviews: 114,
    badge: "Bestseller",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Bias-cut heavy satin that drapes fluidly against natural body curves. Features adjustable cross-back spaghetti straps, a soft cowl neckline, and subtle side slit.",
    fabric: "96% Silk Satin, 4% Spandex. Hand wash cold.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 20,
    name: "Backless Velvet Evening Gown",
    category: "Dresses",
    price: 240.00,
    originalPrice: 290.00,
    rating: 4.9,
    reviews: 56,
    badge: "Luxury",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Rich emerald silk velvet gown featuring a dramatic low scoop back, subtle puddle train, and high modest neckline with tailored darts.",
    fabric: "82% Rayon, 18% Silk Velvet. Specialist dry clean.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 21,
    name: "Tiered Linen Halter Sundress",
    category: "Dresses",
    price: 125.00,
    originalPrice: 155.00,
    rating: 4.7,
    reviews: 68,
    badge: "Trending",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Airy European linen cut into cascading gathered tiers with a delicate halter neckline and elasticated smocked back bodice.",
    fabric: "100% Washed European Linen. Gentle machine wash.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 22,
    name: "Asymmetrical Draped Cocktail Dress",
    category: "Dresses",
    price: 185.00,
    originalPrice: null,
    rating: 4.8,
    reviews: 42,
    badge: "New",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Sculptural cocktail dress crafted with a single draped shoulder, gathered side waist, and asymmetrical tulip hemline in midnight navy crepe.",
    fabric: "100% Japanese Crepe. Dry clean only.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 23,
    name: "Scarlet Pleated Midi Dress",
    category: "Dresses",
    price: 165.00,
    originalPrice: 195.00,
    rating: 4.8,
    reviews: 81,
    badge: "Sale",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1534126511673-b6899657816a?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1534126511673-b6899657816a?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Vibrant scarlet georgette dress with permanent knife-pleat skirt, wrapped V-neckline, and long blouson sleeves with button cuffs.",
    fabric: "100% Recycled Poly-Georgette. Hand wash or dry clean.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 24,
    name: "Embroidered Bohemian Maxi Dress",
    category: "Dresses",
    price: 210.00,
    originalPrice: 250.00,
    rating: 4.9,
    reviews: 95,
    badge: "Trending",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Luxe ivory cotton voile embellished with gold and sand metallic threads, tassel ties at the notched collar, and billowing tiered skirt.",
    fabric: "100% Cotton Voile with Silk Threading.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },

  // ===================== TOPS (7 Products) =====================
  {
    id: 25,
    name: "Relaxed French Terry Cotton Top",
    category: "Tops",
    price: 68.00,
    originalPrice: 85.00,
    rating: 4.6,
    reviews: 95,
    badge: "Sale",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80"
    ],
    description: "An ultra-soft crewneck top designed for casual luxury. Cut from organic combed cotton with ribbed hems and drop-shoulder stitching for an effortless silhouette.",
    fabric: "100% Certified Organic Cotton. Machine wash cold.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 26,
    name: "Classic Fine-Knit Merino Turtleneck",
    category: "Tops",
    price: 92.00,
    originalPrice: null,
    rating: 4.7,
    reviews: 110,
    badge: "New",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Spun from ultra-fine Australian Merino wool. Lightweight yet remarkably warming, this turtleneck is an essential layering base for blazers, coats, or solitary wear.",
    fabric: "100% Extra-fine Merino Wool. Hand wash cold or dry clean.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 27,
    name: "Heavyweight Cotton Crewneck Tee",
    category: "Tops",
    price: 55.00,
    originalPrice: 65.00,
    rating: 4.8,
    reviews: 130,
    badge: "Essential",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Boxy heavyweight 280gsm cotton t-shirt with reinforced ribbed collar, blind stitched hems, and garment-dyed finish for broken-in softness.",
    fabric: "100% Heavyweight Combed Cotton. Machine wash warm.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 28,
    name: "Vintage Washed Minimal Graphic Tee",
    category: "Tops",
    price: 48.00,
    originalPrice: 60.00,
    rating: 4.6,
    reviews: 74,
    badge: "Sale",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Acid-washed vintage jersey featuring subtle typography artwork inspired by mid-century brutalist architecture.",
    fabric: "100% Vintage Washed Cotton.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 29,
    name: "Chunky Ribbed Wool Pullover",
    category: "Tops",
    price: 130.00,
    originalPrice: 160.00,
    rating: 4.9,
    reviews: 82,
    badge: "Bestseller",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Thick 5-gauge ribbed knit sweater knit from chunky British wool. Features seamless saddle shoulders and rolled high collar in oatmeal melange.",
    fabric: "100% Pure New Wool. Hand wash cold.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 30,
    name: "Clean Cut Organic Cotton White Tee",
    category: "Tops",
    price: 45.00,
    originalPrice: null,
    rating: 4.8,
    reviews: 165,
    badge: "Essential",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&auto=format&fit=crop&q=80"
    ],
    description: "The immaculate foundational white t-shirt. Medium weight, non-see-through, tailored with a slim classic collar and pre-shrunk organic yarn.",
    fabric: "100% GOTS Certified Organic Cotton.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 31,
    name: "Fine Gauge Knitted Polo Shirt",
    category: "Tops",
    price: 85.00,
    originalPrice: 105.00,
    rating: 4.7,
    reviews: 53,
    badge: "New",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Silk-cotton blend knitted short-sleeve polo with retro open Johnny collar and ribbed waistband in rich taupe.",
    fabric: "55% Silk, 45% Cotton. Hand wash cold.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },

  // ===================== JEANS (6 Products) =====================
  {
    id: 32,
    name: "High-Rise Wide Leg Vintage Jeans",
    category: "Jeans",
    price: 110.00,
    originalPrice: 135.00,
    rating: 4.9,
    reviews: 142,
    badge: "Popular",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Constructed from durable non-stretch Japanese denim, these wide-leg jeans feature an ultra-flattering high waist, vintage whiskering, and clean ankle hems.",
    fabric: "100% Rigid Organic Cotton Denim. Wash inside out in cold water.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 33,
    name: "Classic Straight-Leg Washed Jeans",
    category: "Jeans",
    price: 115.00,
    originalPrice: null,
    rating: 4.8,
    reviews: 108,
    badge: "Bestseller",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&auto=format&fit=crop&q=80"
    ],
    description: "The timeless 90s silhouette. Straight cut through the leg with a comfortable mid-rise waist, silver shank hardware, and stonewashed indigo fading.",
    fabric: "100% Cotton Denim. Machine wash cold.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 34,
    name: "Slim Tapered Raw Denim Jeans",
    category: "Jeans",
    price: 125.00,
    originalPrice: 150.00,
    rating: 4.8,
    reviews: 67,
    badge: "Trending",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Modern slim-cut jeans tailored with 13oz selvedge denim. Offers a contoured fit through the thigh with a clean taper towards the ankle. Ages uniquely with every wear.",
    fabric: "99% Cotton, 1% Elastane Selvedge Denim.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 35,
    name: "Relaxed Boyfriend Distressed Jeans",
    category: "Jeans",
    price: 105.00,
    originalPrice: 130.00,
    rating: 4.7,
    reviews: 79,
    badge: "Sale",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Slouchy relaxed-fit jeans featuring gentle knee abrasion, frayed hems, and a comfortable low-slung waist for weekend ease.",
    fabric: "100% Organic Cotton. Machine wash cold.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 36,
    name: "High-Waisted 70s Flare Denim Jeans",
    category: "Jeans",
    price: 120.00,
    originalPrice: 145.00,
    rating: 4.9,
    reviews: 88,
    badge: "New",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Elongating bell-bottom silhouette fitted through the hips with dramatic knee-to-hem flare and retro patch front pockets.",
    fabric: "98% Cotton, 2% Spandex for comfortable give.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 37,
    name: "Cropped Ankle Skinny Jeans",
    category: "Jeans",
    price: 98.00,
    originalPrice: null,
    rating: 4.6,
    reviews: 112,
    badge: "Essential",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Form-fitting skinny jeans tailored to hit just above the ankle. Designed with high-retention stretch denim that never bags out at the knees.",
    fabric: "92% Cotton, 6% Polyester, 2% Elastane.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },

  // ===================== ACCESSORIES (6 Products) =====================
  {
    id: 38,
    name: "Minimalist Leather Crossbody Bag",
    category: "Accessories",
    price: 130.00,
    originalPrice: null,
    rating: 4.9,
    reviews: 89,
    badge: "Essential",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Handcrafted from buttery full-grain Italian leather with polished champagne-gold hardware and an adjustable shoulder strap. Includes interior card slots and magnetic flap closure.",
    fabric: "100% Full Grain Nappa Leather, Cotton twill lining.",
    sizes: ["One Size"],
    inStock: true
  },
  {
    id: 39,
    name: "Artisan Calfskin Leather Loafers",
    category: "Accessories",
    price: 165.00,
    originalPrice: 195.00,
    rating: 4.9,
    reviews: 54,
    badge: "Premium",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Hand-stitched leather loafers featuring horsebit metal hardware, cushioned memory-foam leather insoles, and stacked heels for all-day comfort.",
    fabric: "100% Calfskin leather upper, leather sole.",
    sizes: ["One Size"],
    inStock: true
  },
  {
    id: 40,
    name: "Oversized Wool Felt Fedora Hat",
    category: "Accessories",
    price: 75.00,
    originalPrice: 90.00,
    rating: 4.7,
    reviews: 43,
    badge: "New",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Molded from 100% Australian wool felt with a wide stiff brim, interior sweatband, and tonal grosgrain ribbon trim. Adds instantaneous sophistication to any ensemble.",
    fabric: "100% Wool Felt.",
    sizes: ["One Size"],
    inStock: true
  },
  {
    id: 41,
    name: "Structured Textured Leather Tote",
    category: "Accessories",
    price: 210.00,
    originalPrice: 250.00,
    rating: 4.8,
    reviews: 62,
    badge: "Sale",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Spacious everyday work tote crafted in scratch-resistant Saffiano leather. Designed to fit a 15-inch laptop, water bottle, and daily essentials with zippered center divider.",
    fabric: "100% Saffiano Leather.",
    sizes: ["One Size"],
    inStock: true
  },
  {
    id: 42,
    name: "Minimalist Chronograph Leather Watch",
    category: "Accessories",
    price: 190.00,
    originalPrice: null,
    rating: 4.9,
    reviews: 77,
    badge: "Bestseller",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Clean 38mm stainless steel casing with sapphire crystal glass, Japanese quartz movement, and interchangeable top-grain Italian leather strap.",
    fabric: "Stainless Steel Case, Italian Leather Strap, 5ATM Water Resistant.",
    sizes: ["One Size"],
    inStock: true
  },
  {
    id: 43,
    name: "Tortoiseshell Acetate Sunglasses",
    category: "Accessories",
    price: 85.00,
    originalPrice: 110.00,
    rating: 4.7,
    reviews: 65,
    badge: "Trending",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=800&auto=format&fit=crop&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Square vintage-inspired frames handcrafted from Italian Mazzucchelli acetate with 100% UV400 polarized amber lenses and barrel hinges.",
    fabric: "100% Handcrafted Acetate, Polarized Lenses.",
    sizes: ["One Size"],
    inStock: true
  }
];

/* --------------------------------------------------------------------------
   2. LocalStorage Cart Helper Functions
   -------------------------------------------------------------------------- */

/**
 * Retrieve current cart from localStorage
 * @returns {Array} Array of cart item objects
 */
function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("Error reading cart from localStorage:", err);
    return [];
  }
}

/**
 * Save cart to localStorage and update badges
 * @param {Array} cart 
 */
function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartBadge();
  } catch (err) {
    console.error("Error saving cart to localStorage:", err);
  }
}

/**
 * Add a product to cart (or increase quantity if already present)
 * @param {number} productId 
 * @param {string} size 
 * @param {number} quantity 
 */
function addToCart(productId, size = "M", quantity = 1) {
  const product = ZELORA_PRODUCTS.find(p => p.id === Number(productId));
  if (!product) {
    showToast("Product not found", "error");
    return;
  }

  const chosenSize = product.sizes.includes(size) ? size : (product.sizes[0] || "M");
  const cart = getCart();

  // Find matching item with same ID and same Size
  const existingItemIndex = cart.findIndex(
    item => item.id === product.id && item.size === chosenSize
  );

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += Number(quantity);
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.image,
      size: chosenSize,
      quantity: Number(quantity)
    });
  }

  saveCart(cart);
  showToast(`Added "${product.name}" (${chosenSize}) to your bag!`, "success");
}

/**
 * Update quantity of a specific cart item
 * @param {number} productId 
 * @param {string} size 
 * @param {number} delta - positive to add, negative to decrement
 */
function updateCartQuantity(productId, size, delta) {
  let cart = getCart();
  const index = cart.findIndex(item => item.id === Number(productId) && item.size === size);

  if (index > -1) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      // Remove if quantity becomes 0 or less
      cart.splice(index, 1);
      showToast("Item removed from cart", "error");
    }
    saveCart(cart);
  }
}

/**
 * Remove an item completely from cart
 * @param {number} productId 
 * @param {string} size 
 */
function removeFromCart(productId, size) {
  let cart = getCart();
  cart = cart.filter(item => !(item.id === Number(productId) && item.size === size));
  saveCart(cart);
  showToast("Item removed from your shopping bag", "error");
}

/**
 * Clear all items from cart
 */
function clearCart() {
  localStorage.removeItem(CART_STORAGE_KEY);
  localStorage.removeItem(COUPON_STORAGE_KEY);
  updateCartBadge();
}

/**
 * Get total quantity count of items in cart
 * @returns {number}
 */
function getCartCount() {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
}

/**
 * Update navbar badge counter on every page
 */
function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge-count');
  const count = getCartCount();
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  });
}

/* --------------------------------------------------------------------------
   3. Toast Notification Helper
   -------------------------------------------------------------------------- */
function showToast(message, type = "success") {
  let container = document.getElementById('zelora-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'zelora-toast-container';
    container.className = 'zelora-toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `zelora-toast toast-${type}`;
  
  const iconHtml = type === 'success' 
    ? '<i class="bi bi-check-circle-fill" style="color: #4ade80;"></i>'
    : '<i class="bi bi-exclamation-circle-fill" style="color: #f87171;"></i>';

  toast.innerHTML = `
    ${iconHtml}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  // Auto remove after 3.2 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3200);
}

/* --------------------------------------------------------------------------
   4. Product Card Template Generator
   -------------------------------------------------------------------------- */
function generateProductCardHtml(product) {
  const ratingStars = generateStarsHtml(product.rating);
  const originalPriceHtml = product.originalPrice 
    ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` 
    : '';

  const badgeHtml = product.badge
    ? `<span class="badge-tag badge-${product.badgeType || 'trending'}">${product.badge}</span>`
    : '';

  return `
    <div class="col-12 col-sm-6 col-lg-3 mb-4">
      <div class="product-card" data-product-id="${product.id}" data-category="${product.category}">
        <div class="product-thumb-container">
          <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80';">
          
          <div class="product-badges">
            ${badgeHtml}
          </div>

          <div class="product-quick-actions">
            <a href="product.html?id=${product.id}" class="btn-quick-action" title="View Details">
              <i class="bi bi-eye"></i>
            </a>
            <button class="btn-quick-action quick-add-btn" data-id="${product.id}" title="Quick Add to Bag">
              <i class="bi bi-bag-plus"></i>
            </button>
          </div>
        </div>

        <div class="product-info">
          <div class="product-category">${product.category}</div>
          <h5 class="product-title">
            <a href="product.html?id=${product.id}">${product.name}</a>
          </h5>
          
          <div class="product-rating">
            <div class="stars">${ratingStars}</div>
            <span class="review-count">(${product.reviews})</span>
          </div>

          <div class="product-price-row">
            <span class="current-price">$${product.price.toFixed(2)}</span>
            ${originalPriceHtml}
          </div>

          <button class="btn-add-cart quick-add-btn" data-id="${product.id}">
            <i class="bi bi-bag"></i> Add to Bag
          </button>
        </div>
      </div>
    </div>
  `;
}

function generateStarsHtml(rating) {
  let stars = '';
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="bi bi-star-fill"></i> ';
  }
  if (hasHalf) {
    stars += '<i class="bi bi-star-half"></i> ';
  }
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="bi bi-star"></i> ';
  }
  return stars;
}

/* --------------------------------------------------------------------------
   5. Home Page Logic (`index.html`)
   -------------------------------------------------------------------------- */
function initHomePage() {
  const featuredContainer = document.getElementById('featured-products-container');
  if (!featuredContainer) return;

  // Pick 8 curated top items across categories for homepage showcase
  const featured = ZELORA_PRODUCTS.slice(0, 8);
  featuredContainer.innerHTML = featured.map(p => generateProductCardHtml(p)).join('');

  attachQuickAddListeners();
}

/* --------------------------------------------------------------------------
   6. Shop Page Logic (`shop.html`)
   -------------------------------------------------------------------------- */
let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'featured';

function initShopPage() {
  const gridContainer = document.getElementById('shop-product-grid');
  if (!gridContainer) return;

  // Read URL query params: ?category=dresses&search=silk
  const urlParams = new URLSearchParams(window.location.search);
  const paramCategory = urlParams.get('category');
  const paramSearch = urlParams.get('search');

  if (paramCategory) {
    currentCategory = paramCategory.toLowerCase();
  }
  if (paramSearch) {
    currentSearch = paramSearch.trim().toLowerCase();
    const searchInput = document.getElementById('shop-search-input');
    if (searchInput) searchInput.value = paramSearch;
  }

  // Update active pill styling
  updateActiveFilterPills();

  // Initial render
  renderFilteredProducts();

  // Event Listeners for Category Filter Buttons
  const filterBtns = document.querySelectorAll('.category-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category').toLowerCase();
      renderFilteredProducts();
    });
  });

  // Search input live filtering
  const searchInput = document.getElementById('shop-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      renderFilteredProducts();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById('shop-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderFilteredProducts();
    });
  }

  // Reset filter button
  const resetBtn = document.getElementById('reset-filters-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentCategory = 'all';
      currentSearch = '';
      currentSort = 'featured';
      if (searchInput) searchInput.value = '';
      if (sortSelect) sortSelect.value = 'featured';
      updateActiveFilterPills();
      renderFilteredProducts();
    });
  }
}

function updateActiveFilterPills() {
  const filterBtns = document.querySelectorAll('.category-filter-btn');
  filterBtns.forEach(btn => {
    const cat = btn.getAttribute('data-category').toLowerCase();
    if (cat === currentCategory) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function renderFilteredProducts() {
  const gridContainer = document.getElementById('shop-product-grid');
  const emptyState = document.getElementById('shop-empty-state');
  const countDisplay = document.getElementById('products-count-display');
  if (!gridContainer) return;

  let filtered = ZELORA_PRODUCTS.filter(product => {
    // Category match
    const matchesCategory = currentCategory === 'all' || product.category.toLowerCase() === currentCategory;
    
    // Search match (checks name, category, and description)
    const matchesSearch = !currentSearch || 
      product.name.toLowerCase().includes(currentSearch) ||
      product.category.toLowerCase().includes(currentSearch) ||
      product.description.toLowerCase().includes(currentSearch);

    return matchesCategory && matchesSearch;
  });

  // Apply sorting
  if (currentSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (currentSort === 'newest') {
    filtered.sort((a, b) => b.id - a.id);
  }

  // Update counter
  if (countDisplay) {
    countDisplay.textContent = `Showing ${filtered.length} of ${ZELORA_PRODUCTS.length} pieces`;
  }

  // Handle empty state
  if (filtered.length === 0) {
    gridContainer.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
  } else {
    if (emptyState) emptyState.style.display = 'none';
    gridContainer.innerHTML = filtered.map(p => generateProductCardHtml(p)).join('');
    attachQuickAddListeners();
  }
}

/* --------------------------------------------------------------------------
   7. Product Detail Page Logic (`product.html`)
   -------------------------------------------------------------------------- */
let selectedSize = "M";

function initProductDetailPage() {
  const detailContainer = document.getElementById('product-detail-section');
  if (!detailContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  let productId = Number(urlParams.get('id'));

  // Default to item 1 if not specified or not found
  let product = ZELORA_PRODUCTS.find(p => p.id === productId);
  if (!product) {
    product = ZELORA_PRODUCTS[0];
  }

  // Update Page Title
  document.title = `${product.name} | ZELORA Fashion Store`;

  // Render Breadcrumb Name
  const breadcrumbName = document.getElementById('breadcrumb-product-name');
  if (breadcrumbName) breadcrumbName.textContent = product.name;

  // Populate Elements
  const mainImage = document.getElementById('detail-main-img');
  const title = document.getElementById('detail-title');
  const category = document.getElementById('detail-category');
  const price = document.getElementById('detail-price');
  const originalPrice = document.getElementById('detail-original-price');
  const ratingStars = document.getElementById('detail-rating-stars');
  const reviewCount = document.getElementById('detail-review-count');
  const description = document.getElementById('detail-description');
  const fabric = document.getElementById('detail-fabric');
  const thumbsContainer = document.getElementById('detail-thumbnails');
  const sizeContainer = document.getElementById('detail-size-options');
  const qtyInput = document.getElementById('detail-quantity-input');
  const btnMinus = document.getElementById('btn-qty-minus');
  const btnPlus = document.getElementById('btn-qty-plus');
  const btnAddToCart = document.getElementById('btn-detail-add-to-cart');
  const btnBuyNow = document.getElementById('btn-detail-buy-now');

  if (mainImage) mainImage.src = product.image;
  if (title) title.textContent = product.name;
  if (category) category.textContent = product.category;
  if (price) price.textContent = `$${product.price.toFixed(2)}`;
  if (originalPrice) {
    if (product.originalPrice) {
      originalPrice.textContent = `$${product.originalPrice.toFixed(2)}`;
      originalPrice.style.display = 'inline';
    } else {
      originalPrice.style.display = 'none';
    }
  }
  if (ratingStars) ratingStars.innerHTML = generateStarsHtml(product.rating);
  if (reviewCount) reviewCount.textContent = `(${product.reviews} customer reviews)`;
  if (description) description.textContent = product.description;
  if (fabric) fabric.textContent = product.fabric;

  // Render Thumbnails
  if (thumbsContainer) {
    const images = product.additionalImages || [product.image];
    thumbsContainer.innerHTML = images.map((imgUrl, index) => `
      <div class="thumb-item ${index === 0 ? 'active' : ''}" data-src="${imgUrl}">
        <img src="${imgUrl}" alt="Thumbnail ${index + 1}" loading="lazy">
      </div>
    `).join('');

    const thumbs = thumbsContainer.querySelectorAll('.thumb-item');
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        if (mainImage) mainImage.src = thumb.getAttribute('data-src');
      });
    });
  }

  // Render Size Options
  if (sizeContainer) {
    selectedSize = product.sizes[0] || "M";
    sizeContainer.innerHTML = product.sizes.map((sz, index) => `
      <button type="button" class="size-btn ${index === 0 ? 'active' : ''}" data-size="${sz}">${sz}</button>
    `).join('');

    const sizeBtns = sizeContainer.querySelectorAll('.size-btn');
    sizeBtns.forEach(b => {
      b.addEventListener('click', () => {
        sizeBtns.forEach(btn => btn.classList.remove('active'));
        b.classList.add('active');
        selectedSize = b.getAttribute('data-size');
      });
    });
  }

  // Quantity Stepper Handlers
  if (btnMinus && qtyInput) {
    btnMinus.addEventListener('click', () => {
      let val = parseInt(qtyInput.value) || 1;
      if (val > 1) {
        qtyInput.value = val - 1;
      }
    });
  }

  if (btnPlus && qtyInput) {
    btnPlus.addEventListener('click', () => {
      let val = parseInt(qtyInput.value) || 1;
      qtyInput.value = val + 1;
    });
  }

  // Add to Cart Button Handler
  if (btnAddToCart) {
    btnAddToCart.addEventListener('click', () => {
      const qty = parseInt(qtyInput ? qtyInput.value : 1) || 1;
      addToCart(product.id, selectedSize, qty);
    });
  }

  // Buy Now Handler (Adds to cart & navigates to cart.html)
  if (btnBuyNow) {
    btnBuyNow.addEventListener('click', () => {
      const qty = parseInt(qtyInput ? qtyInput.value : 1) || 1;
      addToCart(product.id, selectedSize, qty);
      window.location.href = 'cart.html';
    });
  }

  // Render Related Products (Same category, excluding current)
  const relatedContainer = document.getElementById('related-products-container');
  if (relatedContainer) {
    let related = ZELORA_PRODUCTS.filter(p => p.category === product.category && p.id !== product.id);
    if (related.length === 0) {
      related = ZELORA_PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);
    } else {
      related = related.slice(0, 4);
    }
    relatedContainer.innerHTML = related.map(p => generateProductCardHtml(p)).join('');
    attachQuickAddListeners();
  }
}

/* --------------------------------------------------------------------------
   8. Shopping Cart Page Logic (`cart.html`)
   -------------------------------------------------------------------------- */
const COUPONS = {
  'ZELORA10': 0.10, // 10% discount
  'WELCOME20': 0.20 // 20% discount
};

function initCartPage() {
  const cartTableBody = document.getElementById('cart-items-tbody');
  if (!cartTableBody) return;

  renderCart();

  // Clear Cart Handler
  const btnClear = document.getElementById('btn-clear-cart');
  if (btnClear) {
    btnClear.addEventListener('click', () => {
      if (confirm("Are you sure you want to clear your shopping bag?")) {
        clearCart();
        renderCart();
      }
    });
  }

  // Coupon Form Handler
  const couponBtn = document.getElementById('apply-coupon-btn');
  const couponInput = document.getElementById('coupon-input');
  if (couponBtn && couponInput) {
    couponBtn.addEventListener('click', () => {
      const code = couponInput.value.trim().toUpperCase();
      if (!code) {
        showToast("Please enter a coupon code", "error");
        return;
      }

      if (COUPONS[code]) {
        localStorage.setItem(COUPON_STORAGE_KEY, code);
        showToast(`Promo code "${code}" applied successfully!`, "success");
        renderCart();
      } else {
        showToast("Invalid promo code. Try 'ZELORA10'", "error");
      }
    });
  }

  // Checkout Modal Submission Simulation
  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic checkout validation
      const name = document.getElementById('checkout-name').value.trim();
      const email = document.getElementById('checkout-email').value.trim();
      const address = document.getElementById('checkout-address').value.trim();

      if (!name || !email || !address) {
        showToast("Please fill in all required shipping details", "error");
        return;
      }

      // Hide checkout modal and show confirmation
      const checkoutModalEl = document.getElementById('checkoutModal');
      const checkoutModal = bootstrap.Modal.getInstance(checkoutModalEl);
      if (checkoutModal) checkoutModal.hide();

      // Clear cart
      clearCart();
      renderCart();

      // Show Order Success Modal
      const successModalEl = document.getElementById('orderSuccessModal');
      if (successModalEl) {
        const orderNumEl = document.getElementById('confirmed-order-number');
        if (orderNumEl) {
          orderNumEl.textContent = `ZL-${Math.floor(100000 + Math.random() * 900000)}`;
        }
        const successModal = new bootstrap.Modal(successModalEl);
        successModal.show();
      }
    });
  }
}

function renderCart() {
  const cartTableBody = document.getElementById('cart-items-tbody');
  const cartContent = document.getElementById('cart-content-wrapper');
  const emptyCartState = document.getElementById('cart-empty-state');
  if (!cartTableBody) return;

  const cart = getCart();

  if (cart.length === 0) {
    if (cartContent) cartContent.style.display = 'none';
    if (emptyCartState) emptyCartState.style.display = 'block';
    updateCartBadge();
    return;
  }

  if (cartContent) cartContent.style.display = 'flex';
  if (emptyCartState) emptyCartState.style.display = 'none';

  // Render Table Rows
  cartTableBody.innerHTML = cart.map(item => {
    const itemTotal = (item.price * item.quantity).toFixed(2);
    return `
      <tr data-id="${item.id}" data-size="${item.size}">
        <td>
          <div class="d-flex align-items-center gap-3">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80';">
            <div>
              <h6 class="mb-1"><a href="product.html?id=${item.id}" class="text-dark">${item.name}</a></h6>
              <span class="badge bg-light text-dark border">Size: ${item.size}</span>
            </div>
          </div>
        </td>
        <td class="fw-semibold">$${item.price.toFixed(2)}</td>
        <td>
          <div class="qty-stepper">
            <button class="qty-btn cart-qty-minus" data-id="${item.id}" data-size="${item.size}">-</button>
            <input type="text" class="qty-input" value="${item.quantity}" readonly>
            <button class="qty-btn cart-qty-plus" data-id="${item.id}" data-size="${item.size}">+</button>
          </div>
        </td>
        <td class="fw-bold text-dark">$${itemTotal}</td>
        <td class="text-end">
          <button class="cart-remove-btn" data-id="${item.id}" data-size="${item.size}" title="Remove item">
            <i class="bi bi-trash3"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  // Attach Table Row Event Handlers
  cartTableBody.querySelectorAll('.cart-qty-minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const size = btn.getAttribute('data-size');
      updateCartQuantity(id, size, -1);
      renderCart();
    });
  });

  cartTableBody.querySelectorAll('.cart-qty-plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const size = btn.getAttribute('data-size');
      updateCartQuantity(id, size, 1);
      renderCart();
    });
  });

  cartTableBody.querySelectorAll('.cart-remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const size = btn.getAttribute('data-size');
      removeFromCart(id, size);
      renderCart();
    });
  });

  // Calculate Summary
  calculateAndRenderSummary(cart);
  updateCartBadge();
}

function calculateAndRenderSummary(cart) {
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  // Shipping logic: Free over $100, else $10
  const shipping = subtotal > 100 || subtotal === 0 ? 0.00 : 10.00;
  
  // Tax logic: 5% estimated
  const tax = subtotal * 0.05;

  // Coupon Logic
  const appliedCoupon = localStorage.getItem(COUPON_STORAGE_KEY);
  let discount = 0;
  if (appliedCoupon && COUPONS[appliedCoupon]) {
    discount = subtotal * COUPONS[appliedCoupon];
  }

  const grandTotal = Math.max(0, subtotal - discount + shipping + tax);

  // Update Summary DOM
  const subtotalEl = document.getElementById('summary-subtotal');
  const shippingEl = document.getElementById('summary-shipping');
  const taxEl = document.getElementById('summary-tax');
  const discountRow = document.getElementById('summary-discount-row');
  const discountEl = document.getElementById('summary-discount');
  const totalEl = document.getElementById('summary-total');
  const modalSubtotal = document.getElementById('modal-summary-subtotal');
  const modalTotal = document.getElementById('modal-summary-total');

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (shippingEl) {
    shippingEl.textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
  }
  if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
  
  if (discountRow && discountEl) {
    if (discount > 0) {
      discountRow.style.display = 'flex';
      discountEl.textContent = `-$${discount.toFixed(2)} (${appliedCoupon})`;
    } else {
      discountRow.style.display = 'none';
    }
  }

  if (totalEl) totalEl.textContent = `$${grandTotal.toFixed(2)}`;
  if (modalSubtotal) modalSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  if (modalTotal) modalTotal.textContent = `$${grandTotal.toFixed(2)}`;
}

/* --------------------------------------------------------------------------
   9. Quick Add to Cart Listener Binder
   -------------------------------------------------------------------------- */
function attachQuickAddListeners() {
  const quickAddBtns = document.querySelectorAll('.quick-add-btn');
  quickAddBtns.forEach(btn => {
    // Avoid double binding
    if (btn.dataset.bound) return;
    btn.dataset.bound = "true";

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const prod = ZELORA_PRODUCTS.find(p => p.id === Number(id));
      const defSize = prod && prod.sizes && prod.sizes.length ? prod.sizes[0] : "M";
      addToCart(id, defSize, 1);
    });
  });
}

/* --------------------------------------------------------------------------
   10. Form Validations (Contact & Newsletter)
   -------------------------------------------------------------------------- */
function initFormValidations() {
  // Contact Us Form
  const contactForm = document.getElementById('zelora-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contact-name');
      const email = document.getElementById('contact-email');
      const subject = document.getElementById('contact-subject');
      const message = document.getElementById('contact-message');

      let isValid = true;

      // Name Check
      if (!name.value.trim() || name.value.trim().length < 2) {
        setFieldError(name, 'Please provide your full name (minimum 2 characters)');
        isValid = false;
      } else {
        clearFieldError(name);
      }

      // Email Check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
        setFieldError(email, 'Please enter a valid email address');
        isValid = false;
      } else {
        clearFieldError(email);
      }

      // Subject Check
      if (!subject.value.trim() || subject.value.trim().length < 3) {
        setFieldError(subject, 'Please specify a subject');
        isValid = false;
      } else {
        clearFieldError(subject);
      }

      // Message Check
      if (!message.value.trim() || message.value.trim().length < 10) {
        setFieldError(message, 'Message must be at least 10 characters long');
        isValid = false;
      } else {
        clearFieldError(message);
      }

      if (isValid) {
        // Show Success Alert / Toast
        const successBox = document.getElementById('contact-success-alert');
        if (successBox) {
          successBox.style.display = 'block';
          successBox.scrollIntoView({ behavior: 'smooth' });
        }
        showToast("Thank you! Your message has been sent to the ZELORA team.", "success");
        contactForm.reset();
      }
    });
  }

  // Newsletter Forms
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.newsletter-input');
      if (!input) return;

      const email = input.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || !emailRegex.test(email)) {
        showToast("Please enter a valid email address to subscribe.", "error");
      } else {
        showToast("Welcome to the ZELORA Club! Enjoy 10% off your next order with code ZELORA10.", "success");
        input.value = '';
      }
    });
  });

  // Global Header Search Bar submission
  const navSearchForms = document.querySelectorAll('.nav-search-form');
  navSearchForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const searchInput = form.querySelector('input');
      if (searchInput && searchInput.value.trim()) {
        window.location.href = `shop.html?search=${encodeURIComponent(searchInput.value.trim())}`;
      }
    });
  });
}

function setFieldError(inputEl, errorMsg) {
  inputEl.classList.add('is-invalid-field');
  const errorEl = inputEl.parentElement.querySelector('.error-feedback');
  if (errorEl) {
    errorEl.textContent = errorMsg;
    errorEl.classList.add('show');
  }
}

function clearFieldError(inputEl) {
  inputEl.classList.remove('is-invalid-field');
  const errorEl = inputEl.parentElement.querySelector('.error-feedback');
  if (errorEl) {
    errorEl.classList.remove('show');
  }
}

/* --------------------------------------------------------------------------
   11. Global App Initialization
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // Sync Navbar Cart Badges
  updateCartBadge();

  // Page Specific Inits
  initHomePage();
  initShopPage();
  initProductDetailPage();
  initCartPage();
  initFormValidations();
});
