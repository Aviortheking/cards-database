import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base1-77",
	localId: 77,

	// Card informations
	name: {
		en: "Pokémon Trader",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base1/77/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base1/77/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},











	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Base",
		code: "base1"
	}
}

export default card

