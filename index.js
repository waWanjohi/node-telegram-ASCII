const Botgram = require('botgram');
const figlet = require('figlet');

const { TELEGRAM_BOT_API } = process.env;

if (!TELEGRAM_BOT_API) {
    console.error('Theo, you forgot your Telegram Bot Token. That will be a problem.');
    process.exit(1);
}

const bot = new Botgram(TELEGRAM_BOT_API);

function onMessage(msg, reply) {
    figlet(msg.text, (err, data) => {
        if (err) {
            reply.text('An error occured. Probably text format is not correct')
                .then();
            return;
        }

        const markdownResult = `${'```\n'}${data}${'\n```'}`;
        reply.markdown(markdownResult).then();
    });
}

bot.text(onMessage);
