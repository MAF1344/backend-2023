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
        $student = Student::create($request->all());
        return response()->json($student, 201);
    }

    public function update(Request $request, $id)
    {
        $student = Student::findOrFail($id);
        $student->update($request->all());
        return response()->json($student, 201);
    }

    public function destroy($id)
    {
        Student::destroy($id);
        return response()->json(null, 0);
    }
}
