import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-92",
	localId: 92,

	// Card informations
	name: {
		en: "Great Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 16,
		name: "Nakaoka"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
