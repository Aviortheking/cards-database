import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh4'


const card: Card = {
	// Card Global Informations
	id: "swsh4-80",

	localId: 80,

	name: {
		en: "Milcery",
	},

	tags: [
	],

	illustrator: "Kouki Saitou",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 50,

	type: [
		Type.PSYCHIC,
	],


	attacks: [
		{
			cost: [
				Type.PSYCHIC,
			],

			name: {
				en: "Sweet Scent",
			},

			text: {
				en: "Heal 20 damage from 1 of your Pokémon.",
			},


		},
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Tackle",
			},


			damage: 10,

		},
	],

	weaknesses: [
		{
			type: Type.METAL, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card