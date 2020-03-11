import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop2-10",
	localId: 10,

	// Card informations
	name: {
		en: "Pokémon Park",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop2/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop2/10/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Kazuo Yazawa",











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "POP Series 2",
		code: "pop2"
	}
}

export default card
