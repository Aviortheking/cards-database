import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-80",
	localId: 80,

	// Card informations
	name: {
		en: "Slakoth",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 287,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Lazy Punch",
		},
		text: {
			en: "Slakoth can't attack during your next turn.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
