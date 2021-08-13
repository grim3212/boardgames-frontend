export type BoardGameSize = 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'

export type Boardgame = {
  _id?: string
  new?: Boolean
  name: string
  description: string
  bggLink: string
  imageName: string
  size: BoardGameSize
}

/**
 * The following definitions are / were used to seed the database with values
 */

const CATAN: Boardgame = {
  _id: '0',
  name: 'Catan',
  description:
    'Collect and trade resources to build up the island of Catan in this modern classic.',
  bggLink: 'https://boardgamegeek.com/boardgame/13/catan',
  imageName: 'catan.jpg',
  size: 'large',
}

const PANDEMIC_LEGACY: Boardgame = {
  _id: '1',
  name: 'Pandemic Legacy: Season 1',
  description: 'Mutating diseases are spreading around the world - can your team save humanity?',
  bggLink: 'https://boardgamegeek.com/boardgame/161936/pandemic-legacy-season-1',
  imageName: 'pandemic_legacy.png',
  size: 'large',
}

const MEGA_MONOPOLY: Boardgame = {
  _id: '2',
  name: 'Mega Monopoly',
  description:
    'Monopoly bigger than ever with a board 30% larger than the original and with the option of skyscrapers.',
  bggLink: 'https://boardgamegeek.com/boardgame/24764/monopoly-mega-edition',
  imageName: 'mega_monopoly.jpg',
  size: 'large',
}

const SCYTHE: Boardgame = {
  _id: '3',
  name: 'Scythe',
  description:
    'Five countries vie for dominance in a war-torn, mech-filled, steampunk 1920s Europe.',
  bggLink: 'https://boardgamegeek.com/boardgame/169786/scythe',
  imageName: 'scythe.jpg',
  size: 'large',
}

const BETRAYAL_LEGACY: Boardgame = {
  _id: '4',
  name: 'Betrayal Legacy',
  description:
    'Experience the stories locals have told for generations about that spooky old house.',
  bggLink: 'https://boardgamegeek.com/boardgame/240196/betrayal-legacy',
  imageName: 'betrayal_legacy.jpg',
  size: 'large',
}

const TICKET_TO_RIDE: Boardgame = {
  _id: '5',
  name: 'Ticket to Ride',
  description: 'Build your railroad across North America to connect cities and complete tickets.',
  bggLink: 'https://boardgamegeek.com/boardgame/9209/ticket-ride',
  imageName: 'ticket_to_ride.jpg',
  size: 'medium',
}

const ELDRITCH_HORROR: Boardgame = {
  _id: '6',
  name: 'Eldritch Horror',
  description: 'An unknown Elder God approaches the world—and you must solve mysteries to stop it.',
  bggLink: 'https://boardgamegeek.com/boardgame/146021/eldritch-horror',
  imageName: 'eldritch_horror.jpg',
  size: 'medium',
}

const PIT: Boardgame = {
  _id: '7',
  name: 'Pit',
  description: 'Trade 1! Trade 2! Trade 3! Trade 4! Will you get all the stock or end up poor?',
  bggLink: 'https://boardgamegeek.com/boardgame/140/pit',
  imageName: 'pit.jpg',
  size: 'small',
}

const GAME_OF_THRONES: Boardgame = {
  _id: '8',
  name: 'Game of Thrones',
  description: 'Make alliances—and break them!—as you strive to both unite and conquer Westeros.',
  bggLink: 'https://boardgamegeek.com/boardgame/103343/game-thrones-board-game-second-edition',
  imageName: 'game_of_thrones.jpg',
  size: 'large',
}

const TRIVIAL_PURSUIT: Boardgame = {
  _id: '9',
  name: 'Trivial Pursuit: 2000s Edition',
  description:
    'New edition of the classic trivia game this time testing your knowledge of the 2000s.',
  bggLink: 'https://boardgamegeek.com/boardgame/207911/trivial-pursuit-2000s-edition',
  imageName: 'trivial_pursuit.jpg',
  size: 'medium',
}

const ARGENT_CONSORTIUM: Boardgame = {
  _id: '10',
  name: 'Argent: The Consortium',
  description: `Convince a shadow Council that you'd be the best Chancellor of Argent's University.`,
  bggLink: 'https://boardgamegeek.com/boardgame/144797/argent-consortium',
  imageName: 'argent_consortium.jpg',
  size: 'medium',
}

