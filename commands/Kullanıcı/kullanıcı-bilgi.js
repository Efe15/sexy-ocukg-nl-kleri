const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder, Colors } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kullanıcı-bilgi")
    .setDescription("etiketlenen kullanıcın bilgilerini gösterir")
    .addUserOption((option) =>
      option.setName("user").setDescription("Bir kullanıcıdan bahsedin")
    ),
  kategori: "Genel",
  run: async (client, interaction) => {
    //v14 run function
    const user = interaction.options.getUser("user") || interaction.user;
    const member = interaction.guild.members.cache.get(user.id);
    //flags
    const userFlags = user.flags
      .toArray()
      .map((mr) =>
        mr
          .replace("HypeSquadOnlineHouse1", "<:h1:1048692335841656954>")
          .replace("HypeSquadOnlineHouse2", "<:h2:1048692412735820017>")
          .replace("HypeSquadOnlineHouse3", "<:h3:1048692436874055710>")
          .replace("VerifiedDeveloper", "<:ddevbadge:1048692611554213988>")
          .replace("Hypesquad", "<:hypesquadbadge:1048692727270883338>")
          .replace("PremiumEarlySupporter", "<:esupbadge:1048692795604467764>")
          .replace("BugHunterLevel1", "<:bughbadge:1048692857059410012>")
          .replace("BugHunterLevel2", "<:bugh2badge:1048692871244550294>")
          .replace("CertifiedModerator", "<:modbadge:1048693088958283857>")
          .replace("Staff", "<:staffbadge:1048692932875657276> ")
          .replace("Partner", "<:partnerbadge:1048693199876669490>")
          .replace("ActiveDeveloper", "<:8207bottag:1215772042981277837>")
      )
      .join(" ");
    const embed = new EmbedBuilder()
      .setTitle(`${user.username}'s Profile`)
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .addFields(
        {
          name: "Takma Adı",
          value: user.tag,
          inline: true,
        },
        {
          name: "Kullanıcı Adı",
          value: member?.nickname || "None",
          inline: true,
        },
        {
          name: "Sunucuya Katılış",
          value: `<t:${Math.floor(
            new Date(member?.joinedTimestamp) / 1000
          )}:R>`,
          inline: true,
        },
        {
          name: "Discorda Katılış",
          value: `<t:${Math.floor(new Date(user.createdTimestamp) / 1000)}:R>`,
          inline: true,
        },
        {
          name: "Roller",
          value:
            `(${
              member?.roles?.cache.filter((x) => x.name !== "@everyone").size
            }) ${member?.roles?.cache
              .filter((x) => x.name !== "@everyone")
              .sort((a, b) => b.rawPosition - a.rawPosition)
              .map((x) => x)
              .slice(0, 2)}` || "None",
          inline: true,
        },
        {
          name: "Badges",
          value: userFlags || "None",
          inline: true,
        }
      )
      .setColor(Colors.Blurple)
      .setFooter({
        text: interaction.user.tag,
        iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
      });

    interaction.reply({ embeds: [embed] });
  },
};