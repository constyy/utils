/////////////////////////////////////////////////////////////////////////////
const http = require("http");
const prettyMilliseconds = require("pretty-ms");
const config = require('../assets/config.json');

/////////////////////////////////////////////////////////////////////////////
var server = http.createServer(function (req, res) {
    if(req.url == '/info') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({ users: `${bot.guilds.cache.map((guild) => guild.memberCount).reduce((p, c) => p + c)}`, guilds: `${bot.guilds.cache.size}`, version: `${botversion}`, uptime: `${prettyMilliseconds(bot.uptime)}`, commands: commands.size, node: `${process.version.match(/^v(\d+\.\d+)/)[1]}` }));
        res.end();
    }
})

server.listen(config.apis.port, (err) => {
    if(err) return console.error(err);
    console.log(`[${package.name} ${package.version}] API listening on ${config.apis.port}`)
})

// CREDITS: QUICKBOT.ME (public demo)