const RISK: Boardgame = {
  _id: '11',
  name: 'Risk',
  description: 'Will you conquer the world in this multi-player push-your-luck wargame?',
  bggLink: 'https://boardgamegeek.com/boardgame/181/risk',
  imageName: 'risk.jpg',
  size: 'medium',
}

const DEAD_MEN_TELL_NO_TALES: Boardgame = {
  _id: '12',
  name: 'Dead Men Tell No Tales',
  description: 'Work together as pirates to defeat enemies and loot the burning ship.',
  bggLink: 'https://boardgamegeek.com/boardgame/141423/dead-men-tell-no-tales',
  imageName: 'dead_men_tell_no_tales.jpg',
  size: 'medium',
}

const CAMEL_UP: Boardgame = {
  _id: '13',
  name: 'Camel Up',
  description:
    'Which camel will win? Place your bets in this zany family friendly camel racing game.',
  bggLink: 'https://boardgamegeek.com/boardgame/153938/camel',
  imageName: 'camel_up.png',
  size: 'medium',
}

const CARDS_AGAINST_HUMANITY: Boardgame = {
  _id: '14',
  name: 'Cards Against Humanity',
  description: 'Who can come up with the most hilariously obscene answers in this party game?',
  bggLink: 'https://boardgamegeek.com/boardgame/50381/cards-against-humanity',
  imageName: 'cards_against_humanity.jpg',
  size: 'extra-large',
}

const WHAT_DO_YOU_MEME: Boardgame = {
  _id: '15',
  name: 'What Do You Meme?',
  description: `Think you've got what it takes to out-meme your friends IRL?`,
  bggLink: 'https://boardgamegeek.com/boardgame/226610/what-do-you-meme',
  imageName: 'what_do_you_meme.png',
  size: 'medium',
}

const DISNEY_VILLAINOUS: Boardgame = {
  _id: '16',
  name: 'Disney Villainous',
  description: 'The villains assemble to face off, race to their goal, and rule the Disney realms.',
  bggLink: 'https://boardgamegeek.com/boardgame/256382/disney-villainous',
  imageName: 'villainous.jpg',
  size: 'large',
}

const AXIS_AND_ALLIES: Boardgame = {
  _id: '17',
  name: 'Axis & Allies Europe 1940',
  description:
    'Axis & Allies: Europe 1940 is a 2010 board wargame simulating the European Theatre of World War II at the strategic level.',
  bggLink: 'https://boardgamegeek.com/boardgame/61692/axis-allies-europe-1940',
  imageName: 'axis_and_allies.jpg',
  size: 'extra-large',
}

const CELTICA: Boardgame = {
  _id: '18',
  name: 'Celtica',
  description:
    'In 11th century Ireland players try to gather amulets with the help of five druids. Each amulet is divided in 9 parts and the player with the most complete amulets wins the game.',
  bggLink: 'https://boardgamegeek.com/boardgame/21293/celtica',
  imageName: 'celtica.jpg',
  size: 'large',
}

const BETRAYAL_AT_BALDURS_GATE: Boardgame = {
  _id: '19',
  name: `Betrayal at Baldur's Gate`,
  description: 'Explore the city, discover its mystery, and face the traitor amongst yourselves...',
  bggLink: 'https://boardgamegeek.com/boardgame/228660/betrayal-baldurs-gate',
  imageName: 'betrayal_at_baldurs_gate.png',
  size: 'medium',
}

const DIPLOMACY: Boardgame = {
  _id: '20',
  name: 'Diplomacy',
  description:
    'Powers of post-Victorian Europe cooperate and clash to become master of the Continent.',
  bggLink: 'https://boardgamegeek.com/boardgame/483/diplomacy',
  imageName: 'diplomacy.jpg',
  size: 'medium',
}

const CARCASSONNE: Boardgame = {
  _id: '21',
  name: 'Carcassonne',
  description: 'Shape the medieval landscape of France, claiming cities, monasteries and farms.',
  bggLink: 'https://boardgamegeek.com/boardgame/822/carcassonne',
  imageName: 'carcassonne.jpg',
  size: 'large',
}

const TELESTRATIONS_AFTER_DARK: Boardgame = {
  _id: '22',
  name: 'Telestrations After Dark',
  description:
    'Draw what you see then guess what You saw for hilarious, weird, irresponsible and just plain wrong outcomes.',
  bggLink: 'https://boardgamegeek.com/boardgame/173761/telestrations-after-dark',
  imageName: 'telestrations_after_dark.jpg',
  size: 'medium',
}

