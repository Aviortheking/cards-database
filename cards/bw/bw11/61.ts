import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-61",
	localId: 61,

	// Card informations
	name: {
		en: "Sableye",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 302,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/61/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/61/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 139,
		name: "Hiroki Asanuma"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Tight Jaw",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 30
	}],







	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card

