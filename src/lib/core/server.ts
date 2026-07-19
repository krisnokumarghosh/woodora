const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const serverMutation = async <T = unknown>(
  path: string,
  data?: unknown,
  methode: string = "POST",
): Promise<T> => {
  const options: RequestInit = {
    method: methode,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const res = await fetch(`${baseUrl}${path}`, options);
  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message);
  }

  return result;
};

export const serverFetch = async <T>(path: string): Promise<T> => {
  const res = await fetch(`${baseUrl}${path}`);

  return res.json() as Promise<T>;
};
