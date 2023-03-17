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

console.log(reverseInteger(79));
console.log(reverseInteger(-89));
console.log(reverseInteger(-100));
console.log(reverseInteger(20));