export default async function handler(req, res) {
  const { firstName, lastName, peopleCount } = req.body;

  const TOKEN = "8615606488:AAH0s_Wqpq_sN6ILxC9KNfIMGm49I6GyNWE";
  const CHAT_ID = "759533397";

  const text = `
💍 Новый гость!

👤 Имя: ${firstName}
👤 Фамилия: ${lastName}
👥 Количество гостей: ${peopleCount}
`;

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
