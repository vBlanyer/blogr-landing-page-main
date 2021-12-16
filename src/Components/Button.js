import React from 'react';
import styled, { css } from 'styled-components';

export default function Button({className, children, onClick}) {
    return(
        <StyledButton className={className} onClick={onClick}>
            {children}
        </StyledButton>
    )
}

export const StyledButton = styled.button`
    display: inline-block;
    background-color: transparent;
    border: 0 solid white;
    padding: 1em 2em;
    border-radius: 45px;
    &:hover {
        background-color: hsl(355, 100%, 74%);
    }
    
    ${(props) => {
        switch (props.className) {
            case "btn--primary":
                return css`
                    background-color: hsl(356, 100%, 66%);
                    color: hsl(0, 0%, 100%);
                `;
            case "btn--secundary":
                return css`
                    background-color: hsl(0, 0%, 100%);
                    color: hsl(356, 100%, 66%);
                    &:hover {
                        color: hsl(0, 0%, 100%);
                    }
                `;
            case "btn--outline":
                return css`
                    border: 1px solid hsl(0, 0%, 100%);
                    color: hsl(0, 0%, 100%);
                    &:hover {
                        background-color: hsl(0, 0%, 100%);
                        color: hsl(356, 100%, 62%);
                    }
                `;
            case "btn--link":
                return css`
                    padding: 0;
                    color: hsl(240, 10%, 16%);
                    background-image: linear-gradient(currentColor, currentColor);
                    background-position: 50% 100%;
                    background-repeat: no-repeat;
                    background-size: 0% 2px;
                    transition: background-size .3s;
                    &:hover {
                        background-color: transparent;
                        background-size: 100% 2px;
                    }
                `;
            case "btn--link-reverse":
                return css`
                    padding: 0;
                    background-color: transparent;
                    color: hsl(0, 0%, 100%);
                    background-image: linear-gradient(currentColor, currentColor);
                    background-position: 50% 100%;
                    background-repeat: no-repeat;
                    background-size: 0% 2px;
                    transition: background-size .3s;
                    &:hover {
                        background-color: transparent;
                        background-size: 100% 2px;
                    }
                `;
            default:
                return css`
                    background-color: hsl(356, 100%, 66%);
                    color: hsl(0, 0%, 100%);
                `;
        }
    }}
`;