import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rota principal
app.get("/", (req, res) => {
  res.send("🚀 Eva está online e rodando!");
});

// Webhook (Evolution API vai chamar aqui)
app.post("/webhook", (req, res) => {
  console.log("📩 Webhook recebido:", req.body);
  res.sendStatus(200);
});

app.listen(PORT, () => console.log(`✅ Servidor rodando na porta ${PORT}`));
