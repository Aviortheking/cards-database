import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-48",
	localId: 48,

	// Card informations
	name: {
		en: "Furret",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 162,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/48/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/48/high.png",
		},
	},

	evolveFrom: {
		en: "Sentret",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},

	abilities: [{
		id: 1023,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Scavenger Hunt",
		},
		text: {
			en: "Once during your turn (before your attack), you may put 2 cards from your hand into your deck. Then search your deck for an Energy card, show it to your opponent, and put it in your hand. Shuffle your deck afterward. This power can't be used if Furret is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spinning Attack",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card

