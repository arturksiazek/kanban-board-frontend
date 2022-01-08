<template>
  <div class="flex flex-col">
    <span class="text-xs text-gray-200">Projects</span>

    <label
      v-for="project in projects"
      :key="project.name"
      class="inline-flex items-center mt-3"
    >
      <input
        type="checkbox"
        class="form-checkbox rounded-sm h-4 w-4"
        checked
        :class="`text-${project.color || 'gray'}-600`"
      />
      <span class="ml-2 text-white text-sm">
        {{ project.name }}
      </span>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Board",
  components: {},
  setup() {
    const store = useStore();
    const projects = computed(() => store.state.projects);

    return {
      projects,
    };
  },
});
</script>