const MYSTERIUM: Boardgame = {
  _id: '23',
  name: 'Mysterium',
  description:
    'Become a psychic and divine spectral visions to solve the murder of a restless ghost.',
  bggLink: 'https://boardgamegeek.com/boardgame/181304/mysterium',
  imageName: 'mysterium.jpg',
  size: 'medium',
}

const TERRAFORMING_MARS: Boardgame = {
  _id: '24',
  name: 'Terraforming Mars',
  description: 'Compete with rival CEOs to make Mars habitable and build your corporate empire.',
  bggLink: 'https://boardgamegeek.com/boardgame/167791/terraforming-mars',
  imageName: 'terraforming_mars.jpg',
  size: 'medium',
}

const CAPTAIN_IS_DEAD: Boardgame = {
  _id: '25',
  name: 'The Captain Is Dead',
  description:
    'Aliens are attacking! Work together using special strengths to start your spaceship.',
  bggLink: 'https://boardgamegeek.com/boardgame/159503/captain-dead',
  imageName: 'captain_is_dead.jpg',
  size: 'medium',
}

const EXPLORERS_OF_IXALAN: Boardgame = {
  _id: '26',
  name: 'Magic: The Gathering – Explorers of Ixalan',
  description:
    'An out-of-the-box multiplayer Magic experience. Defeat your opponents as you search for the lost city.',
  bggLink: 'https://boardgamegeek.com/boardgame/231309/magic-gathering-explorers-ixalan',
  imageName: 'explorers_of_ixalan.png',
  size: 'medium',
}

const TSURO: Boardgame = {
  _id: '27',
  name: 'Tsuro of the Seas',
  description: 'Avoid the daikaiju. Sink your opponents in your wake. Become master of the seas.',
  bggLink: 'https://boardgamegeek.com/boardgame/124172/tsuro-seas',
  imageName: 'tsuro.jpg',
  size: 'medium',
}

const HELLAPAGOS: Boardgame = {
  _id: '28',
  name: 'Hellapagos',
  description: 'Players survive on a desert island and build a raft to escape before disaster.',
  bggLink: 'https://boardgamegeek.com/boardgame/224272/hellapagos',
  imageName: 'hellapagos.jpg',
  size: 'medium',
}

const FORBIDDEN_ISLAND: Boardgame = {
  _id: '29',
  name: 'Forbidden Island',
  description: 'The island is sinking! Will the brave adventurers save the treasures in time?',
  bggLink: 'https://boardgamegeek.com/boardgame/65244/forbidden-island',
  imageName: 'forbidden_island.jpg',
  size: 'medium',
}

const RED_FLAGS: Boardgame = {
  _id: '30',
  name: 'Red Flags',
  description:
    'Red Flags is "The Game of Terrible Dates", where you set each other up and decide which date is best.',
  bggLink: 'https://boardgamegeek.com/boardgame/189062/red-flags',
  imageName: 'red_flags.jpg',
  size: 'small',
}

const NEW_PHONE: Boardgame = {
  _id: '31',
  name: 'New Phone, Who Dis?',
  description:
    'Players rotate drawing a sent (or “inbox”) card while the rest of the group competes to play the funniest reply card.',
  bggLink: 'https://boardgamegeek.com/boardgame/287810/new-phone-who-dis',
  imageName: 'new_phone.jpg',
  size: 'medium',
}

const SECRET_HITLER: Boardgame = {
  _id: '32',
  name: 'Secret Hitler',
  description:
    'In pre-WW2 Germany, Liberals and Fascists square off in an intrigue-filled parliament.',
  bggLink: 'https://boardgamegeek.com/boardgame/188834/secret-hitler',
  imageName: 'secret_hitler.jpg',
  size: 'medium',
}

const VEGAS_SHOWDOWN: Boardgame = {
  _id: '33',
  name: 'Vegas Showdown',
  description: 'Bid on tiles to build the best casino in all of Las Vegas.',
  bggLink: 'https://boardgamegeek.com/boardgame/15364/vegas-showdown',
  imageName: 'vegas_showdown.jpg',
  size: 'medium',
}

const SAY_ANYTHING: Boardgame = {
  _id: '34',
  name: 'Say Anything',
  description: 'One player is asked a question. The others predict, and bet on, their answer.',
  bggLink: 'https://boardgamegeek.com/boardgame/33604/say-anything',
  imageName: 'say_anything.jpg',
  size: 'medium',
}

