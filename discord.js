//V13

const { Client, Intents } = require('discord.js');
const SerialPort = require('serialport');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const port = new SerialPort('COM3', { baudRate: 9600 }); // Arduino'nun bağlı olduğu seri portu ve baud hızını ayarlayın

client.on('ready', () => {
  console.log(`Bot olarak giriş yapıldı: ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.content === '!yesil') {
    port.write('1'); // Arduino'ya 1 karakterini göndererek LED'i yakın
    console.log('LED yandı.');
  }
});

client.login('DISCORD_TOKEN'); // Discord botunuzun token'ını girin
