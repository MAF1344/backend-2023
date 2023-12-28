// import Model Student
const Student = require('../models/Student');

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();
    const data = {
      message: 'Menampilkkan semua students',
      data: students,
    };

    res.json(data);
  }

  async store(req, res) {
    /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
     */
    // code here
    try {
      const newStudent = await Student.create(req.body);

      const data = {
        message: 'Menambahkan data student',
        data: newStudent,
      };

      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({message: 'Terjadi kesalahan pada server'});
    }
  }

  async update(req, res) {
    const {id} = req.params;
    const {nama} = req.body;

    try {
      const updatedStudent = await Student.updateStudent(id, {nama});

      const data = {
        message: `Mengedit student id ${id}, nama ${nama}`,
        data: updatedStudent,
      };

      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({message: 'Terjadi kesalahan pada server'});
    }
  }

  async destroy(req, res) {
    const {id} = req.params;

    try {
      const deletedStudent = await Student.deleteStudent(id);

      const data = {
        message: `Menghapus student id ${id}`,
        data: deletedStudent,
      };

      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({message: 'Terjadi kesalahan pada server'});
    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
