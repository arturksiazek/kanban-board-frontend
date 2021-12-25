<template>
  <div class="relative">
    <button
      @click="isOpened = !isOpened"
      type="button"
      class="hover:bg-green-800 cursor-pointer relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none sm:text-sm"
    >
      <span class="flex items-center">
        <span class="ml-3 block truncate text-white"> General </span>
      </span>
      <span
        class="ml-3 text-white absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
      >
        <ChangeBoardIcon class="h-5 w-5" />
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
            <SelectedIcon class="h-5 w-5" />
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
            <NewBoardIcon class="h-5 w-5" />
          </span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import NewBoardIcon from "@/components/NewBoardIcon.vue";
import SelectedIcon from "@/components/SelectedIcon.vue";
import ChangeBoardIcon from "@/components/ChangeBoardIcon.vue";

export default defineComponent({
  name: "BoardSelector",
  components: { ChangeBoardIcon, SelectedIcon, NewBoardIcon },
  setup() {
    const isOpened = ref(false);

    return { isOpened };
  },
});
</script>
