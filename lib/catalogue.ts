/**
 * =====================================================================
 *  IT HARDWARE PRODUCT CATALOGUE — central product data
 * =====================================================================
 *
 *  Everything on /catalogue comes from this file.
 *
 *  No product list was supplied yet, so `products` is EMPTY on purpose.
 *  While it is empty, /catalogue shows the hardware categories with a
 *  "Request a Quote" option for each — no invented products, brands,
 *  models, specifications, prices or stock levels are displayed.
 *
 *  HOW TO ADD A PRODUCT
 *  1. Put the product photo in /public/catalogue/ (e.g. /public/catalogue/my-laptop.webp).
 *  2. Add an object to `products` — copy this template:
 *
 *     {
 *       id: 'unique-id',                     // lowercase, no spaces
 *       name: 'Product name',
 *       brand: 'Brand',
 *       model: 'Model number',
 *       category: 'laptops-computers',        // one of the category ids below
 *       specs: ['Spec line 1', 'Spec line 2'],
 *       pricePkr: 'PKR 000,000',              // omit → shows "Contact for Pricing"
 *       availability: 'In Stock',             // see Availability type
 *       image: { src: '/catalogue/my-laptop.webp', alt: 'Describe the photo' },
 *     },
 *
 *  As soon as one product exists, the page switches to the full
 *  catalogue view with search and category filters.
 *
 *  This is a B2B quotation catalogue: there is no cart or checkout.
 * =====================================================================
 */

import {
  Cctv,
  HardDrive,
  Laptop,
  Mouse,
  Network,
  Server,
  type LucideIcon,
} from 'lucide-react'

export interface CatalogueCategory {
  id: string
  title: string
  icon: LucideIcon
}

export const catalogueCategories: CatalogueCategory[] = [
  { id: 'laptops-computers', title: 'Laptops & Computers', icon: Laptop },
  { id: 'servers', title: 'Servers', icon: Server },
  { id: 'networking', title: 'Networking Equipment', icon: Network },
  { id: 'accessories', title: 'Computer Accessories', icon: Mouse },
  { id: 'cctv-security', title: 'CCTV & Security Equipment', icon: Cctv },
  { id: 'it-infrastructure', title: 'IT Infrastructure', icon: HardDrive },
]

export type Availability =
  | 'In Stock'
  | 'Available on Order'
  | 'Out of Stock'
  | 'Contact for Availability'

export interface Product {
  id: string
  name: string
  brand: string
  model: string
  /** Must match a `catalogueCategories` id. */
  category: string
  specs: string[]
  /** Price text exactly as it should appear. Omit to show "Contact for Pricing". */
  pricePkr?: string
  availability: Availability
  image?: { src: string; alt: string }
}

export const products: Product[] = [
  // Add products here — see the template at the top of this file.
]
