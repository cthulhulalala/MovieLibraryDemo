import styled from "styled-components";
import Image from "../../Assets/Images/1.jpg";

export const MovieCardContainer = styled.div`
    width: 200px;
    height: 300px;
    background-color: blue;
    border: none;
    outline: none;
    box-sizing: border-box;
    overflow: hidden;
    display: block;
    border-radius: 20px;
`;

export const BackgroundImage1 = styled.div`
    //* shadow type 1

    height: 100%;
    background: linear-gradient(to bottom, #ffffff00 50%, #000000 85%),
        url(${Image}) no-repeat center;
    background-size: cover;
`;