const ZOMBIE_DICE: Boardgame = {
  _id: '35',
  name: 'Zombie Dice',
  description: 'Eat as many tasty brains as you dare, without getting shotgunned.',
  bggLink: 'https://boardgamegeek.com/boardgame/62871/zombie-dice',
  imageName: 'zombie_dice.jpg',
  size: 'extra-small',
}

const WE_DIDNT_PLAYTEST: Boardgame = {
  _id: '36',
  name: `We Didn't Playtest This At All`,
  description:
    'From Zombies to Bombs to the card "I Lose," join the hilarity in this zany card game.',
  bggLink: 'https://boardgamegeek.com/boardgame/31016/we-didnt-playtest-all',
  imageName: 'we_didnt_playtest.jpg',
  size: 'extra-small',
}

const ARENA_OF_PLANESWALKERS: Boardgame = {
  _id: '37',
  name: 'Magic: The Gathering – Arena of the Planeswalkers',
  description:
    'Summon dangerous creatures and cast powerful spells in this miniatures-based wargame.',
  bggLink: 'https://boardgamegeek.com/boardgame/167698/magic-gathering-arena-planeswalkers',
  imageName: 'arena_of_planeswalkers.jpg',
  size: 'medium',
}

const ULTIMATE_WEREWOLF: Boardgame = {
  _id: '38',
  name: 'Ultimate Werewolf: Deluxe Edition',
  description: 'Pesky Werewolves have invaded your village. Find them, or be eaten trying.',
  bggLink: 'https://boardgamegeek.com/boardgame/152242/ultimate-werewolf-deluxe-edition',
  imageName: 'ultimate_werewolf.png',
  size: 'small',
}

const ONE_NIGHT_WEREWOLF: Boardgame = {
  _id: '39',
  name: 'One Night Ultimate Werewolf',
  description: 'An app-driven Werewolf that lasts but a single night. Wolves and villagers beware!',
  bggLink: 'https://boardgamegeek.com/boardgame/147949/one-night-ultimate-werewolf',
  imageName: 'one_night_werewolf.jpg',
  size: 'small',
}

const TOWN_OF_SALEM: Boardgame = {
  _id: '40',
  name: 'Town of Salem: The Card Game',
  description:
    'Town of Salem is a game of Murder, Mayhem, and Deception. Engage in a battle of wits until one side remains.',
  bggLink: 'https://boardgamegeek.com/boardgame/191432/town-salem-card-game',
  imageName: 'town_of_salem.jpg',
  size: 'small',
}

const ZOMBIES: Boardgame = {
  _id: '41',
  name: 'Zombies!!!',
  description: 'Be the first survivor to reach the helipad and leave or kill 25 zombies to win!',
  bggLink: 'https://boardgamegeek.com/boardgame/2471/zombies',
  imageName: 'zombies.jpg',
  size: 'small',
}

const NO_THANKS: Boardgame = {
  _id: '42',
  name: 'No Thanks!',
  description:
    'Take a card each round, or pay to say no; grab the right cards to lower your score.',
  bggLink: 'https://boardgamegeek.com/boardgame/12942/no-thanks',
  imageName: 'no_thanks.jpg',
  size: 'extra-small',
}

const JOKING_HAZARD: Boardgame = {
  _id: '43',
  name: 'Joking Hazard',
  description: 'Now YOU can create a hilarious dirty three-panel comic with your friends!',
  bggLink: 'https://boardgamegeek.com/boardgame/193621/joking-hazard',
  imageName: 'joking_hazard.jpg',
  size: 'medium',
}

const COUP: Boardgame = {
  _id: '44',
  name: 'Coup',
  description: 'Bluff (and call bluffs!) to victory in this card game with no third chances.',
  bggLink: 'https://boardgamegeek.com/boardgame/131357/coup',
  imageName: 'coup.jpg',
  size: 'small',
}

const CHIMERA: Boardgame = {
  _id: '45',
  name: 'Chimera',
  description:
    'Chimera is a three-player card game of two against one similar to climbing- and shedding-based card games like Tichu, The Great Dalmuti, Big Two, Dou Dizhu, and Beat the Landlord.',
  bggLink: 'https://boardgamegeek.com/boardgame/156373/chimera',
  imageName: 'chimera.png',
  size: 'small',
}

