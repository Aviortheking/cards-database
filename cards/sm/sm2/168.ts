import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-168",
	localId: 168,

	// Card informations
	name: {
		en: "Lightning Energy",
		fr: "Énergie Lightning de base",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/168/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/168/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/168/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/168/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASICENERGY,
		Tag.BASIC,
	],













	rarity: Rarity.Rare,

	category: Category.ENERGY,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
