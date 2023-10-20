<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    public function index()
    {
        $animal = ["Kucing","Ayam","Ikan"];
        echo "Menampilkan Data Animal : <br> $animal";
    }

    public function store(Request $request)
    {
        echo "Nama Hewan : $request->nama";
        echo "<br>";
        echo "Menamahkan Data Animal";
    }

    public function update(Request $request, $id)
    {
        echo "Nama Hewan : $request->nama";
        echo "<br>";  
        echo "Merubah Data Animal id $id";
    }

    public function destroy($id)
    {
        echo "Menghapus Data Animal $id";
    }
}
