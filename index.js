const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
  await ctx.reply(
    'Привет! Это Сбор бот 👋\n\nПока что я только запускаюсь. Скоро здесь появится полноценное меню для компании.',
    {
      reply_markup: {
        keyboard: [
          [{ text: '📅 Календарь' }, { text: '🚀 Собраться сейчас' }],
          [{ text: '📊 Статистика' }, { text: '⚙️ Настройки' }]
        ],
        resize_keyboard: true
      }
    }
  );
});

bot.hears('📅 Календарь', (ctx) => ctx.reply('Календарь пока в разработке'));
bot.hears('🚀 Собраться сейчас', (ctx) => ctx.reply('Функция "Собраться сейчас" скоро появится'));
bot.hears('📊 Статистика', (ctx) => ctx.reply('Статистика пока пустая'));
bot.hears('⚙️ Настройки', (ctx) => ctx.reply('Настройки скоро будут'));

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
