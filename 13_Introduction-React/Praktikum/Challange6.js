function isPalindrome(str) {
  // menghilangkan karakter-karakter selain huruf
  const alphaOnly = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  
  // membalik urutan karakter
  const reverseStr = alphaOnly.split("").reverse().join("");
  
  // membandingkan apakah string asli sama dengan string yang sudah dibalik urutannya
  return alphaOnly === reverseStr;
}

// contoh penggunaan
console.log(isPalindrome("Kasur ini rusak")); // output: true
console.log(isPalindrome("Kasur Nababan Rusak")); // output: true
console.log(isPalindrome("Katak")); // output: true
console.log(isPalindrome("Malam")); // output: true
console.log(isPalindrome("Radar")); // output: true
console.log(isPalindrome("Never add or even")); // output: false
console.log(isPalindrome("Was it a rat i saw")); // output: true
console.log(isPalindrome("A nut for a jar of tuna")); // output: true