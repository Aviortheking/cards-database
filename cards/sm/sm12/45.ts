import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-45",
	localId: 45,

	// Card informations
	name: {
		en: "Wailmer",
		fr: "Wailmer",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 320,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/45/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/45/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/45/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/45/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

