import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-94",
	localId: 94,

	// Card informations
	name: {
		en: "Dark Metal Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/94/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/94/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 51,
		name: "Takumi Akabane"
	},











	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card

