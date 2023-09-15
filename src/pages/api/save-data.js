import db from "@/lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, host, reason } = JSON.parse(req.body);
    const query = "INSERT INTO guest_list VALUES (?, ?, ?)";
    const values = [name, host, reason];
    try {
      const result = await db.promise().query(query, values);
      console.log("Data saved to the database:", result);
      res.status(200).json({ message: "Data saved successfully" });
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).json({ error: "An error occurred while saving data" });
    }
  } else {
    res.status(405).end();
  }
}
