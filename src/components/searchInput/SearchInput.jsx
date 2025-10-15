import React, { useState, useEffect } from "react";
import { useSearch } from "../../hooks/search.hooks";
import "../../styles/SearchInput.css";

export const SearchInput = ({ onSearch }) => {
    const [value, setValue] = useState("");
    const debouncedValue = useSearch(value, 300);

    useEffect(() => {
        onSearch(debouncedValue);
    }, [debouncedValue, onSearch]);

    return (
        <input
            type="text"
            className="search-input search-input-right"
            placeholder="Search..."
            value={value}
            onChange={e => setValue(e.target.value)}
        />
    );
};
