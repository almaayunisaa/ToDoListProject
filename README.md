# ToDoListProject

## Deskripsi
To-Do List adalah API yang memungkinkan pengguna untuk mengelola postingan. API ini dibangun menggunakan **Node.js** dan **Express.js**, serta mendukung operasi CRUD (Create, Read, Update, Delete). Dokumentasi API dibuat menggunakan **Swagger**.

## Fitur Utama
- **Menambahkan item To-Do List** (`POST /api/todoList/tambahTodo`)
- **Menghapus item To-Do List** (`DELETE /api/todoList/HapusToDoList/{id}`)
- **Mengubah item To-Do List** (`PUT /api/todoList/UbahToDoList/{id}`)
- **Mengambil semua item To-Do List** (`GET /api/todoList/getToDoList`)

## Teknologi yang Digunakan
- **Node.js** dengan **Express.js** sebagai backend
- **Swagger** untuk dokumentasi API
- **Database** MySQL

## Instalasi dan Menjalankan API
### 1. Clone Repository

### 2. Install Dependencies
```sh
npm install
```

### 3. Menjalankan Server
```sh
node index.js
```
Server akan berjalan pada `http://localhost:5500`.

## Endpoint API
### 1. **Menambahkan Item To-Do List**
**POST** `/api/todoList/tambahTodo`
- **Deskripsi:** Menambahkan item baru ke To-Do List.
- **Request Body:**
  ```json
  {
    "title": "Makanan di Korea",
    "kategoriKonten": "Food",
    "konten": "Post foto makanan di Korea dengan caption Akhirnya Kembali ke Korea!",
    "platform": "Instagram",
    "waktuPosting": "2025-02-21 15:30:00"
  }
  ```
- **Response:** `201 Created`

### 2. **Menghapus Item To-Do List**
**DELETE** `/api/todoList/HapusToDoList/{id}`
- **Deskripsi:** Menghapus item berdasarkan ID.
- **Parameter:** `id` (string) → ID item yang akan dihapus.
- **Response:** `200 OK`

### 3. **Mengubah Item To-Do List**
**PUT** `/api/todoList/UbahToDoList/{id}`
- **Deskripsi:** Memperbarui item berdasarkan ID.
- **Parameter:** `id` (string) → ID item yang akan diperbarui.
- **Request Body:**
  ```json
  {
    "title": "Makanan di Korea",
    "kategoriKonten": "Food",
    "konten": "Post foto makanan di Korea dengan caption Akhirnya Kembali ke Korea!",
    "platform": "Instagram",
    "waktuPosting": "2025-02-21 15:30:00",
    "status": 1
  }
  ```
- **Response:** `200 OK`

### 4. **Mengambil Semua Item To-Do List**
**GET** `/api/todoList/getToDoList`
- **Deskripsi:** Mengambil semua item yang tersimpan di database.
- **Response:** `200 OK`

## Dokumentasi API (Swagger)
Swagger UI tersedia untuk mendokumentasikan dan menguji API.
1. Jalankan server
2. Akses dokumentasi di: `http://localhost:5500/api-docs`
