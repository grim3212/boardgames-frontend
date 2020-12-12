
export type Boardgame = {
  _id?: string
  name: string
  description: string
  bggLink: string
  imageName: string
  size: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'
}

/**
 * The following definitions are / were used to seed the database with values
 */

const CATAN: Boardgame = {
  name: 'Catan',
  description:
    'Collect and trade resources to build up the island of Catan in this modern classic.',
  bggLink: 'https://boardgamegeek.com/boardgame/13/catan',
  imageName: 'catan.jpg',
  size: 'large',
}

const PANDEMIC_LEGACY: Boardgame = {
  name: 'Pandemic Legacy: Season 1',
  description: 'Mutating diseases are spreading around the world - can your team save humanity?',
  bggLink: 'https://boardgamegeek.com/boardgame/161936/pandemic-legacy-season-1',
  imageName: 'pandemic_legacy.png',
  size: 'large',
}

const MEGA_MONOPOLY: Boardgame = {
  name: 'Mega Monopoly',
  description:
    'Monopoly bigger than ever with a board 30% larger than the original and with the option of skyscrapers.',
  bggLink: 'https://boardgamegeek.com/boardgame/24764/monopoly-mega-edition',
  imageName: 'mega_monopoly.jpg',
  size: 'large',
}

const SCYTHE: Boardgame = {
  name: 'Scythe',
  description:
    'Five countries vie for dominance in a war-torn, mech-filled, steampunk 1920s Europe.',
  bggLink: 'https://boardgamegeek.com/boardgame/169786/scythe',
  imageName: 'scythe.jpg',
  size: 'large',
}

const BETRAYAL_LEGACY: Boardgame = {
  name: 'Betrayal Legacy',
  description:
    'Experience the stories locals have told for generations about that spooky old house.',
  bggLink: 'https://boardgamegeek.com/boardgame/240196/betrayal-legacy',
  imageName: 'betrayal_legacy.jpg',
  size: 'large',
}

const TICKET_TO_RIDE: Boardgame = {
  name: 'Ticket to Ride',
  description: 'Build your railroad across North America to connect cities and complete tickets.',
  bggLink: 'https://boardgamegeek.com/boardgame/9209/ticket-ride',
  imageName: 'ticket_to_ride.jpg',
  size: 'medium',
}

const ELDRITCH_HORROR: Boardgame = {
  name: 'Eldritch Horror',
  description: 'An unknown Elder God approaches the world—and you must solve mysteries to stop it.',
  bggLink: 'https://boardgamegeek.com/boardgame/146021/eldritch-horror',
  imageName: 'eldritch_horror.jpg',
  size: 'medium',
}

const PIT: Boardgame = {
  name: 'Pit',
  description: 'Trade 1! Trade 2! Trade 3! Trade 4! Will you get all the stock or end up poor?',
  bggLink: 'https://boardgamegeek.com/boardgame/140/pit',
  imageName: 'pit.jpg',
  size: 'small',
}

const GAME_OF_THRONES: Boardgame = {
  name: 'Game of Thrones',
  description: 'Make alliances—and break them!—as you strive to both unite and conquer Westeros.',
  bggLink: 'https://boardgamegeek.com/boardgame/103343/game-thrones-board-game-second-edition',
  imageName: 'game_of_thrones.jpg',
  size: 'large',
}

const TRIVIAL_PURSUIT: Boardgame = {
  name: 'Trivial Pursuit: 2000s Edition',
  description:
    'New edition of the classic trivia game this time testing your knowledge of the 2000s.',
  bggLink: 'https://boardgamegeek.com/boardgame/207911/trivial-pursuit-2000s-edition',
  imageName: 'trivial_pursuit.jpg',
  size: 'medium',
}

const ARGENT_CONSORTIUM: Boardgame = {
  name: 'Argent: The Consortium',
  description: `Convince a shadow Council that you'd be the best Chancellor of Argent's University.`,
  bggLink: 'https://boardgamegeek.com/boardgame/144797/argent-consortium',
  imageName: 'argent_consortium.jpg',
  size: 'medium',
}

