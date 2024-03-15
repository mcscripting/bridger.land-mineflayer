const mineflayer = require('mineflayer');
const bot = mineflayer.createBot({
	host: 'bridger.land', 
	username: 'youraccount@gmail.com', 
	// No password provided. Running the script, will give you a login link on console.
	auth: 'microsoft', 
	version: '1.8.9' 
});

/*
Chatgames guesser for plugin. Simply, if the game includes "x0" bot types "0". Doesn't respond to anything else.
May respond to people saying sentences such as "Solve this question x0 ....." and malfunction. Fix yourself.

The answering will take in mere miliseconds. So, if the bot's ping is 70ms, it'll probably take around 69-72 ms.
You can increase this to your preference by using https://www.npmjs.com/package/sleep
*/

bot.on('messagestr', (message) => {
			if(message.includes("x0"))
			{
				if(message.includes("Solve this question"))
				{
					bot.chat("0");
				}
			}
});

bot.once('spawn', () => {
	console.log('Connected');
});
