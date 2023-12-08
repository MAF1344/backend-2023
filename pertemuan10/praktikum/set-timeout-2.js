console.log('Fatih Membuka Browser Google Chrome.');
/*
 *setTimeout salah satu operasi Asynchrnous
 *fungsi setTimeout tidak mencegah operasi selanjutnya
 *callback otomatis dijalankan setelah 5 detik
 */
setTimeout(() => {
  console.log('Downloading 1 Hour ...');
  console.log('Download Complete');
}, 5000);

console.log('Fatih Membuka Youtube');
