import { Boardgame } from './boardgames'

export type Vote = {
  name: string
  timestamp: string
  votes: BGVote[]
}

export type BGVote = {
  _id: string
  name: string
}

export type BoardgameVotes = {
  voteCount: number
  boardgame: Boardgame
}