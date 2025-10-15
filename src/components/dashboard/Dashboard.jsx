import React, { useState, useEffect } from "react";
import { fetchCryptoData } from "../../services/CryptoService"
import { CryptoTable } from "../tables/CryptoTable";
import { ThemeToggle } from "../helpers/ThemeToggle";
import { useTheme, themes } from "../../styles/ThemeProvider";
import "../../styles/Dashboard.css";

export const Dashboard = () => {
    const { themeName, theme } = useTheme();
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    useEffect(() => {
        // set CSS variables for colors
        const root = document.documentElement;
        const t = themeName === "dark" ? themes.dark : themes.light;

        root.style.setProperty("--bg-color", t.background);
        root.style.setProperty("--text-color", t.text);
        root.style.setProperty("--card-bg", t.card);
        root.style.setProperty("--border-color", t.border);
        root.style.setProperty("--table-header-bg", t.tableHeader);
        root.style.setProperty("--table-row-bg", t.tableRow);
        root.style.setProperty("--table-row-alt-bg", t.tableRowAlt);
    }, [themeName]);

    // Load data on mount
    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                setError("");
                const result = await fetchCryptoData("");
                setData(result);
                setFilteredData(result);
            } catch {
                setError("Failed to load data");
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    // Filter data locally
    useEffect(() => {
        if (!search) {
            setFilteredData(data);
            setCurrentPage(1);
            return;
        }
        const lowerSearch = search.toLowerCase();
        const filtered = data.filter(
            coin =>
                coin.name.toLowerCase().includes(lowerSearch)
        );
        setFilteredData(filtered);
        setCurrentPage(1);
    }, [search, data]);

    const currentItems = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className={`container ${themeName === "dark" ? "app-dark" : "app-light"}`}>
            <div className="dashboard-header">
                <h1>Crypto Dashboard</h1>
                <ThemeToggle />
            </div>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {!loading && !error && (
                <>
                    <CryptoTable
                        data={currentItems}
                        themeName={themeName}
                        search={search}
                        setSearch={setSearch}
                    />
                    <div className="pagination">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Prev
                        </button>
                        <span>
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};