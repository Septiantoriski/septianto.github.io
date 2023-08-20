<?php
$server = "localhost";
$username_db = "root";
$password_db = "";
$database = "dblogin";

// Membuat koneksi
$conn = new mysqli($server, $username_db, $password_db, $database);

// Memeriksa koneksi
if ($conn->connect_error) {
    echo "Koneksi gagal: " . $conn->connect_error;
} else {
    echo "Koneksi berhasil!";
}

$conn->close();
?>
