import { serverFetch } from "../core/server";
import { Cart, Order } from "../dataInterface";

export const getCartByUserId = async (userId: string) => {
  return serverFetch<Cart[]>(`/api/uid/cart/${userId}`);
};

export const getOrderByUserId = async (userId: string) => {
  return serverFetch<Order[]>(`/api/uid/orders/${userId}`);
};