const MORELS: Boardgame = {
  _id: '46',
  name: 'Morels',
  description: 'Walk through the woods, collect mushrooms, and cook them up for tasty points.',
  bggLink: 'https://boardgamegeek.com/boardgame/122298/morels',
  imageName: 'morels.jpg',
  size: 'medium',
}

const SUSHI_GO_PARTY: Boardgame = {
  _id: '47',
  name: 'Sushi Go Party!',
  description: 'Pass sushi around a bigger table and take the best dishes. Save room for dessert!',
  bggLink: 'https://boardgamegeek.com/boardgame/192291/sushi-go-party',
  imageName: 'sushi_go_party.jpg',
  size: 'medium',
}

const DUNGEON_MAYHEM: Boardgame = {
  _id: '48',
  name: 'Dungeon Mayhem: Monster Madness',
  description:
    'In Dungeon Mayhem: Monster Madness, you play as one of six epic D&D monsters, each with their own way to charm, crush, disintegrate, and devour their foes.',
  bggLink: 'https://boardgamegeek.com/boardgame/295577/dungeon-mayhem-monster-madness',
  imageName: 'dungeon_mayhem.jpg',
  size: 'medium',
}

const DIAMONDS: Boardgame = {
  _id: '49',
  name: 'Diamonds',
  description: 'Collect the most diamonds—as in actual jewels. Trick-taking has never been richer!',
  bggLink: 'https://boardgamegeek.com/boardgame/152162/diamonds',
  imageName: 'diamonds.jpg',
  size: 'small',
}

const AVALON: Boardgame = {
  _id: '50',
  name: 'The Resistance: Avalon',
  description:
    'Who can you trust? A game of social deduction set in King Arthur’s legendary realm.',
  bggLink: 'https://boardgamegeek.com/boardgame/128882/resistance-avalon',
  imageName: 'avalon.jpg',
  size: 'small',
}

const UTTER_NONSENSE: Boardgame = {
  _id: '51',
  name: 'Utter Nonsense',
  description:
    'Utter Nonsense is a card game where players combine stereotypical accents with outrageous phrases to create sayings that are just plain ridiculous.',
  bggLink: 'https://boardgamegeek.com/boardgame/161928/utter-nonsense',
  imageName: 'utter_nonsense.png',
  size: 'medium',
}

const UNO: Boardgame = {
  _id: '52',
  name: 'UNO',
  description: 'Get rid of your cards before the others, but beware of forgetting to say "UNO!".',
  bggLink: 'https://boardgamegeek.com/boardgame/2223/uno',
  imageName: 'uno.jpg',
  size: 'extra-small',
}

const EXPLODING_KITTENS: Boardgame = {
  _id: '53',
  name: 'Exploding Kittens',
  description:
    'Ask for favors, attack friends, see the future- whatever it takes to avoid explosion!',
  bggLink: 'https://boardgamegeek.com/boardgame/172225/exploding-kittens',
  imageName: 'exploding_kittens.png',
  size: 'small',
}

const UNSTABLE_UNICORNS: Boardgame = {
  _id: '54',
  name: 'Unstable Unicorns',
  description: 'We know unicorns are cute and cuddly...but who knew they could be so mean?!',
  bggLink: 'https://boardgamegeek.com/boardgame/234190/unstable-unicorns',
  imageName: 'unstable_unicorns.jpg',
  size: 'small',
}

const WIZARD: Boardgame = {
  _id: '55',
  name: 'Wizard',
  description: `Predict how many tricks you'll win, with the help of Wizards and Jesters.`,
  bggLink: 'https://boardgamegeek.com/boardgame/1465/wizard',
  imageName: 'wizard.jpg',
  size: 'extra-small',
}

const GREAT_DALMUTI: Boardgame = {
  _id: '56',
  name: 'The Great Dalmuti',
  description: 'Get rid of your cards to rise through society from peon to Dalmuti.',
  bggLink: 'https://boardgamegeek.com/boardgame/929/great-dalmuti',
  imageName: 'great_dalmuti.jpg',
  size: 'extra-small',
}

const TICHU: Boardgame = {
  _id: '57',
  name: 'Tichu',
  description: 'Be the first to empty your hand in this popular partnership climbing card game.',
  bggLink: 'https://boardgamegeek.com/boardgame/215/tichu',
  imageName: 'tichu.jpg',
  size: 'extra-small',
}

