'use client'
import React from "react";
import { SearchHeader, StyledHeaderItems, StyledSearchIcon, SearchWrapper } from "./search.styled";
import { StyledAvatar } from "../home/home.styled";

export default function Search() {
    return (
        <>
        <SearchHeader>
            <StyledHeaderItems>
                <StyledAvatar />
                <SearchWrapper>
                    <StyledSearchIcon />
                </SearchWrapper>
            </StyledHeaderItems>
        </SearchHeader>
        </>
    )
}