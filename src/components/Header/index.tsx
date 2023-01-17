import React from "react";
import { HeaderStyled } from "./styles";

export const Header = () => {
    return (
        <HeaderStyled>
            <div>
                <h1>AlgaStock</h1>
                <button>
                    login
                </button>
            </div>
        </HeaderStyled>
    )
}