<template>
  <section class="text-gray-200">
    <div class="max-w-6xl mx-auto px-5 py-24">
      <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
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
          Final Ranks
        </h1>
        <router-link
          :to="{ name: 'Home' }"
          class="px-1 mt-2 rounded border border-black hover:bg-blue-800 hover:text-white"
          >Home</router-link
        >
      </div>
      <div class="flex flex-wrap -m-4">
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th>Place</th>
              <th>Boardgame</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(vote, idx) of displayGames"
              :key="vote.boardgame._id"
              :class="{ 'bg-gray-800': idx < 10 }"
            >
              <td>{{ idx + 1 }}</td>
              <td>{{ vote.boardgame.name }}</td>
              <td>{{ vote.voteCount }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { BOARDGAMES } from '../util/boardgames'
import { BGVote, BoardgameVotes } from '../util/votes'
import { votes } from '../util/firebase'

export default defineComponent({
  data() {
    return {
      collectedVotes: [] as BGVote[],
    }
  },

  computed: {
    displayGames(): BoardgameVotes[] {
      if (!this.collectedVotes) {
        return []
      }

      console.log(this.collectedVotes)

      // Construct the array and apply votes
      const counts = [] as BoardgameVotes[]
      for (const vote of this.collectedVotes) {
        if (counts.some((e) => e.boardgame._id === vote._id)) {
          // Increment
          const idx = counts.findIndex((bg) => bg.boardgame._id === vote._id)
          if (idx > -1) {
            counts[idx].voteCount += 1
          }
        } else {
          const bg = BOARDGAMES.find((b) => b._id === vote._id)
          // Add boardgame only if it exists
          if (bg) {
            // Add and set votes to one
            counts.push({
              voteCount: 1,
              boardgame: bg,
            })
          }
        }
      }

      // Sort array based on votes and then names
      const sorted = counts.sort((a, b) =>
        a.voteCount === b.voteCount
          ? a.boardgame.name > b.boardgame.name
            ? 1
            : -1
          : a.voteCount > b.voteCount
          ? -1
          : 1
      )

      return sorted
    },
  },

  async mounted() {
    await votes()
      .collection('uservotes')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const data = doc.data()
          if (data.votes) {
            this.collectedVotes.push(...data.votes)
          }
        })
      })
      .catch((err) => console.error(err))
  },
})
</script>
