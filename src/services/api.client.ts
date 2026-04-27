const BASE_URL = "https://the-one-api.dev/v2";
const API_KEY = import.meta.env.THE_ONE_API_KEY;

export async function apiFetch<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Error en la API: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}
