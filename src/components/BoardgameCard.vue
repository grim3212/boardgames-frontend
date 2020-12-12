<template>
  <div class="xl:w-1/3 md:w-1/2 p-4">
    <div
      class="relative flex flex-col h-64 h-full max-h-full group border border-gray-300 p-6 rounded-lg hover:bg-gray-100 cursor-pointer"
      :class="{ 'bg-blue-300 hover:bg-blue-200 text-black border border-blue-600': isSelected }"
      @click="clickCard"
    >
      <div class="flex flex-row justify-between">
        <h2 class="text-lg font-medium title-font mb-2 group-hover:text-blue-300">
          {{ boardgame.name }}
        </h2>
        <svg
          class="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          @click.stop="navigateToBGGLink"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          ></path>
        </svg>
      </div>
      <br />
      <img
        class="object-contain h-48 w-full rounded-lg"
        :src="'boardgames/' + boardgame.imageName"
      />
      <br />
      <p class="leading-relaxed text-base group-hover:text-blue-300">
        {{ boardgame.description }}
      </p>
      <div
        class="absolute size-chip m-1 font-medium py-1 px-2 bg-white rounded-full text-blue-700 bg-blue-100 border border-blue-300"
      >
        <div class="text-xs font-normal leading-none">{{ size }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue'
import { Boardgame } from '../util/boardgames'
import { globalState } from '../store'

export default defineComponent({
  props: {
    boardgame: {
      type: Object as () => Boardgame,
      required: true,
    },
  },

  setup() {
    return {
      votes: toRef(globalState, 'votes'),
    }
  },

  methods: {
    clickCard() {
      if (this.isSelected || this.maxVotes) {
        this.votes.splice(
          this.votes.findIndex((bg) => bg.name === this.boardgame.name),
          1
        )
      } else {
        this.votes.push(this.boardgame)
      }
    },

    navigateToBGGLink() {
      window.location.href = this.boardgame.bggLink
    },
  },

  computed: {
    isSelected(): boolean {
      return this.votes.some((bg) => bg.name === this.boardgame.name)
    },

    maxVotes(): boolean {
      return this.votes.length >= 10
    },

    size(): String {
      switch (this.boardgame.size) {
        case 'extra-small':
          return 'XS'
        case 'small':
          return 'S'
        case 'medium':
          return 'M'
        case 'large':
          return 'L'
        case 'extra-large':
          return 'XL'
      }
      return ''
    },
  },
})
</script>


<style lang="postcss">
.size-chip {
  bottom: 2px;
  right: 2px;
}
</style>