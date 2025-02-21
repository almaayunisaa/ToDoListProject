const db = require('../config/db');

class Todo {
    static create(title, kategoriKonten, konten, platform, waktuPosting) {
        const query = 'INSERT INTO Todo (title, kategoriKonten, konten, platform, waktuPosting) VALUES (?, ?, ?, ?, ?) ';
        return new Promise((resolve, reject) => {
            db.query(query, [title, kategoriKonten, konten, platform, waktuPosting], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static edit(id, title, kategoriKonten, konten, platform, waktuPosting, status) {
        const query = 'UPDATE Todo SET title = ?, kategoriKonten = ?, konten = ?, platform = ?, waktuPosting = ?, status = ? WHERE id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [title, kategoriKonten, konten, platform, waktuPosting, status, id], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static delete(id) {
        const query = 'DELETE FROM Todo WHERE id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static get() {
        const query = 'SELECT * FROM Todo';
        return new Promise((resolve, reject) => {
            db.query(query, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

module.exports = Todo;
