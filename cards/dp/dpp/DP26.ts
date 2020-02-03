import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP26",
	localId: "DP26",

	// Card informations
	name: {
		en: "Dialga",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 483,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP26/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP26/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 97,
		name: "Kazuyuki Kano"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Time Bellow",
		},
		text: {
			en: "Draw a card.",
		},
		damage: 10
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Flash Cannon",
		},
		text: {
			en: "You may return all Energy cards attached to Dialga to your hand. If you do, remove the highest Stage Evolution card from the Defending Pokémon and shuffle that card into your opponent's deck.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "DP Black Star Promos",
		code: "dpp"
	}
}

export default card

