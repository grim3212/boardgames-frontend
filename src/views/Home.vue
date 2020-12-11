<template>
  <section class="text-gray-200">
    <div class="max-w-6xl mx-auto px-5 py-24">
      <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1
          class="title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl"
        >
          BOARD GAME VOTER
        </h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-base">
          Make your choice for your top 10 favorite board games. Based on votes the top will come
          back to the Yak.
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <boardgame-card v-for="game in games" :key="game.name" :boardgame="game"></boardgame-card>
      </div>
      <div
        class="fixed top-0 left-0 bg-blue-600 text-center flex flex-wrap w-full mb-20 flex-col items-center"
        v-if="votes.length > 0"
      >
        <span class="py-4 text-lg"> Selected {{ votes.length }} / 10 </span>
        <button
          v-if="votes.length === 10"
          @click="submitVotes"
          class="px-4 py-2 mb-2 rounded border border-black hover:bg-blue-800 hover:text-white"
        >
          Submit Votes
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue'
import BoardgameCard from '../components/BoardgameCard.vue'
import { Boardgame, BOARDGAMES } from '../util/boardgames'
import { globalState } from '../store'

export default defineComponent({
  components: {
    BoardgameCard,
  },

  setup() {
    return {
      votes: toRef(globalState, 'votes'),
    }
  },

  computed: {
    games(): Boardgame[] {
      return BOARDGAMES
    },
  },

  methods: {
    submitVotes() {
      console.log('submit votes yo')
    },
  },
})
</script>