const RISK: Boardgame = {
  name: 'Risk',
  description: 'Will you conquer the world in this multi-player push-your-luck wargame?',
  bggLink: 'https://boardgamegeek.com/boardgame/181/risk',
  imageName: 'risk.jpg',
  size: 'medium',
}

const DEAD_MEN_TELL_NO_TALES: Boardgame = {
  name: 'Dead Men Tell No Tales',
  description: 'Work together as pirates to defeat enemies and loot the burning ship.',
  bggLink: 'https://boardgamegeek.com/boardgame/141423/dead-men-tell-no-tales',
  imageName: 'dead_men_tell_no_tales.jpg',
  size: 'medium',
}

const CAMEL_UP: Boardgame = {
  name: 'Camel Up',
  description:
    'Which camel will win? Place your bets in this zany family friendly camel racing game.',
  bggLink: 'https://boardgamegeek.com/boardgame/153938/camel',
  imageName: 'camel_up.png',
  size: 'medium',
}

const CARDS_AGAINST_HUMANITY: Boardgame = {
  name: 'Cards Against Humanity',
  description: 'Who can come up with the most hilariously obscene answers in this party game?',
  bggLink: 'https://boardgamegeek.com/boardgame/50381/cards-against-humanity',
  imageName: 'cards_against_humanity.jpg',
  size: 'extra-large',
}

const WHAT_DO_YOU_MEME: Boardgame = {
  name: 'What Do You Meme?',
  description: `Think you've got what it takes to out-meme your friends IRL?`,
  bggLink: 'https://boardgamegeek.com/boardgame/226610/what-do-you-meme',
  imageName: 'what_do_you_meme.png',
  size: 'medium',
}

const DISNEY_VILLAINOUS: Boardgame = {
  name: 'Disney Villainous',
  description: 'The villains assemble to face off, race to their goal, and rule the Disney realms.',
  bggLink: 'https://boardgamegeek.com/boardgame/256382/disney-villainous',
  imageName: 'villainous.jpg',
  size: 'large',
}

const AXIS_AND_ALLIES: Boardgame = {
  name: 'Axis & Allies Europe 1940',
  description:
    'Axis & Allies: Europe 1940 is a 2010 board wargame simulating the European Theatre of World War II at the strategic level.',
  bggLink: 'https://boardgamegeek.com/boardgame/61692/axis-allies-europe-1940',
  imageName: 'axis_and_allies.jpg',
  size: 'extra-large',
}

const CELTICA: Boardgame = {
  name: 'Celtica',
  description:
    'In 11th century Ireland players try to gather amulets with the help of five druids. Each amulet is divided in 9 parts and the player with the most complete amulets wins the game.',
  bggLink: 'https://boardgamegeek.com/boardgame/21293/celtica',
  imageName: 'celtica.jpg',
  size: 'large',
}

const BETRAYAL_AT_BALDURS_GATE: Boardgame = {
  name: `Betrayal at Baldur's Gate`,
  description: 'Explore the city, discover its mystery, and face the traitor amongst yourselves...',
  bggLink: 'https://boardgamegeek.com/boardgame/228660/betrayal-baldurs-gate',
  imageName: 'betrayal_at_baldurs_gate.png',
  size: 'medium',
}

const DIPLOMACY: Boardgame = {
  name: 'Diplomacy',
  description:
    'Powers of post-Victorian Europe cooperate and clash to become master of the Continent.',
  bggLink: 'https://boardgamegeek.com/boardgame/483/diplomacy',
  imageName: 'diplomacy.jpg',
  size: 'medium',
}

const CARCASSONNE: Boardgame = {
  name: 'Carcassonne',
  description: 'Shape the medieval landscape of France, claiming cities, monasteries and farms.',
  bggLink: 'https://boardgamegeek.com/boardgame/822/carcassonne',
  imageName: 'carcassonne.jpg',
  size: 'large',
}

