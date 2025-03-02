const API_URL = "https://theastrologer-api.herokuapp.com/api/horoscope"; 

export async function fetchHoroscope(sign: string, day: string = "today") {
  try {
    const response = await fetch(`${API_URL}/${sign}/${day}`);
    if (!response.ok) {
      throw new Error("Failed to fetch horoscope");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching horoscope:", error);
    return null;
  }
}