const FLUXX: Boardgame = {
  _id: '58',
  name: 'Fluxx',
  description: 'Play cards and alter the rules in this ever changing card game!',
  bggLink: 'https://boardgamegeek.com/boardgame/258/fluxx',
  imageName: 'fluxx.jpg',
  size: 'extra-small',
}

const MONIKERS: Boardgame = {
  _id: '59',
  name: 'Monikers',
  description: 'This curated version of a classic game is guaranteed to create laughs!',
  bggLink: 'https://boardgamegeek.com/boardgame/156546/monikers',
  imageName: 'monikers.png',
  size: 'medium',
}

const CODENAMES: Boardgame = {
  _id: '60',
  name: 'Codenames',
  description: 'Give your team clever one-word clues to help them spot their agents in the field.',
  bggLink: 'https://boardgamegeek.com/boardgame/178900/codenames',
  imageName: 'codenames.jpg',
  size: 'medium',
}

const KINGDOMINO: Boardgame = {
  _id: '61',
  name: 'Kingdomino',
  description:
    'Build a kingdom with varied terrains on domino-shaped tiles in this fast family game.',
  bggLink: 'https://boardgamegeek.com/boardgame/204583/kingdomino',
  imageName: 'king_domino.png',
  size: 'medium',
}

const FOR_SALE: Boardgame = {
  _id: '62',
  name: 'For Sale',
  description: `What's your bid? Bid on promising property bundles, then sell properties for checks.`,
  bggLink: 'https://boardgamegeek.com/boardgame/172/sale',
  imageName: 'for_sale.jpg',
  size: 'medium',
}

const COVER_YOUR_KINGDOM: Boardgame = {
  _id: '63',
  name: 'Cover Your Kingdom',
  description: `A Magically Malicious contest to collect and recruit Creatures for your Kingdom.`,
  bggLink: 'https://boardgamegeek.com/boardgame/281132/cover-your-kingdom',
  imageName: 'cover_your_kingdom.jpg',
  size: 'medium',
}

const BEARS_AND_BEES: Boardgame = {
  _id: '64',
  name: 'The Bears and the Bees',
  description: 'Help grow the hive to your advantage, but watch out for those pesky bears!',
  bggLink: 'https://boardgamegeek.com/boardgame/257372/bears-and-bees',
  imageName: 'bears_and_bees.jpg',
  size: 'small',
}

const SKULL_KING: Boardgame = {
  _id: '65',
  name: 'Skull King',
  description: 'Trick-taking on the high seas. Meet your bid to please the Skull King.',
  bggLink: 'https://boardgamegeek.com/boardgame/150145/skull-king',
  imageName: 'skull_king.png',
  size: 'small',
}

const SABACC: Boardgame = {
  _id: '66',
  name: 'Sabacc',
  description:
    'A hand-management game where players take turns drawing and discarding cards one at a time in hopes of ending the round with the sum of their card values closest to zero.',
  bggLink: 'https://boardgamegeek.com/boardgame/251538/star-wars-han-solo-card-game',
  imageName: 'sabacc.jpg',
  size: 'small',
}

const CASTLES_OF_BURGUNDY: Boardgame = {
  _id: '67',
  name: 'Castles of Burgundy',
  description: 'Plan, trade, and build your Burgundian estate to prosperity and prominence.',
  bggLink: 'https://boardgamegeek.com/boardgame/84876/castles-burgundy',
  imageName: 'castles_of_burgundy.jpg',
  size: 'medium',
}

// NEW =====================================================

const SPLENDOR: Boardgame = {
  _id: '68',
  new: true,
  name: 'Splendor',
  description: 'Renaissance merchants race to grab gems, acquire property, and please nobility.',
  bggLink: 'https://boardgamegeek.com/boardgame/148228/splendor',
  imageName: 'splendor.jpg',
  size: 'medium',
}

const HORRIFIED: Boardgame = {
  _id: '69',
  new: true,
  name: 'Horrified',
  description: 'Classic movie monsters terrorize a town! Can your team stop them in time?',
  bggLink: 'https://boardgamegeek.com/boardgame/282524/horrified',
  imageName: 'horrified.jpg',
  size: 'medium',
}

const AGRICOLA: Boardgame = {
  _id: '70',
  new: true,
  name: 'Agricola',
  description: `Build your farmstead by sowing fields and raising livestock. But don't forget to eat!`,
  bggLink: 'https://boardgamegeek.com/boardgame/31260/agricola',
  imageName: 'agricola.jpg',
  size: 'medium',
}

