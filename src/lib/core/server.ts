const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const serverFetch = async <T>(path: string): Promise<T> => {
  const res = await fetch(`${baseUrl}${path}`);

  return res.json() as Promise<T>;
};
