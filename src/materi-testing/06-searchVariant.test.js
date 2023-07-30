import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

//ada 3 yaitu getBy, queryBy dan findBy

test("melakukan testing untuk queryBy dan findBy", async () => {
    render(<App />);
    // const txt = screen.getByText(/selamat datang/i) // error klo gini karena msh undefined selama 1 detik
    const txt = screen.queryByText(/selamat datang/i) // ga error
    
    expect(txt).toBeNull()

    const txt2 = await screen.findByText(/selamat datang/i); // dengan findByText kita bisa pakai asynchronous sehingga delay 1 detiknya bisa terbaca

    expect(txt2).toBeInTheDocument()
})

// klo multiple pake yg ada key All
test("melakukan render p sebanyak total hari", () => {
    render(<App />);
    const data = screen.getAllByTestId("hari")
    const rabu = data[2]
    expect(data).toHaveLength(7)
    fireEvent.click(rabu);
    const textKLIKED = screen.queryByText(/diklik/i);
    // screen.debug()
    expect(textKLIKED).toBeInTheDocument()
})