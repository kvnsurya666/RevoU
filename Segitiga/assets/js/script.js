function hitung() {
  var sisi1 = document.getElementById("sisi1").value;
  var sisi2 = document.getElementById("sisi2").value;
  var tinggi = document.getElementById("tanggal").value;

  if (sisi1 == "" || sisi2 == "" || tinggi == "") {
    alert("Mohon isi semua input");
  } else {
    var luas = 0.5 * sisi1 * tinggi;
    var keliling = sisi1 + sisi2 + tinggi;

    document.getElementById("luas").innerHTML = "Luas Segitiga: " + luas;
    document.getElementById("keliling").innerHTML =
      "Keliling Segitiga: " + keliling;
  }
}
