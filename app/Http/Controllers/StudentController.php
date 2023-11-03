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

        // jika data kosong maka kirim status code 204
        if ($students->isEmpty()) {
            $data = [
                "message" => "Resource is Empty"
            ];

            return response()->json($data, 204);
        }

        $data = [
            'message' => 'Get All Students',
            'data' => $students
        ];

        // Mengirim data (json) dan kode 200
        return response()->json($data, 200);
    }

    // Membuat method show untuk menampilkan data detail dari data tertentu
    public function show($id)
    {
        $student = Student::find($id);
        if (!$student) {
            $data = [
                'message' => 'Data Not Found'
            ];
        }

        $data = [
            'message' => 'Get All Students',
            'data' => $student
        ];

        // Mengirim data (json) dan kode 200
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        // Validasi data request
        $request->validate([
            "nama" => "required",
            "nim" => "required",
            "email" => "required|email",
            "jurusan" => "required"
        ]);

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

        // if (!$student) {
        //     return response()->json(['message' => 'Student not found'], 404);
        // }

        // $student->nama = $request->input('nama', $student->nama);
        // $student->nim = $request->input('nim', $student->nim);
        // $student->email = $request->input('email', $student->email);
        // $student->jurusan = $request->input('jurusan', $student->jurusan);

        // $student->save();
        if (!$student) {
            $data = [
                'message' => 'Student not Found'
            ];
            return response()->json($data, 404);
        }

        $student->update([
            'nama' => $request->nama ?? $student->nama,
            'nim' => $request->nim ?? $student->nim,
            'email' => $request->email ?? $student->email,
            'jurusan' => $request->jurusan ?? $student->jurusan,
        ]);

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
