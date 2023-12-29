// import Model Student
const Student = require('../models/Student');

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    try {
      // Memanggil method static all dengan async await.
      const students = await Student.all();

      if (students.length > 0) {
        const data = {
          message: 'Menampilkan semua students',
          data: students,
        };
        return res.status(200).json(data);
      } else {
        const data = {
          message: 'Data Student Tidak Ditemukan',
        };
        return res.status(404).json(data);
      }
    } catch (error) {
      console.error(error);
      const data = {
        message: 'Terjadi kesalahan saat memproses data students',
      };
      return res.status(500).json(data);
    }
  }

  async store(req, res) {
    // destructing objec ke req.body
    const {nama, nim, email, jurusan} = req.body;
    // jika ada data undefined maka kirim response error
    if (!nama || !nim || !email || !jurusan) {
      const data = {
        message: 'Semua data harus dikirim',
      };
      return res.status(422).json(data);
    } else {
      const student = await Student.create(req.body);
      const data = {
        message: 'Menambahkan data student',
        data: student,
      };
      return res.status(201).json(data);
    }
  }

  async update(req, res) {
    const {id} = req.params;
    // Cari id student yang ingin diupdate
    const student = await Student.find(id);

    if (student) {
      // melakukan update data
      const student = await Student.update(id, req.body);
      const data = {
        message: 'Mengedit data student',
        data: student,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: 'Student not found',
      };
      res.status(404).json(data);
    }
  }

  async destroy(req, res) {
    const {id} = req.params;
    const student = await Student.find(id);

    if (student) {
      await Student.delete(id);
      const data = {
        message: 'Menghapus Data',
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: 'Data tidak ditemukan',
      };
      res.status(404).json(data);
    }
  }

  async show(req, res) {
    const {id} = req.params;
    const student = await Student.find(id);

    if (student) {
      const data = {
        message: 'Menampilkan detail dari data Students',
        data: student,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: 'Data Student tidak ditemukan',
      };
      res.status(404).json(data);
    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
