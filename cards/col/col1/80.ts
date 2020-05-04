import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-80",
	localId: 80,

	// Card informations
	name: {
		en: "Lost Remover",
		fr: "Nettoyeur perdu",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/80/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/80/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Wataru Kawahara",



	attacks: [{
		name: {},
		text: {
			fr: "Placez 1 carte Énergie spéciale attachée à l’un des Pokémon de votre adversaire dans la Zone Perdue.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
