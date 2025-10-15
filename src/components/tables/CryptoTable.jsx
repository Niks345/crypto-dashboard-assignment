import React, { useState } from "react";
import "../../styles/CryptoTable.css";

export const CryptoTable = ({ data, themeName, search, setSearch }) => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

    const sortedData = [...data];
    if (sortConfig.key) {
        sortedData.sort((a, b) => {
            let aVal = a[sortConfig.key] ?? "";
            let bVal = b[sortConfig.key] ?? "";

            if (typeof aVal === "number" && typeof bVal === "number") {
                return sortConfig.direction === "asc" ? aVal - bVal : bVal - aVal;
            }
            return sortConfig.direction === "asc"
                ? aVal.toString().localeCompare(bVal.toString())
                : bVal.toString().localeCompare(aVal.toString());
        });
    }

    const requestSort = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
        setSortConfig({ key, direction });
    };

    return (
        <table className={`crypto-table ${themeName === "dark" ? "dark" : ""}`}>
            <thead>
                <tr>                    <th>
                    <input
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search..."
                        className="table-search-input"
                    />
                </th></tr>
                <tr>
                    <th onClick={() => requestSort("market_cap_rank")}>Rank ⬍</th>
                    <th>Thumb</th>
                    <th onClick={() => requestSort("name")}>Name ⬍</th>
                    <th onClick={() => requestSort("symbol")}>Symbol ⬍</th>
                    <th onClick={() => requestSort("current_price")}>Price ⬍</th>
                    <th>Price Changes In 24h</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map((coin) => (
                    <tr key={coin.id}>
                        <td>{coin.market_cap_rank || "-"}</td>
                        <td>
                            <img src={coin.image} alt={coin.name} />
                        </td>
                        <td>{coin.name}</td>
                        <td>{coin.symbol}</td>
                        <td>{coin.current_price}</td>
                        <td>{coin.price_change_percentage_24h}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};