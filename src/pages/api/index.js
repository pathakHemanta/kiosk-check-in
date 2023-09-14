import executeQuery from "@/lib/db";

export default async (req, res) => {
  try {
    console.log("req nom", req.body);
    const [guestName, host, reason] = req.body;
    const result = await executeQuery({
      query:
        "INSERT INTO guest_list VALUES(" +
        guestName +
        ", " +
        host +
        ", " +
        reason +
        ")",
      values: [req.body],
    });

    console.log("ttt", result);
  } catch (error) {
    console.log(error);
  }
};
