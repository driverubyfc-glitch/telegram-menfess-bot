const TelegramBot = require('node-telegram-bot-api');

const BOT_TOKEN = "8118185029:AAHVQo6sqV5HyJNgB-0CujHV5hQoomV2v6A";
const CHANNEL_ID = "-1002332595031";

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Kirim menfess kamu 😝");
});

bot.on('message', async (msg) => {

  // kirim text
  if (msg.text && !msg.text.startsWith("/")) {
    bot.sendMessage(CHANNEL_ID, `😝 ${msg.text}`);
    bot.sendMessage(msg.chat.id, "Menfess berhasil dikirim 😝");
  }

  // kirim foto
  if (msg.photo) {
    const photo = msg.photo[msg.photo.length - 1].file_id;
    bot.sendPhoto(CHANNEL_ID, photo, {
      caption: `😝 ${msg.caption || ""}`
    });
    bot.sendMessage(msg.chat.id, "Menfess foto berhasil dikirim 😝");
  }

  // kirim video
  if (msg.video) {
    bot.sendVideo(CHANNEL_ID, msg.video.file_id, {
      caption: `😝 ${msg.caption || ""}`
    });
    bot.sendMessage(msg.chat.id, "Menfess video berhasil dikirim 😝");
  }

});
