export const headers = {
  "Content-Type": "application/json",
}


export async function fetchAndParse(input, init) {
  const response = await fetch(input, init);
  return response.json();
}