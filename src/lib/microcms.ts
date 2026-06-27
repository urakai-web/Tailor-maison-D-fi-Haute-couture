const serviceDomain = "yugkdusiw5";
const apiKey = "R8dDqbbHrMaM0N9Ira9vyPWzaYcFzeJCBM8i";

const baseUrl = `https://${serviceDomain}.microcms.io/api/v1`;

export async function fetchList<T>(endpoint: string, limit = 50): Promise<T[]> {
  const res = await fetch(`${baseUrl}/${endpoint}?limit=${limit}`, {
    headers: { "X-MICROCMS-API-KEY": apiKey },
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data.contents ?? [];
}

export type Tag = {
  id: string;
  name: string;
};

export type Case = {
  id: string;
  title: string;
  image: { url: string };
  instagramURL: string;
  tag: Tag[];
};
