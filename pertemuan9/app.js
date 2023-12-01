// import method dalam controller
const {index, store, update, destroy} = require('./fruitController.js');

const main = () => {
  console.log(`Menampilkan data buah-buahan`);
  index();
  console.log(`------------------------------------`);

  console.log(`Menambahkan data buah-buahan`);
  store('Alpukat');
  console.log(`------------------------------------`);

  console.log(`Mengubah data buah-buahan`);
  update(0, 'Kelapa');
  console.log(`------------------------------------`);

  console.log(`Menghapus data buah-buahan`);
  destroy(0);
  console.log(`------------------------------------`);
};

main();
