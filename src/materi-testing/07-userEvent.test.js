import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import ComponentUserEvent from "./ComponentUserEvent";

it("testing onChange event ketika typing", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText("input value");
  expect(inputElement).toBeInTheDocument();
  // kita menggunakan userEvent , karena lebih banyak yang bisa digunakan
  act(() => {
    userEvent.type(inputElement, "Orias"); // simulasi type ke input
  });
  expect(screen.getByText("Anda mengetik Orias")).toBeInTheDocument();
  

});


// mocking => membuat suatu dummy
const MOCK_SUBMIT_BTN = jest.fn();



it("test onClick pada button submit di component user event", () => {
    render(<ComponentUserEvent onSubmit={MOCK_SUBMIT_BTN}/>)
    const button = screen.getByTestId("submit-btn")
    expect(button).toBeInTheDocument()
  act(() => {
    userEvent.click(button)
  })
  expect(MOCK_SUBMIT_BTN).toHaveBeenCalled()
})