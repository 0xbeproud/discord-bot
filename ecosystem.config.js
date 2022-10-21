const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    apps: [
        {
            script: './dist/src/Bot.js',
            name: 'discord-bot',
            node_args : '-r dotenv/config',
            exec_mode: 'cluster',
            instance: 1
            // watch: true
        }
    ]
}