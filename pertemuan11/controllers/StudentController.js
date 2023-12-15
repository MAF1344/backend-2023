// import data students
const students = require('../data/student.js');

// Membuat Class StudentController
class StudentController {
  index(req, res) {
    const data = {
      message: 'Menampilkan semua data studens',
      data: students,
    };
    res.json(data);
  }
  store(req, res) {
    const {nama} = req.body;
    // Menambahkan data baru ke dalam array students
    students.push(nama);
    const data = {
      message: `Menambahkan data student: ${nama}`,
      data: students,
    };
    res.json(data);
  }
  update(req, res) {
    const {id} = req.params;
    const {nama} = req.body;

    console.log('Received request to update student with ID:', id);

    // Mencari indeks siswa dengan ID yang sesuai
    const studentIndex = students.findIndex((student, index) => index.toString() === id);

    console.log('Found student index:', studentIndex);

    if (studentIndex !== -1) {
      // Mengganti data siswa dengan yang baru
      const oldName = students[studentIndex];
      students[studentIndex] = nama;

      console.log('Updated student data:', students);

      const data = {
        message: `Mengedit student id ${id} dengan nama ${oldName} menjadi ${nama}`,
        data: students,
      };
      res.json(data);
    } else {
      res.status(404).json({message: `Student dengan ID ${id} tidak ditemukan`});
    }
  }

  destroy(req, res) {
    const {id} = req.params;

    // Mencari indeks siswa dengan ID yang sesuai
    const studentIndex = students.findIndex((student, index) => index.toString() === id);

    if (studentIndex !== -1) {
      // Menghapus siswa dari array
      const deletedStudent = students.splice(studentIndex, 1);

      const data = {
        message: `Menghapus student id ${id}`,
        deletedData: deletedStudent,
        data: students,
      };

      res.json(data);
    } else {
      res.status(404).json({message: `Student dengan ID ${id} tidak ditemukan`});
    }
  }
}

// Mmbuat object StudentController
const object = new StudentController();

// Export objext StudentController
module.exports = object;
