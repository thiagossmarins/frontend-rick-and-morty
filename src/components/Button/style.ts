import styled from "styled-components";
import { device } from "../../styles/device";

export const Btn = styled.button`
    display: inline-block;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 8px;
    text-align: center;
    padding: 10px;
    color: #fff;
    font-size: var(--font-size-default);
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;

    @media ${device.mobile} {
        position: absolute;
        top: -7%;
        left: 0;
    }
`