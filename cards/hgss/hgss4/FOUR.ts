import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-FOUR",
	localId: "FOUR",

	// Card informations
	name: {
		en: "Alph Lithograph",
		fr: "Lithographie d'Alpha",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/FOUR/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/FOUR/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/FOUR/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/FOUR/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 129,
		name: "Milky Isobe"
	},



	attacks: [{
		name: {},
		text: {
			fr: "REGARDEZ TOUTES VOS CARTES RECOMPENSE QUI SONT FACE CACHEE!",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card

