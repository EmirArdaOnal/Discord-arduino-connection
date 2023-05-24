//V13

const SerialPort = require('serialport');
const { Client, GatewayIntentBits, Events, Partials } = require("discord.js");
const client = new Client({ intents: Object.values(GatewayIntentBits).filter(x => typeof x === "string"), partials: Object.values(Partials).filter(x => typeof x === "string")});

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
