import { Discord, Slash } from "discordx"

import type { CommandInteraction } from "discord.js"

@Discord()
export class Example {
    @Slash({ name: "bot-info", description: "Informace o botovi a jeho vývoje" })
    async ping(interaction: CommandInteraction): Promise<void> {
        const embed = {
            title: "Informace o botovi",
            description:
                "Bot je vyvíjen v jazyce TypeScript s využitím knihovny discordx. Slouží k ověření studentů apod. Pokud nerozumíte kodu, můžete bota ocenit hvězdičkou na GitHubu.",
            color: 0x00ff00,
            thumbnail: {
                url: "https://cdn.discordapp.com/avatars/1275131447031763036/5665d85638661b03fd24f24dbd7a6883.png?size=1024"
            },
            fields: [
                {
                    name: "Jméno",
                    value: "Šárka Hodovská",
                    inline: true
                },
                {
                    name: "Verze",
                    value: "1.0.0",
                    inline: true
                },
                {
                    name: "Vývojář",
                    value: "<@388398688042483723>",
                    inline: true
                },
                {
                    name: "Ostatní vývojáři",
                    value: "",
                    inline: true
                },
                {
                    name: "Open-source",
                    value: "[GitHub](https://github.com/)"
                }
            ]
        }

        await interaction.reply({ embeds: [embed] })
    }
}
