export function potongGaji(gaji){
    const pajak = 10/100;
    const gajiBersih = gaji - (gaji * pajak);
    return `Gaji bersih anda yaitu Rp${gajiBersih}`
}


export function sapa(nama){
    return `Halo ${nama}`
}