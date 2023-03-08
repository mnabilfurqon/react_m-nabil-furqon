const prompt = require("prompt-sync")();

function cekSuhuTubuh() {
  let suhuTubuh = prompt("Silahkan inputkan suhu tubuh anda:");
  if (suhuTubuh < 28) {
    console.log("Kamu...Boleh masuk mall");
  } else {
    console.log("Gaboleh masuk mall");
  }
}