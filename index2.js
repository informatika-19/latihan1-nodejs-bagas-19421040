const nilai = 80
let nilaiHuruf, ket

//logika bercabang
if(nilai >=85){
    nilaiHuruf = 'A'
    ket = 'sangat baik'

}else if (nilai >= 75){
    nilaiHuruf= 'B'
    ket = 'Baik'
}else if (nilai >= 65){
    nilaiHuruf= 'C'
    ket ='CUKUP'
}else if (nilai >= 55){
    nilaiHuruf= 'd'
    ket="buruk"
}else {
    nilaiHuruf ='E'
    ket='SANGAT BURUK'
}
console.log(' NILAI ANDA '+ nilaiHuruf + ' ('+ ket +')')
