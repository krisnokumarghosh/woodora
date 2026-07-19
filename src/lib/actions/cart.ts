"use server"

import { serverMutation } from "../core/server"
import { AddCartResponse, AddToCartPayload } from "../dataInterface"

export const addToCart = async (data: AddToCartPayload) => {
    return serverMutation<AddCartResponse>("/api/add/cart", data, "POST")
}