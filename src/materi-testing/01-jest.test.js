import { penjumlahan, perkalian } from "./aritmatika_function";
import { potongGaji, sapa } from "./test_fungsi";

describe("basic testing (judul grouping kita)", () => {
  test("judul testing", () => {
    // isi fungsi testing kita
    // contoh :
    expect(true).toBe(true);
  });
  // bisa pakai test atau it
  it("menjumlahkan nilai", () => {
    // expect(1+1).toBe(3) gagal
    // expect(1+1).toBe(2) success
    expect(1 + 1).toBe(2);
  });
});

describe("group testing aritmatika", () => {
  // tdd => Test Driven Development , kita buat testnya baru buat functionnya
  test("fungsi penjumlahan", () => {
    expect(penjumlahan(3, 2)).toBe(5);
    expect(penjumlahan(4, 8)).toBe(12);
    expect(perkalian(3, 5)).toBe(15);
    expect(perkalian(5, 13)).toBe(65);
  });
});

describe("testing orias", () => {
  test("mengetahui gaji bersih dikurangi pajak", () => {
    expect(potongGaji(100000)).toBe(`Gaji bersih anda yaitu Rp90000`);
  });

  test("Menyapa nama", () => {
    expect(sapa("orias")).toBe("Halo oris");
  });

  const arr = ["a", 1, "c"];

  test("coba toContain dengan array", () => {
    expect(arr).toContain("c");
  });
});
