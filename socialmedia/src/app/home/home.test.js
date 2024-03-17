import React from "react";
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GET_POSTS } from "./page";
import Home from "./page";

const mocks = [{
    request: {
        query: GET_POSTS,
    },
    result: {
        data: {
            posts: [
                {
                    id: '1',
                    content: 'Post content from friends',
                }
            ]
        }
    }
}]

describe('Home', () => {
    it('renders the home page', () => {
        render(<Home />)
    });
    it('should render the welcome message', () => {
        render(<Home />)
        const welcomeMessage = screen.getByText(/welcome to the home page/i);
        expect(welcomeMessage).toBeInTheDocument();
    });
    it('should render friends posts', async () => {
        render(<MockedProvider mocks={mocks} addTypename={false}>
            <Home />
        </MockedProvider>)

        const post1 = await screen.findByText(/post content from friends/i);
        expect(post1).toBeInTheDocument();
    })
})