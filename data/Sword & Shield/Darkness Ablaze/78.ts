import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Dedenne",
		fr: "Dedenne"
	},
	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 70,
	types: [
		"Psychic",
	],




	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mad Party",
				fr: "Folle Aventure"
			},
			effect: {
				en: "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack.",
				fr: "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse qui a l’attaque Folle Aventure."
			},
			damage: "20×",

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card