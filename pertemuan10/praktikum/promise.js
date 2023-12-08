/*
 *Membuat fungsi download
 *@returns {object} Promise
 */

const download = () => {
  /*
   *Prmise dibuat menggunakan class Promise.
   *Promise menerima callback function/executor.
   *Executor menerima 2 params: resolve dan reject.
   *resolve dipanggil jika proses berhasil.
   *reject diipanggil jika proses gagal.
   */
  return new Promise((resolve, reject) => {
    const status = ture;

    setTimeout(() => {
      if (status) {
        resolve('Download Selesai');
      } else {
        reject('Download Gagal');
      }
    }, 5000);
  });
};

console.log(download());
