import axios from "axios";

const API_URL = 'https://api.coingecko.com/api/v3';
const key = "CG-qctQg1soDyBaLyjQ1GjkGmiH";

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'x-cg-demo-api-key': `${key}`
    }
});

export const fetchCryptoData = async (ids = "bitcoin") => {
    try {
        const response = await apiClient.get("/coins/markets", {
            params: {
                vs_currency: "usd",
                ids: ids,
                price_change_percentage: "1h",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching coin market data:", error);
        return [];
    }
}

export const searchCoins = async (query) => {
    if (!query) return [];
    try {
        const response = await apiClient.get("/search", {
            params: { query },
        });
        // Extract first 5 matching IDs for brevity
        return response.data.coins.slice(0, 5).map((coin) => coin.id);
    } catch (error) {
        console.error("Error searching coins:", error);
        return [];
    }
};