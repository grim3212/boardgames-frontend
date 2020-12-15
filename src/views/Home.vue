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
        <h2 class="pt-4 text-xl text-purple-400">{{ games.length }} games to choose from.</h2>
        <router-link :to="{ name: 'Votes' }" class="px-1 mt-2 rounded border border-black hover:bg-blue-800 hover:text-white">See votes</router-link>
      </div>
      <div class="flex flex-wrap -m-4">
        <boardgame-card
          v-for="game in displayGames"
          :key="game.name"
          :boardgame="game"
        ></boardgame-card>
      </div>
      <div
        class="fixed top-0 left-0 bg-blue-600 text-center flex flex-wrap w-full mb-20 flex-col items-center"
        v-if="votes.length > 0"
      >
        <span class="py-4 text-lg"> Selected {{ votes.length }} / 10 </span>
        <button
          v-if="votes.length === 10"
          @click="showSubmitModal = true"
          class="px-4 py-2 mb-2 rounded border border-black hover:bg-blue-800 hover:text-white"
        >
          Submit Votes
        </button>
      </div>
    </div>
    <submit-vote-modal
      v-if="showSubmitModal"
      @cancel="showSubmitModal = false"
      @success="onSuccess"
    ></submit-vote-modal>
    <success-banner v-if="showSuccess" @close="showSuccess = false"> </success-banner>
  </section>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue'
import BoardgameCard from '../components/BoardgameCard.vue'
import SubmitVoteModal from '../components/SubmitVoteModal.vue'
import SuccessBanner from '../components/SuccessBanner.vue'
import { Boardgame } from '../util/boardgames'
import { globalState } from '../store'
import { request } from '../util/axios'

export default defineComponent({
  components: {
    BoardgameCard,
    SubmitVoteModal,
    SuccessBanner,
  },

  data() {
    return {
      games: [] as Boardgame[],
      showSubmitModal: false,
      showSuccess: false,
    }
  },

  setup() {
    return {
      votes: toRef(globalState, 'votes'),
    }
  },

  computed: {
    displayGames(): Boardgame[] {
      return this.games.sort((a, b) => (a.name > b.name ? 1 : -1))
    },
  },

  methods: {
    onSuccess() {
      this.showSubmitModal = false
      this.showSuccess = true
      this.votes = []
    },
  },

  async mounted() {
    await request('/games', 'get')
      .then(({ data }) => {
        this.games = data as Boardgame[]
      })
      .catch((err) => console.error(err))
  },
})
</script>
