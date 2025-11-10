# 🤖 Eva - Consultora Virtual da VL Company

Assistente virtual profissional para WhatsApp, criada com Node.js, OpenAI e Evolution API.

### ⚙️ Instalação

1. Crie conta no [Render.com](https://render.com) (plano gratuito).
2. Faça upload destes arquivos.
3. Configure as variáveis no Render:
   - `OPENAI_API_KEY` = sua chave OpenAI
   - `EVOLUTION_URL` = link da instância Evolution API
   - `EVOLUTION_TOKEN` = token da Evolution API
4. Crie uma instância no painel da [Evolution API](https://evolution-api.com).
5. Escaneie o QR Code com o WhatsApp desejado.
6. No campo **Webhook**, cole:
7. (https://eva-1-3x0t.onrender.com)

yaml
Copiar código
7. Teste enviando mensagem para o WhatsApp conectado.

### 💾 Memória de conversa
O histórico é salvo em `memory.json` e lembra até 20 mensagens por contato.

### 💰 Custos
| Serviço | Custo | Observação |
|----------|--------|-------------|
| Render | Grátis | VPS 24h, reinicia ao hibernar |
| Evolution API | Grátis | 1 número |
| OpenAI | Gratuito (créditos iniciais) | Depois: ~R$0,01 por msg |

---
