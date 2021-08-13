<template>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"
        >&#8203;</span
      >
      <div
        class="
          inline-block
          align-bottom
          bg-white
          rounded-lg
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
        "
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div
              class="
                mx-auto
                flex-shrink-0 flex
                items-center
                justify-center
                h-12
                w-12
                rounded-full
                bg-red-100
                sm:mx-0 sm:h-10 sm:w-10
              "
            >
              <svg
                class="h-6 w-6 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                Submit Votes
              </h3>
              <div class="mt-2">
                <ul class="text-sm text-gray-700">
                  <li v-for="vote in votes" :key="vote.name">{{ vote.name }}</li>
                </ul>
                <br />
                <div class="flex flex-col mb-4">
                  <label for="name" class="mb-1 text-xs sm:text-sm tracking-wide text-blue-600">
                    Name
                  </label>

                  <div class="relative">
                    <div class="absolute flex border border-transparent left-0 top-0 h-full w-10">
                      <div
                        class="
                          flex
                          items-center
                          justify-center
                          rounded-tl rounded-bl
                          z-10
                          bg-blue-100
                          text-blue-600 text-lg
                          h-full
                          w-full
                        "
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="h-5 w-5"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                    </div>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name"
                      v-model="name"
                      class="
                        text-sm
                        sm:text-base
                        relative
                        w-full
                        text-black
                        border
                        rounded
                        placeholder-blue-400
                        focus:border-indigo-400 focus:outline-none
                        py-2
                        pr-2
                        pl-12
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            :disabled="!name"
            class="
              w-full
              inline-flex
              justify-center
              rounded-md
              border border-transparent
              shadow-sm
              px-4
              py-2
              bg-blue-600
              text-base
              font-medium
              text-white
              hover:bg-blue-700
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              sm:ml-3 sm:w-auto sm:text-sm
              disabled:bg-gray-600
            "
            @click="submitVotes"
          >
            Submit
          </button>
          <button
            type="button"
            class="
              mt-3
              w-full
              inline-flex
              justify-center
              rounded-md
              border border-gray-300
              shadow-sm
              px-4
              py-2
              bg-white
              text-base
              font-medium
              text-gray-700
              hover:bg-gray-50
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
              sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
            "
            @click="$emit('cancel')"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue'
import { globalState } from '../store'
import { votes, now } from '../util/firebase'

export default defineComponent({
  setup() {
    return {
      votes: toRef(globalState, 'votes'),
    }
  },

  data() {
    return {
      name: '',
    }
  },

  methods: {
    async submitVotes() {
      if (!this.name) return

      const dataToSend = {
        name: this.name,
        timestamp: now(),
        votes: this.votes.map((bg) => ({
          _id: bg._id,
          name: bg.name,
        })),
      }

      console.log(dataToSend)

      await votes()
        .collection('uservotes')
        .add(dataToSend)
        .then(() => {
          this.name = ''
          this.$emit('success')
        })
        .catch((err) => console.error(err))
    },
  },
})
</script>
