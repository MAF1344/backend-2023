<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    // Membuat method index
    public function index()
    {
        // Data Array yang mau dikirim
        // $user = [
        //     'nama' => 'Muhammad Al Fatih',
        //     'jurusan' => 'Teknik Informatika'

        // ];

        // Menggunakan response json laravel
        // Otomatis mengatur Header Content-Type ke json
        // Otomatis mengatur array ke JSON
        // Dapat Mengatur status code
        // return response()->json($user, 200);

        // Menggunakan Model Student untuk select data
        $students = Student::all();
        $data = [
            'message' => 'Get All Students',
            'data' => $students
        ];

        // Mengirim data (json) dan kode 200
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        // Menangkap data request
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan,
        ];


        // Menggunakan model Student
        $student = Student::create($input);

        $data = [
            'message' => 'Student is created succesfully',
            'data' => $student,
        ];

        // Mengembalikan data (JSON) dan kode 201
        return response()->json($data, 201);
    }

    public function update(Request $request, $id)
    {
        $student = Student::find($id);

        if (!$student) {
            return response()->json(['message' => 'Student not found'], 404);
        }

        $student->nama = $request->input('nama', $student->nama);
        $student->nim = $request->input('nim', $student->nim);
        $student->email = $request->input('email', $student->email);
        $student->jurusan = $request->input('jurusan', $student->jurusan);

        $student->save();

        $data = [
            'message' => 'Student is updated successfully',
            'data' => $student,
        ];

        return response()->json($data, 200);
    }

    public function destroy($id)
    {
        $student = Student::find($id);

        if (!$student) {
            return response()->json(['message' => 'Student not found'], 404);
        }

        $student->delete();

        $data = [
            'message' => 'Student has been deleted successfully',
        ];

        return response()->json($data, 200);
    }
}
