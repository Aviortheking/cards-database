import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-52",
	localId: 52,

	// Card informations
	name: {
		en: "Venipede",
		fr: "Venipatte",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 543,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/52/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/52/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/52/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/52/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card

