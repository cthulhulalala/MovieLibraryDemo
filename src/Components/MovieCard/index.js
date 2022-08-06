import React from "react";

// import Image from "../../Assets/Images/1.jpg";
import {
    MovieCardContainer,
    BackgroundImage1,
    BackgroundImage2,
    BackgroundImage3,
} from "./MovieCardElements";

const MovieCard = () => {
    return (
        <>
            <MovieCardContainer>
                <BackgroundImage1 />
            </MovieCardContainer>
            <MovieCardContainer>
                <BackgroundImage2 />
            </MovieCardContainer>
            <MovieCardContainer>
                <BackgroundImage3 />
            </MovieCardContainer>
        </>
    );
};

export default MovieCard;
