import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("percobaan click event button dan selecting", () => {
  it("memastikan text sebelum di klik sesuai", () => {
    render(<App />); // merender seluruh komponen react kita
    const text = screen.getByText(/saya sedang sembunyi/i);
    expect(text).toBeInTheDocument();
  });
  it("memastikan text content di button sebelum di klik sesuai", () => {
    render(<App />); // merender seluruh komponen react kita
    const text = screen.getByText(/munculkan/i);
    expect(text).toBeInTheDocument();
  });

  test("memastikan text setelah di klik sesuai", () => {
    render(<App />); // merender seluruh komponen react kita
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    const text = screen.getByText(/saya sedang muncul/i);
    expect(text).toBeInTheDocument();
  });

  it("memastikan text content di button setelah di klik sesuai", () => {
    render(<App />); // merender seluruh komponen react kita
    
    //bisa juga select button by text
    const btn = screen.getByText(/munculkan/i);
    fireEvent.click(btn);
    const text = screen.getByText(/sembunyikan/i);
    expect(text).toBeInTheDocument();
  });

});
