export default async function handler(req, res) {
  const { firstName, lastName } = req.body;

  const TOKEN = "8709950732:AAEN7Tu0J4SM0S9QqRj7_QpPV_oivytg1lI";
  const CHAT_ID = "323969398";

  const text = `💍 Новый гость!\n${firstName} ${lastName}`;

  await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text
    })
  });

  res.status(200).json({ ok: true });
}
