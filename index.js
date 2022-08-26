const { Client, GatewayIntentBits, messageLink, ThreadAutoArchiveDuration } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		ping = Date.now() - interaction.createdTimestamp;
		if(ping < 0)
		{
			ping = ping * -1;
		}
		await interaction.reply(`Pong!\nYour ping is ${ping}ms`);			
	} else if (commandName === 'server') {
		await interaction.reply(`Server info:\nServer Name: ${interaction.guild.name}\nTotal Members: ${interaction.guild.memberCount}\nServer was created in ${interaction.guild.createdAt}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your TAG: ${interaction.user.tag}\nYour ID: ${interaction.user.id}\nYour PFP: ${interaction.user.displayAvatarURL()}`);
	} 
});

client.login(token);