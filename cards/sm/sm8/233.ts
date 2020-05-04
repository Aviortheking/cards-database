import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-233",
	localId: 233,

	// Card informations
	name: {
		en: "Lost Blender",
		fr: "Mixeur Perdu",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/233/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/233/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/233/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/233/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Placez 2 cartes de votre main dans la Zone Perdue. Dans ce cas, piochez une carte.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
