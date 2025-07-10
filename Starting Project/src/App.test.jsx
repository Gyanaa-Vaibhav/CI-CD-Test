import { render, screen } from '@testing-library/react';
import App from "./App"

describe("Should test if ENV Exists and is visible", () => {
    it("ENV Test", () => {
        console.log(import.meta.env.VITE_TEST)
        render(<App />);

        expect(screen.getByRole("heading", { name: import.meta.env.VITE_TEST, exact: true })).toBeInTheDocument();
    })
})