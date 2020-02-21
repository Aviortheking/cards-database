import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop8-6",
	localId: 6,

	// Card informations
	name: {
		en: "Cherrim",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 421,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop8/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop8/6/high",
		},
	},

	evolveFrom: {
		en: "Cherubi",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Worry Seed",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Magical Leaf",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage and remove 3 damage counters from Cherrim.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "POP Series 8",
		code: "pop8"
	}
}

export default card
