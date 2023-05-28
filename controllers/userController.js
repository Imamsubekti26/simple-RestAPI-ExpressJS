const DB = require("../system/database.js");

const now = new Date().toISOString().slice(0, 19).replace("T", " ");

const index = async (req, res) => {
  const offset = req.query.page >= 1 ? 10 * (req.query.page - 1) : 0;
  const query = `SELECT  * FROM users WHERE deleted_at IS NULL LIMIT 10 OFFSET ${offset}`;

  const conn = await DB();
  const [result] = await conn.execute(query);

  if (result.length <= 0) {
    res.status(404).json({ msg: "Data Not Found" });
  } else {
    res.json({ data: result });
  }
};

const find = async (req, res) => {
  const query = `SELECT  * FROM users WHERE id = ? && deleted_at IS NULL LIMIT 1`;
  const dataRow = [req.params.id];

  const conn = await DB();
  const [result] = await conn.execute(query, dataRow);

  if (result <= 0) {
    res.status(404).json({ msg: "Data Not Found" });
  } else {
    const singleResult = result[0];
    res.json({ data: singleResult });
  }
};

const store = async (req, res) => {
  const query = `INSERT INTO users (id, email, name, linkedin, twitter, instagram, tiktok, created_at) VALUE (NULL, ?, ?, ?, ?, ?, ?, ?)`;
  const dataRow = [
    req.body.email,
    req.body.name,
    req.body.linkedin,
    req.body.twitter,
    req.body.instagram,
    req.body.tiktok,
    now,
  ];

  const conn = await DB();
  const [result] = await conn.execute(query, dataRow);

  if (result.affectedRows <= 0) {
    res.status(404).json({ msg: "Affected Rows is 0", data: result });
  } else {
    res.status(201).json({ data: { id: result.insertId } });
  }
};

const update = async (req, res) => {
  const query = `UPDATE users SET email = ?, name = ?, linkedin = ?, twitter = ?, instagram = ?, tiktok = ?, updated_at = ? WHERE id = ? `;
  const dataRow = [
    req.body.email,
    req.body.name,
    req.body.linkedin,
    req.body.twitter,
    req.body.instagram,
    req.body.tiktok,
    now,
    req.params.id,
  ];

  const conn = await DB();
  const [result] = await conn.execute(query, dataRow);

  if (result.affectedRows <= 0) {
    res.status(404).json({ msg: "Affected Rows is 0", data: result });
  } else {
    res.status(201).json({ data: { msg: result.info } });
  }
};

const deleteData = async (req, res) => {
  const query = `UPDATE users SET deleted_at = ? WHERE id = ?`;
  const dataRow = [now, req.params.id];

  const conn = await DB();
  const [result] = await conn.execute(query, dataRow);

  if (result.affectedRows <= 0) {
    res.status(404).json({ msg: "Affected Rows is 0", data: result });
  } else {
    res.status(201).json({ data: { msg: result.info } });
  }
};

module.exports = { index, find, store, update, deleteData };
