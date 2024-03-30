'use client';
import React from "react";
import { useRouter } from "next/navigation";
import { StyledComposeContainer, StyledComposeField, ComposeHeader, StyledButton, StyledSkeletonContainer } from "./compose.styled";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { StyledAvatar } from "../../home/home.styled";
import { apolloClient } from "../../lib/apolloClient";
import { GET_USER } from "../../utils/query";
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_POST } from "../../utils/mutations";
import Skeleton  from "@mui/material/Skeleton";
import Stack from '@mui/material/Stack';




export default function Compose() {

    const { loading, error, data } = useQuery(GET_USER, {
        client: apolloClient,
        variables: {
            email: 'baileymejia28@gmail.com'
        }
    });

    const [postField, setPostField] = useState({
        content: ''
    });

    const router = useRouter();

    const handleInputField = (e) => {
        const { name, value } = e.target;
        setPostField({ ...postField, [name]: value })
    }

    const [createPost] = useMutation(CREATE_POST, {
        client: apolloClient,
    })

    if (loading) 
    return
        <Stack spacing={1}>
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="text" width={200} height={40} />
            <Skeleton variant="round" width={200} height={200} />
        </Stack>
    ;
    
    if (error) return `Error! ${error.message}`;

    const handlePost = async (e) => {
        e.preventDefault();
        try {
            await createPost({
                variables: {
                    content: postField.content,
                    authorId: '65d28475b8449265f68f9b4b'
                },
            });
            setPostField({ content: '' });
        } catch (error) {
            console.error(error)
        }
    }

    const handleBack = () => {
        router.push('/home');
    };

    return (
        <>
            <ComposeHeader>
                <ArrowBackIcon onClick={handleBack}/>
                <StyledButton variant="contained" color="primary" onClick={handlePost} disabled={!postField.content.trim()}>Post</StyledButton>
            </ComposeHeader>

            <StyledComposeContainer>
                <StyledAvatar>{data.user.username[0]}</StyledAvatar>
                <StyledComposeField
                    id="standard-multiline-flexible"
                    label="What's on your mind?"
                    multiline
                    maxRows={5}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                    name="content"
                    value={postField.content}
                    onChange={handleInputField}      
                />
            </StyledComposeContainer>
        </>
    )
}