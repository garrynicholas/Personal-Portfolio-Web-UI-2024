<!DOCTYPE html>
<html>
<head>
    <!-- Load file CSS Bootstrap offline -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
</head>
<body>
<div class="container">
<h2>Input Data Barang</h2>
    <form action="insert_register.php" method="post">
        <div class="form-group">
            <label>Nama Barang:</label>
            <input type="text" name="nama_barang" class="form-control" placeholder="Masukan nama barang" />
        </div>
        <div class="form-group">
            <label>Harga:</label>
            <input type="number" name="harga" class="form-control" placeholder="Masukan harga" />
        </div>
     <div class="form-group">
            <label>Stok:</label>
            <input type="number" name="stok" class="form-control" placeholder="Masukan stok" />
        </div>

        <button type="submit" name="submit" class="btn btn-primary">Submit</button>

    </form>
</div>
</body>
</html>