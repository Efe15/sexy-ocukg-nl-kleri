const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sahipetiket')
        .setDescription('Bot sahibinin etiketlenmesini açıp kapatır.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('aç')
                .setDescription('Bot sahibinin etiketlenmesini açar.')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('kapat')
                .setDescription('Bot sahibinin etiketlenmesini kapatır.')
        ),

    async execute(interaction) {
        // Bot sahibinin ID'sini buraya girin
        const sahipID = '950794814830542908';

        // Komutun hangi alt komutla kullanıldığını belirle
        const subCommand = interaction.options.getSubcommand();

        if (subCommand === 'aç') {
            // Sahip etiketlemeyi aç
            await interaction.reply('Artık bot sahibi etiketlenebilir.');

            // CroxyDB'ye ayarı kaydet
            // CroxyDB'yi burada kullanıcı tercihlerini saklamak için kullanabilirsiniz
            // Örneğin: interaction.user.id'yi anahtar olarak kullanarak açma/kapama durumlarını saklayabilirsiniz.
        } else if (subCommand === 'kapat') {
            // Sahip etiketlemeyi kapat
            await interaction.reply('Artık bot sahibi etiketlenemez.');

            // CroxyDB'ye ayarı kaydet
            // Örneğin: interaction.user.id'yi anahtar olarak kullanarak açma/kapama durumlarını saklayabilirsiniz.
        }

        // Sahip etiketlenirse
        if (interaction.user.id === sahipID) {
            await interaction.deleteReply(); // Mesajı sil
            await interaction.channel.send('Sahibimi etiketleme.');
        }
    },
};
