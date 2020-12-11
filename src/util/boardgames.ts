export type Boardgame = {
  name: String
  description: String
  bggLink: String
  imageName: String
}

const CATAN: Boardgame = {
  name: 'Catan',
  description:
    'Collect and trade resources to build up the island of Catan in this modern classic.',
  bggLink: 'https://boardgamegeek.com/boardgame/13/catan',
  imageName: 'catan.jpg'
}

const PANDEMIC: Boardgame = {
  name: 'Pandemic',
  description:
    'Your team of experts must prevent the world from succumbing to a viral pandemic.',
  bggLink: 'https://boardgamegeek.com/boardgame/30549/pandemic',
  imageName: 'pandemic.jpg',
}

const MEGA_MONOPOLY: Boardgame = {
  name: 'Mega Monopoly',
  description:
    'Monopoly bigger than ever with a board 30% larger than the original and with the option of skyscrapers.',
  bggLink: 'https://boardgamegeek.com/boardgame/24764/monopoly-mega-edition',
  imageName: 'mega_monopoly.jpg'
}

const SCYTHE: Boardgame = {
  name: 'Scythe',
  description:
    'Five countries vie for dominance in a war-torn, mech-filled, steampunk 1920s Europe.',
  bggLink: 'https://boardgamegeek.com/boardgame/169786/scythe',
  imageName: 'scythe.jpg',
}

export const BOARDGAMES = [
  CATAN,
  PANDEMIC,
  MEGA_MONOPOLY,
  SCYTHE
]
