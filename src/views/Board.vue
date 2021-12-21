<template>
  <div class="grid gap-8 grid-cols-5">
    <div class="" v-for="column in columns" :key="column.title">
      <h2 class="text-sm text-gray-500">{{ column.title }}</h2>
      <div class="mt-4">
        <div
          v-for="item in column.items"
          :key="item.title"
          class="bg-white text-xs rounded-md border-l-4 border-blue-500 overflow-hidden mt-3 shadow-md"
        >
          <div class="py-3 px-4 text-gray-600">
            {{ item.title }}
          </div>
          <div class="bg-gray-100 py-2 px-4 flex justify-between items-center">
            <span class="text-gray-400">#1337</span>
            <span
              class="rounded-full bg-blue-300 h-6 w-6 flex items-center justify-center text-blue-600"
            >
              AK
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Board",
  components: {},
  setup() {
    const columns = [
      {
        title: "Ready for development",
        items: [
          {
            title: "The list of repositories",
          },
          {
            title: "The function to update the list of repositories",
          },
          {
            title:
              "Returning both the list and the function so they are accessible by other component options",
          },
          {
            title: "The list of repositories",
          },
          {
            title: "The function to update the list of repositories",
          },
          {
            title:
              "Returning both the list and the function so they are accessible by other component options",
          },
        ],
      },
      {
        title: "In development",
        items: [],
      },
      {
        title: "Ready for review",
        items: [],
      },
      {
        title: "Ready for deploy",
        items: [],
      },
      {
        title: "Completed",
        items: [],
      },
    ];

    return {
      columns,
    };
  },
});
</script>
