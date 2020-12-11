<template>
  <div class="xl:w-1/3 md:w-1/2 p-4">
    <div
      class="h-64 h-full max-h-full group border border-gray-300 p-6 rounded-lg hover:bg-gray-100 cursor-pointer"
      :class="{ 'bg-blue-300 hover:bg-blue-200 text-black border border-blue-600': isSelected }"
      @click="clickCard"
    >
      <h2 class="text-lg font-medium title-font mb-2 group-hover:text-gray-900">
        {{ boardgame.name }}
      </h2>
      <br />
      <img
        class="object-contain h-48 w-full rounded-lg"
        :src="'boardgames/' + boardgame.imageName"
      />
      <br />
      <p class="leading-relaxed text-base group-hover:text-gray-700">
        {{ boardgame.description }}
      </p>
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

      console.log(this.votes)
    },
  },

  computed: {
    isSelected(): boolean {
      return this.votes.some((bg) => bg.name === this.boardgame.name)
    },

    maxVotes(): boolean {
      return this.votes.length >= 10
    },
  },
})
</script>
