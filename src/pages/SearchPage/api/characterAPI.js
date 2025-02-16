const BASE_URL = 'https://rickandmortyapi.com/api/character';

// Все персонаи с совпадениями в имени
export const fetchFilterByName = async (name) => {
    try {
        const response = await fetch(BASE_URL + '/?name=' + encodeURIComponent(name));
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch character list:", error);
        throw error;
    }
}