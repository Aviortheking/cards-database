import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-1",

	localId: 1,

	name: {
		en: "Caterpie",
	},

	tags: [
	],

	illustrator: "Uta",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations





	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Adaptive Evolution",
	},

	text: {
		en: "This Pokémon can evolve during your first turn or the turn you play it.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Gnaw",
			},


			damage: 10,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card