const TELESTRATIONS_AFTER_DARK: Boardgame = {
  name: 'Telestrations After Dark',
  description:
    'Draw what you see then guess what You saw for hilarious, weird, irresponsible and just plain wrong outcomes.',
  bggLink: 'https://boardgamegeek.com/boardgame/173761/telestrations-after-dark',
  imageName: 'telestrations_after_dark.jpg',
  size: 'medium',
}

const CASTLES_OF_BURGUNDY: Boardgame = {
  name: 'Castles of Burgundy',
  description: 'Plan, trade, and build your Burgundian estate to prosperity and prominence.',
  bggLink: 'https://boardgamegeek.com/boardgame/84876/castles-burgundy',
  imageName: 'castles_of_burgundy.jpg',
  size: 'medium',
}

const MYSTERIUM: Boardgame = {
  name: 'Mysterium',
  description:
    'Become a psychic and divine spectral visions to solve the murder of a restless ghost.',
  bggLink: 'https://boardgamegeek.com/boardgame/181304/mysterium',
  imageName: 'mysterium.jpg',
  size: 'medium',
}

const TERRAFORMING_MARS: Boardgame = {
  name: 'Terraforming Mars',
  description: 'Compete with rival CEOs to make Mars habitable and build your corporate empire.',
  bggLink: 'https://boardgamegeek.com/boardgame/167791/terraforming-mars',
  imageName: 'terraforming_mars.jpg',
  size: 'medium',
}

const CAPTAIN_IS_DEAD: Boardgame = {
  name: 'The Captain Is Dead',
  description:
    'Aliens are attacking! Work together using special strengths to start your spaceship.',
  bggLink: 'https://boardgamegeek.com/boardgame/159503/captain-dead',
  imageName: 'captain_is_dead.jpg',
  size: 'medium',
}

const EXPLORERS_OF_IXALAN: Boardgame = {
  name: 'Magic: The Gathering – Explorers of Ixalan',
  description:
    'An out-of-the-box multiplayer Magic experience. Defeat your opponents as you search for the lost city.',
  bggLink: 'https://boardgamegeek.com/boardgame/231309/magic-gathering-explorers-ixalan',
  imageName: 'explorers_of_ixalan.png',
  size: 'medium',
}

const TSURO: Boardgame = {
  name: 'Tsuro of the Seas',
  description: 'Avoid the daikaiju. Sink your opponents in your wake. Become master of the seas.',
  bggLink: 'https://boardgamegeek.com/boardgame/124172/tsuro-seas',
  imageName: 'tsuro.jpg',
  size: 'medium',
}

const HELLAPAGOS: Boardgame = {
  name: 'Hellapagos',
  description: 'Players survive on a desert island and build a raft to escape before disaster.',
  bggLink: 'https://boardgamegeek.com/boardgame/224272/hellapagos',
  imageName: 'hellapagos.jpg',
  size: 'medium',
}

const FORBIDDEN_ISLAND: Boardgame = {
  name: 'Forbidden Island',
  description: 'The island is sinking! Will the brave adventurers save the treasures in time?',
  bggLink: 'https://boardgamegeek.com/boardgame/65244/forbidden-island',
  imageName: 'forbidden_island.jpg',
  size: 'medium',
}

const RED_FLAGS: Boardgame = {
  name: 'Red Flags',
  description:
    'Red Flags is "The Game of Terrible Dates", where you set each other up and decide which date is best.',
  bggLink: 'https://boardgamegeek.com/boardgame/189062/red-flags',
  imageName: 'red_flags.jpg',
  size: 'small',
}

const NEW_PHONE: Boardgame = {
  name: 'New Phone, Who Dis?',
  description:
    'Players rotate drawing a sent (or “inbox”) card while the rest of the group competes to play the funniest reply card.',
  bggLink: 'https://boardgamegeek.com/boardgame/287810/new-phone-who-dis',
  imageName: 'new_phone.jpg',
  size: 'medium',
}

