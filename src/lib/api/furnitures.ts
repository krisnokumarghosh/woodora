import { serverFetch } from "../core/server";
import { GetFurnituresParams, PaginatedFurnitureResponse } from "../dataInterface";


export const getAllFurnitures = (params: GetFurnituresParams = {}) => {
  const { search, category, page = 1, limit = 12 } = params;

  const query = new URLSearchParams();
  if (search) query.set("search", search);
  if (category && category !== "all") query.set("category", category);
  query.set("page", String(page));
  query.set("limit", String(limit));

  return serverFetch<PaginatedFurnitureResponse>(
    `/api/furnitures?${query.toString()}`
  );
};