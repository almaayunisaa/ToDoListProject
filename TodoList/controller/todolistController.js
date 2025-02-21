
const todolist = require('../models/todolist');
const tambahTodoList = async (req, res) => {
    try {
        const {title, kategoriKonten, konten, platform, waktuPosting} = req.body;

        // Validasi apakah badan telah diisi
        if (!title || !kategoriKonten || !konten || !platform || !waktuPosting) {
            return res.status(400).json({ message: "Silahkan lengkapi semua bidang" });
        }

        // Tambahkan data ke database
        const todo = await todolist.create(title, kategoriKonten, konten, platform, waktuPosting)
        if (!todo) {
            return res.status(404).json({ message: 'Gagal ditambahkan' });
        }

        res.status(201).json({
            message: "Yey To Do List Berhasil ditambahkan!",
        });

    } catch (err) {
        // Tangani error internal server
        res.status(500).json({ error: err.message });
    }
}

const editTodoList = async (req, res) => {
    try {
        const id = req.params.id;
        const {title, kategoriKonten, konten, platform, waktuPosting, status} = req.body;

        // Validasi apakah badan telah diisi
        if (!title || !kategoriKonten || !konten || !platform || !waktuPosting || !status) {
            return res.status(400).json({ message: "Silahkan lengkapi semua bidang" });
        }

        // Lakukan pengubahan info
        const todo = await todolist.edit(id, title, kategoriKonten, konten, platform, waktuPosting, status);
        if (todo.affectedRows === 0) {
            return res.status(404).json({ message: 'Gagal di ubah' });
        }

        res.status(200).json({
            message: "Yey To Do List Berhasil diubah!",
        });

    } catch (err) {
        // Tangani error internal server
        res.status(500).json({ error: err.message });
    }
}

const hapusTodoList = async (req, res) => {
    try {
        const id = req.params.id;

        // Hapus To Do List dari database
        const todo = await todolist.delete(id);
        if (!todo) {
            return res.status(404).json({ message: 'ID invalid' });
        }

        res.status(200).json({
            message: "To Do List berhasil dihapus!",
        });

    } catch (err) {
        // Tangani error internal server
        res.status(500).json({ error: err.message });
    }
}

const ambilTodoList= async (req, res) => {
    try {
        // Ambil daftar To Do List dari database
        const todo_list = await todolist.get();
        if (todo_list.length === 0) {
            return res.status(401).json({ message: 'To Do List tidak ada Silahkan coba lagi' });
        }

        return res.status(200).json({ ToDoList: todo_list });
    } catch (err) {
        // Tangani error internal server
        res.status(500).json({ error: err.message });
    }
}

// Ekspor fungsi-fungsi agar bisa digunakan di router atau modul lainnya
module.exports = {tambahTodoList, editTodoList, hapusTodoList, ambilTodoList};