const SECRET_HITLER: Boardgame = {
  name: 'Secret Hitler',
  description:
    'In pre-WW2 Germany, Liberals and Fascists square off in an intrigue-filled parliament.',
  bggLink: 'https://boardgamegeek.com/boardgame/188834/secret-hitler',
  imageName: 'secret_hitler.jpg',
  size: 'medium',
}

const VEGAS_SHOWDOWN: Boardgame = {
  name: 'Vegas Showdown',
  description: 'Bid on tiles to build the best casino in all of Las Vegas.',
  bggLink: 'https://boardgamegeek.com/boardgame/15364/vegas-showdown',
  imageName: 'vegas_showdown.jpg',
  size: 'medium',
}

const SAY_ANYTHING: Boardgame = {
  name: 'Say Anything',
  description: 'One player is asked a question. The others predict, and bet on, their answer.',
  bggLink: 'https://boardgamegeek.com/boardgame/33604/say-anything',
  imageName: 'say_anything.jpg',
  size: 'medium',
}

const ZOMBIE_DICE: Boardgame = {
  name: 'Zombie Dice',
  description: 'Eat as many tasty brains as you dare, without getting shotgunned.',
  bggLink: 'https://boardgamegeek.com/boardgame/62871/zombie-dice',
  imageName: 'zombie_dice.jpg',
  size: 'extra-small',
}

const WE_DIDNT_PLAYTEST: Boardgame = {
  name: `We Didn't Playtest This At All`,
  description:
    'From Zombies to Bombs to the card "I Lose," join the hilarity in this zany card game.',
  bggLink: 'https://boardgamegeek.com/boardgame/31016/we-didnt-playtest-all',
  imageName: 'we_didnt_playtest.jpg',
  size: 'extra-small',
}

const ARENA_OF_PLANESWALKERS: Boardgame = {
  name: 'Magic: The Gathering – Arena of the Planeswalkers',
  description:
    'Summon dangerous creatures and cast powerful spells in this miniatures-based wargame.',
  bggLink: 'https://boardgamegeek.com/boardgame/167698/magic-gathering-arena-planeswalkers',
  imageName: 'arena_of_planeswalkers.jpg',
  size: 'medium',
}

const ULTIMATE_WEREWOLF: Boardgame = {
  name: 'Ultimate Werewolf: Deluxe Edition',
  description: 'Pesky Werewolves have invaded your village. Find them, or be eaten trying.',
  bggLink: 'https://boardgamegeek.com/boardgame/152242/ultimate-werewolf-deluxe-edition',
  imageName: 'ultimate_werewolf.png',
  size: 'small',
}

const ONE_NIGHT_WEREWOLF: Boardgame = {
  name: 'One Night Ultimate Werewolf',
  description: 'An app-driven Werewolf that lasts but a single night. Wolves and villagers beware!',
  bggLink: 'https://boardgamegeek.com/boardgame/147949/one-night-ultimate-werewolf',
  imageName: 'one_night_werewolf.jpg',
  size: 'small',
}

const TOWN_OF_SALEM: Boardgame = {
  name: 'Town of Salem: The Card Game',
  description:
    'Town of Salem is a game of Murder, Mayhem, and Deception. Engage in a battle of wits until one side remains.',
  bggLink: 'https://boardgamegeek.com/boardgame/191432/town-salem-card-game',
  imageName: 'town_of_salem.jpg',
  size: 'small',
}

const ZOMBIES: Boardgame = {
  name: 'Zombies!!!',
  description: 'Be the first survivor to reach the helipad and leave or kill 25 zombies to win!',
  bggLink: 'https://boardgamegeek.com/boardgame/2471/zombies',
  imageName: 'zombies.jpg',
  size: 'small',
}

const NO_THANKS: Boardgame = {
  name: 'No Thanks!',
  description:
    'Take a card each round, or pay to say no; grab the right cards to lower your score.',
  bggLink: 'https://boardgamegeek.com/boardgame/12942/no-thanks',
  imageName: 'no_thanks.jpg',
  size: 'extra-small',
}

