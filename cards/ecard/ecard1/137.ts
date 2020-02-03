import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-137",
	localId: 137,

	// Card informations
	name: {
		en: "Bill's Maintenance",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/137/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/137/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card

