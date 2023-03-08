function hitungFaktorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * hitungFaktorial(n - 1);
  }
}

// Contoh penggunaan fungsi hitungFaktorial
let bilangan = 5;
let hasilFaktorial = hitungFaktorial(bilangan);
console.log("Faktorial dari " + bilangan + " adalah " + hasilFaktorial);