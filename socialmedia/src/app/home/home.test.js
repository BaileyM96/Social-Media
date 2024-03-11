import React from "react";
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor, getByText } from "@testing-library/react";
import Home from "./page";

describe('Home', () => {
    it('renders the home page', () => {
        render(<Home />)
    });
    it('should render the welcome message', () => {
        render(<Home />)
        const welcomeMessage = screen.getByText(/welcome to the home page/i);
        expect(welcomeMessage).toBeInTheDocument();
    });
})