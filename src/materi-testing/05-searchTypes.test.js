import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("select sebuah element yang memiliki text dengan getByText" , () => {
    // contoh <p> text ini </p>
    render(<App />);
    const element = screen.getByText(/munculkan/i)
    // screen.debug(element)
})

test("select sebuah element  yang memiliki dengan getByRole" , () => {
    // contoh <p> text ini </p>
    render(<App />);
    const element = screen.getAllByRole("button")
    // screen.debug(element)
})

test("select sebuah element <input>  yang memiliki placeholder dengan getByPlaceholderText" , () => {
    // contoh <input placeholder="masukkan email" />
    render(<App />);
    const element = screen.getByPlaceholderText(/masukkan email/i)
    // screen.debug(element)
})

test("select sebuah element <img>  yang memiliki altText dengan getByAltText" , () => {
    // contoh <input placeholder="masukkan email" />
    render(<App />);
    const element = screen.getByAltText(/TESt-img/i)
    // screen.debug(element)
})

test("select sebuah element <input>  yang memiliki value dengan getByDisplayValue" , () => {
    // contoh <input value="oriastan999@gmail.com" />
    render(<App />);
    const element = screen.getByDisplayValue(/oriastan999@gmail.com/i)
    // screen.debug(element)
})

test("select sebuah element dengan testId menggunakan getByTestId" , () => {
    // contoh <input data-testid="axvb" />
    render(<App />);
    const element = screen.getByTestId(/axvb/i)
    // screen.debug(element)
})