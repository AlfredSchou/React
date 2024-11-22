import React from "react";
import KnownFor from "./KnownFor";
import ImagesFor from "./ImagesFor";

function Person({ person }) {
    return (
        <div>
            <h2>{person.name}</h2>
            <p>Known For: {person.known_for_department}</p>

            {/* Render profile pictures */}
            <ImagesFor id={person.id} />

            {/* Render the Known For section */}
            <h3>Known For</h3>
            <div>
                {person.known_for.map((movie, index) => (
                    <KnownFor key={index} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Person;
