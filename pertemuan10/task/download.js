const click = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('File yang ingin di-unduh telah di-klik');
    }, 1000);
  });
};

const save = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Pilih lokasi menyimpan file yang ingin di-unduh...');
    }, 2000);
  });
};

const download = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Proses Unduh Sedang Berlangsung...');
    }, 3000);
  });
};

const selesai = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Proses Unduh Selesai!');
    }, 5000);
  });
};

// Eksekusi Program
const main = async () => {
  try {
    const clickResult = await click();
    console.log(clickResult);

    const saveResult = await save();
    console.log(saveResult);

    const downloadResult = await download();
    console.log(downloadResult);

    const selesaiResult = await selesai();
    console.log(selesaiResult);
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }
};

main();
