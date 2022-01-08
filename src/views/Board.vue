<template>
  <div class="flex min-w-max">
    <div class="w-80 mr-8" v-for="list in lists" :key="list.title">
      <h2 class="text-sm text-gray-500">{{ list.name }}</h2>
      <div class="mt-4">
        <div
          v-for="task in list.tasks"
          :key="task.name"
          @click="$router.push({ name: 'Task', params: { slug: task.slug } })"
          class="bg-white text-xs rounded-md border-l-4 overflow-hidden mt-3 shadow-md"
          :class="`border-${task.project.color || 'gray'}-500`"
        >
          <div class="py-3 px-4 text-gray-600">
            {{ task.name }}
          </div>
          <div class="bg-gray-100 py-2 px-4 flex justify-between tasks-center">
            <span class="text-gray-400">#{{ task.index }}</span>
            <span
              class="rounded-full bg-blue-300 h-6 w-6 flex items-center justify-center text-blue-600"
            >
              AK
            </span>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Board",
  components: {},
  setup() {
    const store = useStore();
    const route = useRoute();

    try {
      (async () => {
        await store.dispatch("fetchBoard", route.params.board);
        const boardSlug = computed(() => store.state.board?.id);
        await store.dispatch("fetchProjects", boardSlug.value);
      })();
    } catch (error) {
      throw new Error(error);
    }

    const lists = computed(() => store.getters["getColumns"]);

    return {
      lists,
    };
  },
});
</script>
