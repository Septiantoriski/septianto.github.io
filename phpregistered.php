<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $server = "localhost"; 
    $username_db = "root"; 
    $password_db = ""; 
    $database = "dblogin"; 

    $conn = new mysqli($server, $username_db, $password_db, $database);

    if ($conn->connect_error) {
        die("Koneksi ke database gagal: " . $conn->connect_error);
    }

    $nama_pengguna = $_POST["id"];
    $email = $_POST["email"];
    $kata_sandi = password_hash($_POST["pass"], PASSWORD_DEFAULT); // Enkripsi kata sandi

    $sql = "INSERT INTO users (Nama, Email, kata_sandi) VALUES ('$nama_pengguna', '$email', '$kata_sandi')";

    if ($conn->query($sql) === TRUE) {
        echo "Pendaftaran berhasil!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
