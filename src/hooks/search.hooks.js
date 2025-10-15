import { useEffect, useState } from "react";

export const useSearch = (value, delay = 300) => {
    const [filteredData, setFilteredData] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => setFilteredData(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);

    return filteredData;
};