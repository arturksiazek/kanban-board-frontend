<template>
  <div class="relative">
    <button
      @click="isOpened = !isOpened"
      type="button"
      class="relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none sm:text-sm"
    >
      <span class="flex items-center">
        <span class="ml-3 block truncate text-white"> General </span>
      </span>
      <span
        class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
      >
        <svg
          class="h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </button>

    <transition
      enter-active-class="transition ease-in duration-100"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <ul
        v-if="isOpened"
        class="absolute w-48 z-10 mt-1 bg-white shadow-lg max-h-56 rounded-md p-2 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
      >
        <li
          class="text-gray-900 cursor-default select-none relative py-2 pl-1 hover:bg-gray-100 rounded-md cursor-pointer"
        >
          <div class="flex items-center">
            <span class="font-normal ml-3 block truncate"> General </span>
          </div>

          <span
            class="text-green-900 absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </li>
        <li
          class="text-gray-900 cursor-default select-none relative py-2 pl-1 mt-1 hover:bg-gray-100 rounded-md cursor-pointer"
        >
          <div class="flex items-center">
            <span class="font-normal ml-3 block truncate">
              Personal board
            </span>
          </div>
        </li>
        <li
          class="text-gray-900 cursor-default select-none relative py-2 pl-1 mt-1 hover:bg-gray-100 rounded-md cursor-pointer"
        >
          <div class="flex items-center">
            <span class="font-normal ml-3 block truncate"> Another board </span>
          </div>
        </li>
        <li
          class="bg-green-900 hover:bg-green-700 mt-1 rounded-md cursor-pointer text-white cursor-default select-none relative py-2 pl-1"
        >
          <div class="flex items-center">
            <span class="font-normal ml-3 block truncate"> Create board </span>
          </div>

          <span
            class="text-white absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "BoardSelector",
  components: {},
  setup() {
    const isOpened = ref(false);

    return { isOpened };
  },
});
</script>
