import { render, screen } from "@testing-library/react";
import App from "../App";

test("melihat kata 'orias' ada di dalam aplikasi homepage", () => {
    render(<App/>)
    const text =screen.getByText(/ORIAS/i);
    expect(text).toBeInTheDocument();
})