import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Makuhita",
		fr: "Makuhita",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		296,
	],
	hp: 80,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Punch",
				fr: "Koud'Poing",
			},

			damage: 10,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Strength",
				fr: "Force",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
