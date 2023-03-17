function isPalindrome(str) {
  // menghilangkan karakter-karakter selain huruf
  const alphaOnly = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  
  // membalik urutan karakter
  const reverseStr = alphaOnly.split("").reverse().join("");
  
  // membandingkan apakah string asli sama dengan string yang sudah dibalik urutannya
  return alphaOnly === reverseStr;
}

console.log(isPalindrome("Kasur ini rusak"));
console.log(isPalindrome("Kasur Nababan Rusak"));
console.log(isPalindrome("Katak"));
console.log(isPalindrome("Malam"));
console.log(isPalindrome("Radar"));
console.log(isPalindrome("Never add or even"));
console.log(isPalindrome("Was it a rat i saw"));
console.log(isPalindrome("A nut for a jar of tuna"));