import { fireEvent, render, screen } from "@testing-library/react"
import App from "../App"

test("memunculkan seluruh tag html dalam app", () => {
    render(<App />) // merender seluruh komponen react kita
    // screen.debug() // menampilkan hasil render ke console.log
    const btn = screen.getAllByRole("button") // selecting element

    fireEvent.click(btn[0])
    // screen.debug()
})