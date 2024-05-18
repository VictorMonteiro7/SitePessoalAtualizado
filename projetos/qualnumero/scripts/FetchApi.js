export default async function FetchApi(url) {
  if (!url) throw new Error("Está faltando a URL");
  try {
    const link = await fetch(url);
    const response = await link.json();
    return response;
  } catch (err) {
    throw new Error(err);
  }
}