const JOKING_HAZARD: Boardgame = {
  name: 'Joking Hazard',
  description: 'Now YOU can create a hilarious dirty three-panel comic with your friends!',
  bggLink: 'https://boardgamegeek.com/boardgame/193621/joking-hazard',
  imageName: 'joking_hazard.jpg',
  size: 'medium',
}

const COUP: Boardgame = {
  name: 'Coup',
  description: 'Bluff (and call bluffs!) to victory in this card game with no third chances.',
  bggLink: 'https://boardgamegeek.com/boardgame/131357/coup',
  imageName: 'coup.jpg',
  size: 'small',
}

const CHIMERA: Boardgame = {
  name: 'Chimera',
  description:
    'Chimera is a three-player card game of two against one similar to climbing- and shedding-based card games like Tichu, The Great Dalmuti, Big Two, Dou Dizhu, and Beat the Landlord.',
  bggLink: 'https://boardgamegeek.com/boardgame/156373/chimera',
  imageName: 'chimera.png',
  size: 'small',
}

const MORELS: Boardgame = {
  name: 'Morels',
  description: 'Walk through the woods, collect mushrooms, and cook them up for tasty points.',
  bggLink: 'https://boardgamegeek.com/boardgame/122298/morels',
  imageName: 'morels.jpg',
  size: 'medium',
}

const SUSHI_GO_PARTY: Boardgame = {
  name: 'Sushi Go Party!',
  description: 'Pass sushi around a bigger table and take the best dishes. Save room for dessert!',
  bggLink: 'https://boardgamegeek.com/boardgame/192291/sushi-go-party',
  imageName: 'sushi_go_party.jpg',
  size: 'medium',
}

const DUNGEON_MAYHEM: Boardgame = {
  name: 'Dungeon Mayhem: Monster Madness',
  description:
    'In Dungeon Mayhem: Monster Madness, you play as one of six epic D&D monsters, each with their own way to charm, crush, disintegrate, and devour their foes.',
  bggLink: 'https://boardgamegeek.com/boardgame/295577/dungeon-mayhem-monster-madness',
  imageName: 'dungeon_mayhem.jpg',
  size: 'medium',
}

const DIAMONDS: Boardgame = {
  name: 'Diamonds',
  description: 'Collect the most diamonds—as in actual jewels. Trick-taking has never been richer!',
  bggLink: 'https://boardgamegeek.com/boardgame/152162/diamonds',
  imageName: 'diamonds.jpg',
  size: 'small',
}

const AVALON: Boardgame = {
  name: 'The Resistance: Avalon',
  description:
    'Who can you trust? A game of social deduction set in King Arthur’s legendary realm.',
  bggLink: 'https://boardgamegeek.com/boardgame/128882/resistance-avalon',
  imageName: 'avalon.jpg',
  size: 'small',
}

const UTTER_NONSENSE: Boardgame = {
  name: 'Utter Nonsense',
  description:
    'Utter Nonsense is a card game where players combine stereotypical accents with outrageous phrases to create sayings that are just plain ridiculous.',
  bggLink: 'https://boardgamegeek.com/boardgame/161928/utter-nonsense',
  imageName: 'utter_nonsense.png',
  size: 'medium',
}

const UNO: Boardgame = {
  name: 'UNO',
  description: 'Get rid of your cards before the others, but beware of forgetting to say "UNO!".',
  bggLink: 'https://boardgamegeek.com/boardgame/2223/uno',
  imageName: 'uno.jpg',
  size: 'extra-small',
}

const EXPLODING_KITTENS: Boardgame = {
  name: 'Exploding Kittens',
  description:
    'Ask for favors, attack friends, see the future- whatever it takes to avoid explosion!',
  bggLink: 'https://boardgamegeek.com/boardgame/172225/exploding-kittens',
  imageName: 'exploding_kittens.png',
  size: 'small',
}

const UNSTABLE_UNICORNS: Boardgame = {
  name: 'Unstable Unicorns',
  description: 'We know unicorns are cute and cuddly...but who knew they could be so mean?!',
  bggLink: 'https://boardgamegeek.com/boardgame/234190/unstable-unicorns',
  imageName: 'unstable_unicorns.jpg',
  size: 'small',
}

