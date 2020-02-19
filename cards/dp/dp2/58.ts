import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-58",
	localId: 58,

	// Card informations
	name: {
		en: "Parasect",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 47,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/58/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/58/high.png",
		},
	},

	evolveFrom: {
		en: "Paras",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Wild Spores",
		},
		text: {
			en: "If Parasect evolved from Paras during this turn, this attack does 40 damage and the Defending Pokémon is now Asleep and Poisoned.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Extend Fungus",
		},
		text: {
			en: "Remove 2 damage counters from Parasect.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card

