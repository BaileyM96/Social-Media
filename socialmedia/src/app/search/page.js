'use client'
import React from "react";
import { SearchHeader, StyledHeaderItems, StyledSearchIcon, SearchWrapper, StyledInputBase } from "./search.styled";
import { StyledAvatar } from "../home/home.styled";

export default function Search() {
    return (
        <>
        <SearchHeader>
            <StyledHeaderItems>
                <StyledAvatar />
                <SearchWrapper>
                    <StyledSearchIcon />
                    <StyledInputBase placeholder="Search" />
                </SearchWrapper>
            </StyledHeaderItems>
        </SearchHeader>
        </>
    )
}