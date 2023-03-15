function reverseInteger(num) {
  // cek jika input adalah bilangan negatif atau positif
  const isNegative = num < 0;
  
  // konversi bilangan menjadi string dan diubah menjadi array karakter
  const arrNum = Math.abs(num).toString().split("");
  
  // membalik urutan array
  const reverseArr = arrNum.reverse();
  
  // menggabungkan kembali array dan mengubah kembali menjadi bilangan bulat
  const result = parseInt(reverseArr.join(""));
  
  // jika input awal adalah bilangan negatif, hasil juga harus negatif
  return isNegative ? -result : result;
}

// contoh penggunaan
console.log(reverseInteger(79)); // output: 97
console.log(reverseInteger(-89)); // output: -98
console.log(reverseInteger(-100)); // output: -1
console.log(reverseInteger(20)); // output: 2