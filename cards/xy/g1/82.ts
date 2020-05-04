import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-82",
	localId: 82,

	// Card informations
	name: {
		en: "Basic Metal Energy",
		fr: "Énergie Metal de base",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/82/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/82/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/82/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASICENERGY,
		Tag.BASIC,
	],













	rarity: Rarity.COMMON,

	category: Category.ENERGY,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
