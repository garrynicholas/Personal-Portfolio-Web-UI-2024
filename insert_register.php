<?php
//Include file koneksi ke database
include "connection.php";

//menerima nilai dari kiriman form input-barang 
$nama_barang=$_POST["nama_barang"];
$harga=$_POST["harga"];
$stok=$_POST["stok"];

//Query input menginput data kedalam tabel barang
  $sql="insert into barang (nama_barang,harga,stok) values
		('$nama_barang','$harga','$stok')";

//Mengeksekusi/menjalankan query diatas	
  $hasil=mysqli_query($kon,$sql);

//Kondisi apakah berhasil atau tidak
  if ($hasil) {
	echo "Berhasil insert data";
	exit;
  }
else {
	echo "Gagal insert data";
	exit;
}  

?>