const SEVEN_WONDERS: Boardgame = {
  _id: '71',
  new: true,
  name: '7 Wonders',
  description:
    'Draft cards to develop your ancient civilization and build its Wonder of the World.',
  bggLink: 'https://boardgamegeek.com/boardgame/68448/7-wonders',
  imageName: 'seven_wonders.jpg',
  size: 'medium',
}

const DIXIT: Boardgame = {
  _id: '72',
  new: true,
  name: 'Dixit',
  description:
    'Give the perfect clue so most (not all) players guess the right surreal image card.',
  bggLink: 'https://boardgamegeek.com/boardgame/39856/dixit',
  imageName: 'dixit.jpg',
  size: 'medium',
}

const ONCE_UPON_A_TIME: Boardgame = {
  _id: '73',
  new: true,
  name: 'Once Upon a Time',
  description: 'Be the first to play out your cards while building a crazy fairytale from scratch.',
  bggLink: 'https://boardgamegeek.com/boardgame/1234/once-upon-time-storytelling-card-game',
  imageName: 'once_upon_a_time.jpg',
  size: 'small',
}

const MU_LOTS_MORE: Boardgame = {
  _id: '74',
  name: 'Mü and Lots More',
  description: 'Compendium of intriguing trick-taking games',
  bggLink: 'https://boardgamegeek.com/boardgame/32928/mu-and-lots-more',
  imageName: 'mu_lots_more.jpg',
  size: 'small',
}

const BUCKET_OF_DOOM: Boardgame = {
  _id: '75',
  new: true,
  name: 'Bucket of Doom',
  description: 'Escape from seriously bad situations with the help of seriously useless objects.',
  bggLink: 'https://boardgamegeek.com/boardgame/166081/bucket-doom',
  imageName: 'bucket_of_doom.jpg',
  size: 'medium',
}

export const BOARDGAMES = [
  SPLENDOR,
  BUCKET_OF_DOOM,
  ONCE_UPON_A_TIME,
  MU_LOTS_MORE,
  DIXIT,
  SEVEN_WONDERS,
  AGRICOLA,
  HORRIFIED,
  WIZARD,
  GREAT_DALMUTI,
  TICHU,
  FLUXX,
  MONIKERS,
  CODENAMES,
  KINGDOMINO,
  FOR_SALE,
  COVER_YOUR_KINGDOM,
  BEARS_AND_BEES,
  SKULL_KING,
  SABACC,
  CATAN,
  NO_THANKS,
  JOKING_HAZARD,
  COUP,
  CHIMERA,
  MORELS,
  SUSHI_GO_PARTY,
  DUNGEON_MAYHEM,
  DIAMONDS,
  AVALON,
  UTTER_NONSENSE,
  UNO,
  EXPLODING_KITTENS,
  UNSTABLE_UNICORNS,
  ARENA_OF_PLANESWALKERS,
  ULTIMATE_WEREWOLF,
  ONE_NIGHT_WEREWOLF,
  TOWN_OF_SALEM,
  ZOMBIES,
  CAPTAIN_IS_DEAD,
  EXPLORERS_OF_IXALAN,
  TSURO,
  HELLAPAGOS,
  FORBIDDEN_ISLAND,
  RED_FLAGS,
  NEW_PHONE,
  SECRET_HITLER,
  VEGAS_SHOWDOWN,
  SAY_ANYTHING,
  ZOMBIE_DICE,
  WE_DIDNT_PLAYTEST,
  CARCASSONNE,
  TELESTRATIONS_AFTER_DARK,
  CASTLES_OF_BURGUNDY,
  MYSTERIUM,
  TERRAFORMING_MARS,
  PANDEMIC_LEGACY,
  MEGA_MONOPOLY,
  SCYTHE,
  BETRAYAL_LEGACY,
  DIPLOMACY,
  TICKET_TO_RIDE,
  ELDRITCH_HORROR,
  PIT,
  GAME_OF_THRONES,
  TRIVIAL_PURSUIT,
  ARGENT_CONSORTIUM,
  RISK,
  DEAD_MEN_TELL_NO_TALES,
  CAMEL_UP,
  CARDS_AGAINST_HUMANITY,
  WHAT_DO_YOU_MEME,
  DISNEY_VILLAINOUS,
  BETRAYAL_AT_BALDURS_GATE,
  AXIS_AND_ALLIES,
  CELTICA,
].sort((a, b) => (a.name > b.name ? 1 : -1))
