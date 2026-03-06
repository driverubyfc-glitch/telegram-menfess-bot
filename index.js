const TelegramBot = require('node-telegram-bot-api');

const token = "8118185029:AAHVQo6sqV5HyJNgB-0CujHV5hQoomV2v6A";
const channelId = "-1002332595031";

const bot = new TelegramBot(token, { polling: true });

// command start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "😝 Kirim menfess kamu disini!");
});

// kirim teks
bot.on("message", (msg) => {
  if (msg.text && !msg.text.startsWith("/")) {
    bot.sendMessage(channelId, "😝 " + msg.text);
  }
});

// kirim foto
bot.on("photo", (msg) => {
  const photo = msg.photo[msg.photo.length - 1].file_id;
  const caption = msg.caption ? "😝 " + msg.caption : "😝";
  bot.sendPhoto(channelId, photo, { caption });
});

// kirim video
bot.on("video", (msg) => {
  const video = msg.video.file_id;
  const caption = msg.caption ? "😝 " + msg.caption : "😝";
  bot.sendVideo(channelId, video, { caption });
});
