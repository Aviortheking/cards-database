import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-158",
	localId: 158,

	// Card informations
	name: {
		en: "Big Charm",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/158/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/158/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],





	attacks: [{
		name: {},
		text: {
			en: "The Pokémon this card is attached to gets +30 HP.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

