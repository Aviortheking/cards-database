import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-85",
	localId: 85,

	// Card informations
	name: {
		en: "Holon Energy GL",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/85/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Takumi Akabane",











	rarity: Rarity.RARE,

	category: Category.ENERGY,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
