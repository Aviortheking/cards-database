import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/mc/2021swsh'

const card: Card = {

	// ids
	id: "2021swsh-7",
	localId: 7,

	// Card informations
	name: {
		en: "Rowlet",
		fr: "Brindibou",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 722,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/9/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/9/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/9/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Megumi Mizutani",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Leafage",
			fr: "Feuillage",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: set
}

export default card