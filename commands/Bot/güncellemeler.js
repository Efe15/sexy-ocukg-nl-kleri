const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("güncellemeler")
        .setDescription("Botun Güncelleme Notları"),

    run: async (client, interaction) => {

        const embed = new EmbedBuilder()
            .setTitle("Sizen Bot - Güncelleme Notları!")
            .setDescription(`> **Eklenenler**
            Yardım Menüsü Güncellendi
            Emojiler Güncellendi
            Yeni Komutlar Eklendi
            Kullanıcı Bilgi Komutu düzelti(Hayla Buglar Olabilir @<950794814830542908> bildirirseniz seviniriz
            
            **Kaldırılanlar**
            Arızalı 3 komut
            `)
       
        interaction.reply({ embeds: [embed], components: [row] })

    },
};
