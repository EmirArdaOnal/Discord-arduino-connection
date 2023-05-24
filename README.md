# Discord-arduino-connection
Discord ve arduino bağlantısı

Bu kodları kullanmak için aşağıdaki adımları takip edebilirsiniz:

1. Arduino bağlantısı:
   - Arduino'nuzu bilgisayarınıza bağlayın.
   - Arduino IDE'yi açın ve Arduino'ya yüklemek için yukarıda verilen Arduino kodunu yapıştırın.
   - Doğru Arduino kartını ve seri portu seçtiğinizden emin olun.
   - Arduino kodunu yükleyin.

2. Discord botunun oluşturulması:
   - Discord Developer Portal'ına gidin: https://discord.com/developers/applications
   - Yeni bir uygulama oluşturun ve ona bir ad verin.
   - Sol menüdeki "Bot" sekmesine gidin ve "Add Bot" düğmesini tıklayarak bir bot oluşturun.
   - Botun tokenını kopyalayın. Bu, Discord botunuzu kimlik doğrulamak için kullanacağımız gizli anahtardır.

3. Proje dosyasının oluşturulması:
   - Boş bir klasör oluşturun ve bu klasöre gidin.
   - Bir metin düzenleyici (ör. Visual Studio Code) kullanarak bir dosya oluşturun ve uzantısını `.js` olarak kaydedin.
   - Bu dosyaya yukarıdaki Discord.js ve SerialPort kütüphanelerini yüklemek için aşağıdaki komutları girin:
     ```
     npm install discord.js
     npm install serialport
     ```
   - Ardından, yukarıda verilen Discord.js ve Arduino kodlarını sırasıyla `discord.js` ve `arduino.js` adlı dosyalara yapıştırın.

4. Ayarların yapılması:
   - `arduino.js` dosyasını açın ve Arduino'nun bağlı olduğu seri portu ve baud hızını (`COM3` ve `baudRate: 9600`) doğru şekilde ayarlayın.
   - Discord botunun tokenını (`DISCORD_TOKEN`) yapıştırın.

5. Kodun çalıştırılması:
   - Komut istemcisini açın ve proje klasörüne gidin.
   - Aşağıdaki komutu girerek Discord botunu başlatın:
     ```
     node discord.js
     ```

6. Test etme:
   - Discord sunucusunda botunuzu eklediğinizden emin olun.
   - Sunucuda `!yesil` komutunu kullanarak LED'i yakmayı deneyin.
   - Arduino'nun bağlı olduğu 2. pindeki LED yanması gerekiyor.

Çalışma mantığı:
- Discord.js ile oluşturulan bot, Discord sunucusunda `!yesil` komutunu dinler.
- Eğer bir kullanıcı `!yesil` yazarsa, Discord.js botu SerialPort modülünü kullanarak Arduino'ya "1" karakterini gönderir.
- Arduino, Seri Haberleşme üzerinden bu karakteri alır ve eğer "1" ise, 2. pine bağlı olan LED'i yakar.
- Arduino sürekli olarak Seri Haberleşme bağlantısını dinler ve "0" karakteri gelirse LED'i söndürür.


# Discord-arduino-connection
Connecting Arduino and Discord

You can follow the steps below to use these codes:

1. Arduino Connection:
   - Connect your Arduino to your computer.
   - Open the Arduino IDE and paste the Arduino code provided above.
   - Make sure you have selected the correct Arduino board and serial port.
   - Upload the Arduino code.

2. Creating the Discord Bot:
   - Go to the Discord Developer Portal: https://discord.com/developers/applications
   - Create a new application and give it a name.
   - Go to the "Bot" tab in the left menu and click "Add Bot" to create a bot.
   - Copy the bot token. This is the secret key we will use to authenticate your Discord bot.

3. Creating the Project Files:
   - Create a new folder and navigate to it.
   - Use a text editor (e.g., Visual Studio Code) to create a file and save it with the `.js` extension.
   - Install the Discord.js and SerialPort libraries by running the following commands in the terminal:
     ```
     npm install discord.js
     npm install serialport
     ```
   - Then, copy and paste the provided Discord.js and Arduino code into separate files named `discord.js` and `arduino.js`, respectively.

4. Configuration:
   - Open the `arduino.js` file and adjust the serial port and baud rate settings to match the one your Arduino is connected to (`COM3` and `baudRate: 9600`).
   - Paste the Discord bot token (`DISCORD_TOKEN`) into the file.

5. Running the Code:
   - Open the command prompt and navigate to the project folder.
   - Start the Discord bot by running the following command:
     ```
     node discord.js
     ```

6. Testing:
   - Make sure you have added your bot to your Discord server.
   - Use the `!yesil` command in the server to test turning on the LED.
   - The LED connected to the 2nd pin of the Arduino should light up.

Working Principle:
- The bot created with Discord.js listens for the `!yesil` command in the Discord server.
- If a user types `!yesil`, the Discord.js bot sends the character "1" to the Arduino using the SerialPort module.
- The Arduino receives this character through the Serial Communication and if it is "1", it turns on the LED connected to the 2nd pin.
- The Arduino constantly listens to the Serial Communication, and if it receives the character "0", it turns off the LED.

