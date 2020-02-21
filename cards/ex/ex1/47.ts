import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-47",
	localId: 47,

	// Card informations
	name: {
		en: "Vigoroth",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 288,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/47/high",
		},
	},

	evolveFrom: {
		en: "Slakoth",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fury Swipes",
		},
		text: {
			en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rage",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each damage counter on Vigoroth.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
