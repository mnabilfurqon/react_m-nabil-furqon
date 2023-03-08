function cekGanjilGenap(n) {
  if (n % 2 === 0) {
    console.log(n + " adalah bilangan genap");
  } else {
    console.log(n + " adalah bilangan ganjil");
  }
}

// Contoh penggunaan fungsi cekGanjilGenap
let nomorPlat = "B 1234 CD";
let tanggal = 8;

let nomorPlatArr = nomorPlat.split(" ");
let nomor = nomorPlatArr[1];

if (tanggal % 2 === 0 && nomor % 2 === 1) {
  console.log("Mobil dengan plat nomor " + nomorPlat + " tidak boleh melintas pada tanggal " + tanggal);
} else {
  console.log("Mobil dengan plat nomor " + nomorPlat + " boleh melintas pada tanggal " + tanggal);
}