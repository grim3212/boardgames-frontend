import { reactive } from 'vue'
import { Boardgame } from '../src/util/boardgames'

type Store = {
  isDark: Boolean,
  votes: Boardgame[]
}

const DEFAULT_STORE : Store = {
  isDark: true,
  votes: []
}

export const globalState = reactive(DEFAULT_STORE)
