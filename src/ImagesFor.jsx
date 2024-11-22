import React, { useEffect, useState } from "react";

function ImagesFor({ id }) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Fetch the images for the person using their id
        fetch(`https://api.themoviedb.org/3/person/${id}/images?api_key=8de78cefdabf3358c01b68d636068b18`)
            .then((res) => res.json())
            .then((data) => setImages(data.profiles || []));
    }, [id]);

    if (images.length === 0) {
        return <p>No images available.</p>;
    }

    return (
        <div>
            <h3>Profile Pictures</h3>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={`https://image.tmdb.org/t/p/w185${image.file_path}`}
                        alt="Profile"
                        style={{ width: "150px", height: "auto", borderRadius: "8px" }}
                    />
                ))}
            </div>
        </div>
    );
}

export default ImagesFor;
