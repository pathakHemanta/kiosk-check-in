import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Kaisenjujutsu@101010",
  database: "guests",
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const name = req.body.name;
    const host = req.body.host;
    const reason = req.body.reason;

    console.log(name + " " + host + " " + reason);

    const query =
      "INSERT INTO guest_list(host_name, reason_visit, guest_name) VALUES (?, ?, ?)";
    const values = [host, reason, name];
    try {
      const result = await db.query(query, values);
      res.status(200).json({ message: result });
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).json({ error: error });
    }
  } else {
    res.status(405).end();
  }
}

export { db };