const WIZARD: Boardgame = {
  name: 'Wizard',
  description: `Predict how many tricks you'll win, with the help of Wizards and Jesters.`,
  bggLink: 'https://boardgamegeek.com/boardgame/1465/wizard',
  imageName: 'wizard.jpg',
  size: 'extra-small',
}

const GREAT_DALMUTI: Boardgame = {
  name: 'The Great Dalmuti',
  description: 'Get rid of your cards to rise through society from peon to Dalmuti.',
  bggLink: 'https://boardgamegeek.com/boardgame/929/great-dalmuti',
  imageName: 'great_dalmuti.jpg',
  size: 'extra-small',
}

const TICHU: Boardgame = {
  name: 'Tichu',
  description: 'Be the first to empty your hand in this popular partnership climbing card game.',
  bggLink: 'https://boardgamegeek.com/boardgame/215/tichu',
  imageName: 'tichu.jpg',
  size: 'extra-small',
}

const FLUXX: Boardgame = {
  name: 'Fluxx',
  description: 'Play cards and alter the rules in this ever changing card game!',
  bggLink: 'https://boardgamegeek.com/boardgame/258/fluxx',
  imageName: 'fluxx.jpg',
  size: 'extra-small',
}

const MONIKERS: Boardgame = {
  name: 'Monikers',
  description: 'This curated version of a classic game is guaranteed to create laughs!',
  bggLink: 'https://boardgamegeek.com/boardgame/156546/monikers',
  imageName: 'monikers.png',
  size: 'medium',
}

const CODENAMES: Boardgame = {
  name: 'Codenames',
  description: 'Give your team clever one-word clues to help them spot their agents in the field.',
  bggLink: 'https://boardgamegeek.com/boardgame/178900/codenames',
  imageName: 'codenames.jpg',
  size: 'medium',
}

const KINGDOMINO: Boardgame = {
  name: 'Kingdomino',
  description:
    'Build a kingdom with varied terrains on domino-shaped tiles in this fast family game.',
  bggLink: 'https://boardgamegeek.com/boardgame/204583/kingdomino',
  imageName: 'king_domino.png',
  size: 'medium',
}

const FOR_SALE: Boardgame = {
  name: 'For Sale',
  description: `What's your bid? Bid on promising property bundles, then sell properties for checks.`,
  bggLink: 'https://boardgamegeek.com/boardgame/172/sale',
  imageName: 'for_sale.jpg',
  size: 'medium',
}

const COVER_YOUR_KINGDOM: Boardgame = {
  name: 'Cover Your Kingdom',
  description: `A Magically Malicious contest to collect and recruit Creatures for your Kingdom.`,
  bggLink: 'https://boardgamegeek.com/boardgame/281132/cover-your-kingdom',
  imageName: 'cover_your_kingdom.jpg',
  size: 'medium',
}

const BEARS_AND_BEES: Boardgame = {
  name: 'The Bears and the Bees',
  description: 'Help grow the hive to your advantage, but watch out for those pesky bears!',
  bggLink: 'https://boardgamegeek.com/boardgame/257372/bears-and-bees',
  imageName: 'bears_and_bees.jpg',
  size: 'small',
}

const SKULL_KING: Boardgame = {
  name: 'Skull King',
  description: 'Trick-taking on the high seas. Meet your bid to please the Skull King.',
  bggLink: 'https://boardgamegeek.com/boardgame/150145/skull-king',
  imageName: 'skull_king.png',
  size: 'small',
}

const SABACC: Boardgame = {
  name: 'Sabacc',
  description:
    'A hand-management game where players take turns drawing and discarding cards one at a time in hopes of ending the round with the sum of their card values closest to zero.',
  bggLink: 'https://boardgamegeek.com/boardgame/251538/star-wars-han-solo-card-game',
  imageName: 'sabacc.jpg',
  size: 'small',
}

export const BOARDGAMES = [
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
