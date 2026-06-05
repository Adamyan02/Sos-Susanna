export default async function handler(req, res) {
  const { firstName, lastName, peopleCount } = req.body;

  const TOKEN = process.env.TELEGRAM_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  const text = `
💍 Новый гость!

👤 Имя: ${firstName}
👤 Фамилия: ${lastName}
👥 Количество гостей: ${peopleCount}
`;

  await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text
    })
  });

  res.status(200).json({ ok: true });
}
