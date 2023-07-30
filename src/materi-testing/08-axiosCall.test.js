import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import App from "../App"
import { act } from "react-dom/test-utils";

// mocking axios

jest.mock("axios") // fungsinya kita hanya mock saja fungsi dari axios nya

it("memastikan list user dengan call axios", async () => {
    const users = [
        {
            id : 1,
            name : "ori"
        },
        {
            id : 2,
            name : "ori1"
        },
        {
            id : 3,
            name : "ori2"
        },
        {
            id : 4,
            name : "ori3"
        },
    ]
    axios.get.mockImplementation(() => Promise.resolve({
        data : users
    }))
    render(<App />)

    const btn = screen.getByTestId("get-users")
    act(() => {
        userEvent.click(btn)
    })
    
    await waitFor(() => {
      expect(screen.getAllByTestId("user-name")).toHaveLength(users.length)  
    })

})