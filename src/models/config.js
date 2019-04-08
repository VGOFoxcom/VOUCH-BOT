export default {
	discordToken: 'NTY0ODgzODA0NDkwMDM5MzE3.XKuXLw.oqiXywbcP8aWXfd3kz8WKaPzjj8',
	guilds: [
		{
			guildId: '348155543199678468',
			vouchChannel: '348156625686888449',
			logChannel: '348156702383800321',
			moderators: ['158195841335558144'],
			marketplaceRole: '348156258731163648',
			marketAccess: 3, // count of minimum vouches >=
			marketTimeout: 12, // waiting time in hours per message
		},
	],
	botID: '347455479028514816',
	blockFile: './models/blocked.json',
	vouchFile: './models/vouches.json',
	commands: {
		// renaming commands
		base: 'vouch',
		vouchHelp: 'help',
		vouchTopList: 'top',
		vouchBlock: 'block',
		vouchUnblock: 'unblock',
		vouchSingleList: 'list',
		vouchReset: 'reset',
		vouchRemove: 'remove',
	},
	executor: '!',
	version: '0.4.0b',
}
