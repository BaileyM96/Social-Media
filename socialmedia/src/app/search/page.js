'use client'
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { apolloClient } from "../lib/apolloClient";
import { SearchHeader, StyledHeaderItems, StyledSearchIcon, SearchWrapper, StyledInputBase } from "./search.styled";
import { StyledAvatar } from "../home/home.styled";
import { GET_USER } from "../utils/query";

//Need to allow user to input users search name
 //This needs to be able to track state of input

 //THEN Need to add a search button that will search the database for the user
    //If the user is found, display the user's profile
        //This will use router.push to redirect to the user's profile page
            //redirect the user to the profile component, this needs some tweaking now 
    //If the user is not found, display a message saying the user was not found

//THEN it will show send friend request button
    //If the user is already a friend, it will show a message saying the user is already a friend
    //If the user is not a friend, it will show a button to send a friend request


export default function Search() {
    //This is what we return when we search for a user
    // const { data, loading, error } = useQuery(GET_USER, {
    //     client: apolloClient,
    //     variables: { username: "Daisy" }
    // });

    const [search, setSearch] = useState({
        search: ''
    });

    const handleSearchInput = (e) => {
        setSearch({ search: e.target.value });
    }

    const handleSearchProfile = async (e) => {
        e.preventDefault();
        try {
            await search({
                variables: {
                    username: search.username
                }
            })
            setSearch({ search: '' });
        } catch (error) {
            console.error('Error searching for user', error)
        }
        
    }

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;
    // console.log(data);
    return (
        <>
        <SearchHeader>
            <StyledHeaderItems>
                <StyledAvatar />
                <SearchWrapper> 
                    <StyledSearchIcon />
                    <StyledInputBase placeholder="Search"onChange={handleSearchInput} />
                </SearchWrapper>
            </StyledHeaderItems>
        </SearchHeader>
        </>
    )
}