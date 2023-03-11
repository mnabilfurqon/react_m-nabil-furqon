const prompt = require("prompt-sync")();

function cekGanjilGenap(n) {
  if (n % 2 === 0) {
    console.log(n + " adalah bilangan genap");
  } else {
    console.log(n + " adalah bilangan ganjil");
  }
}

let nomorPlat = prompt("Masukkan nomor plat (contoh: B 1234 CD)");
let tanggal = prompt("Masukkan tanggal (contoh: 8)");

let nomorPlatArr = nomorPlat.split(" ");
let nomor = nomorPlatArr[1];

if (tanggal % 2 === 0 && nomor % 2 === 1) {
  console.log("Mobil dengan plat nomor " + nomorPlat + " tidak boleh melintas pada tanggal " + tanggal);
} else {
  console.log("Mobil dengan plat nomor " + nomorPlat + " boleh melintas pada tanggal " + tanggal);
}