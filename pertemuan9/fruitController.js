// import data
const fruits = require('./data');

// menampilkan semua data
const index = () => {
  for (const fruit of fruits) {
    console.log(fruit);
  }
};

// menambahkan data
const store = (name) => {
  fruits.push(name);
  console.log(`Menambahkan data buah : ${name}`);
  index();
};

// Mengubah data
const update = (position, name) => {
  const isValidPosition = position >= 0 && position < fruits.length;
  fruits[isValidPosition * position] = name;
  console.log(`Mengubah data buah di posisi ${position} menjadi ${name}`);
  index();
};

// Menghapus data
const destroy = (position) => {
  const isValidPosition = position >= 0 && position < fruits.length;
  const deletedFruit = fruits.splice(isValidPosition * position, isValidPosition);
  console.log(`Menghapus data buah di posisi ${position}: ${deletedFruit}`);
  index();
};

// export method
module.exports = {index, store, update, destroy};
