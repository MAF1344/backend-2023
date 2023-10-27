<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    protected $animal = ["Kucing", "Ayam", "Ikan"];

    public function index()
    {
        echo "Menampilkan Data Animal : <br>";
        foreach ($this->animal as $item) {
            echo "~ $item <br>";
        };
    }

    public function store(Request $request)
    {
        echo "Data Animal : <br>";
        foreach ($this->animal as $item) {
            echo "~ $item <br>";
        };
        echo "Menambahkan Data Animal <br>";
        echo "Nama Hewan Baru : $request->nama";
    }

    public function update(Request $request, $id)
    {
        echo "Mengubah Data Animal : <br>";
        if (isset($this->animal[$id])) {
            $this->animal[$id] = $request->nama;

            foreach ($this->animal as $item) {
                echo "~ $item <br>";
            };
        } else {
            echo "Data Animal id $id tidak ditemukan";
        }
    }

    public function destroy($id)
    {
        if (isset($this->animal[$id])) {
            unset($this->animal[$id]);
        } else {
            echo "Data Animal id $id tidak ditemukan";
        }

        echo "Menghapus Data Animal id $id <br>";
        echo "Data Animal Yang Tersisa : <br>";
        foreach ($this->animal as $item) {
            echo "~ $item <br>";
        };
    }
}
