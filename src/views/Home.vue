<template>
  <section class="text-gray-200">
    <div class="max-w-6xl mx-auto px-5 py-24">
      <div class="flex flex-wrap w-full mb-10 flex-col items-center text-center">
        <h1
          class="
            title-font
            mb-2
            text-4xl
            font-extrabold
            leading-10
            tracking-tight
            text-left
            sm:text-5xl sm:leading-none
            md:text-6xl
          "
        >
          BOARD GAME VOTER
        </h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-base">
          Make your choice for your top 10 favorite board games.
        </p>
        <h2 class="pt-4 text-xl text-purple-400">
          {{ totalAmountText }}
        </h2>
        <router-link
          :to="{ name: 'Votes' }"
          class="px-1 mt-2 rounded border border-black hover:bg-blue-800 hover:text-white"
          >See votes</router-link
        >
        <div class="p-2">
          <div class="bg-white flex items-center rounded-full shadow-xl">
            <input
              class="rounded-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none"
              id="search"
              type="text"
              placeholder="Search"
              v-model="search"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -m-4">
        <boardgame-card
          v-for="game in displayGames"
          :key="game.name"
          :boardgame="game"
        ></boardgame-card>
      </div>
      <div
        class="
          fixed
          top-0
          left-0
          bg-blue-600
          text-center
          flex flex-wrap
          w-full
          mb-20
          flex-col
          items-center
        "
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
import { Boardgame, BoardGameSize, BOARDGAMES } from '../util/boardgames'
import { globalState } from '../store'
import { initCurrentVoting } from '../util/firebase'

export default defineComponent({
  components: {
    BoardgameCard,
    SubmitVoteModal,
    SuccessBanner,
  },

  data() {
    return {
      showSubmitModal: false,
      showSuccess: false,
      search: '',
    }
  },

  setup() {
    return {
      votes: toRef(globalState, 'votes'),
    }
  },

  computed: {
    totalAmountText(): String {
      if (this.search) {
        return `${this.displayGames.length}/${BOARDGAMES.length} games to choose from.`
      } else {
        return `${this.displayGames.length} games to choose from.`
      }
    },
    displayGames(): Boardgame[] {
      return BOARDGAMES.filter((bg) => {
        const search = this.search.toLowerCase()
        return search
          ? bg.name.toLowerCase().includes(search) || bg.description.toLowerCase().includes(search)
          : true
      })
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
    await initCurrentVoting()
  },
})
</script>
