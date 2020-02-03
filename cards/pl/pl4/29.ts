import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-29",
	localId: 29,

	// Card informations
	name: {
		en: "Raticate",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 20,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/29/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/29/high.png",
		},
	},

	evolveFrom: {
		en: "Rattata",
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
			Type.COLORLESS
		],
		name: {
			en: "Recruit",
		},
		text: {
			en: "Look at your opponent's hand, choose a Supporter card you find there, and discard it. Then, use the effect of that card as the effect of this attack.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Extend Fang",
		},
		text: {
			en: "If Raticate has a Pokémon Tool card attached to it, this attack does 20 damage plus 40 more damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card

