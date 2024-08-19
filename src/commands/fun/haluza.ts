import { Discord, Slash } from "discordx"

import type { CommandInteraction } from "discord.js"

const jokes = [
    "Sice nemám rukavice ani dezinfekci ale otevřeme Word",
    "To tady budeme hodinu a pul stat? Mame cas",
    "Zase nulova priprava na cviceni? ",
    "dám ti facku tehdy a jen tehdy, když mě oklameš",
    "Je mi líto, že to muselo zajít až sem, ale všechno má své meze."
]

@Discord()
export class Example {
    @Slash({ name: "haluz", description: "Asi ze mě vypadne nějaká haluz 🤪" })
    async ping(interaction: CommandInteraction): Promise<void> {
        await interaction.reply(jokes[Math.floor(Math.random() * jokes.length)])
    }
}
