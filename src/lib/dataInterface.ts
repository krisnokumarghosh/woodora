export interface FurnitureSpecification {
  material?: string;
  color?: string;
  dimensions?: string;
  weight?: string;
}


export interface Furniture {
  _id: string;
  name: string;
  image: string;
  description: string;
  details?: string;
  specification?: FurnitureSpecification;
  category: string;
  price: number;
}

export interface PaginatedFurnitureResponse {
  data: Furniture[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface GetFurnituresParams {
  search?: string;
  category?: string;
  page?: number;
  limit?: number;
}

export interface AddingResponse {
  acknowledged: boolean;
  insertedId: string;
}

export interface AddToCartPayload {
  userId: string;
  productId: string;
}

export interface DeleteCartResponse {
  acknowledged: boolean;
  deletedCount: number;
}

export interface Cart {
  _id: string;
  userId: string;
  productId: string;
  createdAt?: string;
}

export interface CartItemWithFurniture extends Cart {
  quantity: number;
  furniture: Furniture;
}

export interface OrderItem {
  furnitureId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface OrderPayload {
  userId: string;
  items: OrderItem[];
  subtotal: number;
}

export interface OrderItem {
  furnitureId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  _id: string;
  userId: string;
  items: OrderItem[];
  subtotal: number;
  status?: "pending" | "paid" | "shipped" | "delivered";
  createdAt: string;
}

// values match the exact `category` strings stored in the DB (Title Case)
export const FURNITURE_CATEGORIES: { label: string; value: string }[] = [
  { label: "All", value: "all" },
  { label: "Bedroom", value: "Bedroom" },
  { label: "Living Room", value: "Living Room" },
  { label: "Kitchen", value: "Kitchen" },
  { label: "Office Room", value: "Office Room" },
  { label: "Dining Room", value: "Dining Room" },
];
