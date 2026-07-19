"use server";

import { serverMutation } from "../core/server";
import { AddingResponse, AddToCartPayload, DeleteCartResponse, OrderPayload } from "../dataInterface";

export const addToCart = async (data: AddToCartPayload) => {
  return serverMutation<AddingResponse>("/api/add/cart", data, "POST");
};

export const deleteCartById = async (cartId: string) => {
  return serverMutation<DeleteCartResponse>(`/api/d/cart/${cartId}`, null, "DELETE");
};

export const createOrder = async (data: OrderPayload) => {
  return serverMutation<AddingResponse>("/api/create/order", data, "POST")
}