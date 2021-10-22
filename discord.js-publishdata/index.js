// CREDITS: QUICKBOT.ME
const handlerContent = fs.readdirSync('./handlers').filter(file => file.endsWith('.js'));
for(const handler of handlerContent) require(`./handlers/${handler}`);
// CREDITS: QUICKBOT.ME