import React from "react";

function KnownFor({ movie }) {
    return (
        <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
            <h4>{movie.title || movie.name}</h4>
            <p><strong>Release Date:</strong> {movie.release_date || "N/A"}</p>
            <p><strong>Overview:</strong> {movie.overview || "No overview available."}</p>
        </div>
    );
}

export default KnownFor;
