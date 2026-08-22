const db = require('../config/db');

exports.getAll = async() => {
    const [rows] = await db.query('SELECT * FROM expenses order by id desc');
    return rows;
}

exports.getById = async(id) => {
    const [rows] = await db.query('SELECT * FROM expenses WHERE id = ?', [id]);
    return rows[0];
}

exports.create = async( {title, amount, file} ) => {
    await db.query('INSERT INTO expenses (title, amount, file) VALUES (?, ?, ?)', [title, amount, file]);
}

exports.update = async ( id, {title, amount} ) => {
    await db.query('UPDATE expenses SET title = ?, amount = ? WHERE id = ?', [title, amount, id]);
}

exports.delete = async (id) => {
    await db.query('DELETE FROM expenses WHERE id = ?', [id]);
}