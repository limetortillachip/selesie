export async function getPhotos() {
  const url = "/api/photos/";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    //extract data
    const data = await response.json();

    // response to req
    console.log("Success:", data);
    return data;
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}
