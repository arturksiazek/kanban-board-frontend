<template>
  <div class="flex flex-col">
    <span class="text-xs text-gray-200">Projects</span>
    <label class="inline-flex items-center mt-3">
      <input
        type="checkbox"
        class="form-checkbox rounded-sm h-4 w-4 text-gray-600"
        checked
      /><span class="ml-2 text-white text-sm">Jarzębinowe</span>
    </label>

    <label class="inline-flex items-center mt-3">
      <input
        type="checkbox"
        class="form-checkbox rounded-sm h-4 w-4 text-red-600"
        checked
      /><span class="ml-2 text-white text-sm">Stacja Wola</span>
    </label>

    <label class="inline-flex items-center mt-3">
      <input
        type="checkbox"
        class="form-checkbox rounded-sm h-4 w-4 text-orange-600"
        checked
      /><span class="ml-2 text-white text-sm">Hitpol</span>
    </label>

    <label class="inline-flex items-center mt-3">
      <input
        type="checkbox"
        class="form-checkbox rounded-sm h-4 w-4 text-yellow-600"
        checked
      /><span class="ml-2 text-white text-sm">Enter</span>
    </label>

    <label class="inline-flex items-center mt-3">
      <input
        type="checkbox"
        class="form-checkbox rounded-sm h-4 w-4 text-green-600"
        checked
      /><span class="ml-2 text-white text-sm">Dosłońce</span>
    </label>

    <label class="inline-flex items-center mt-3">
      <input
        type="checkbox"
        class="form-checkbox rounded-sm h-4 w-4 text-pink-600"
        checked
      /><span class="ml-2 text-white text-sm">Interbud</span>
    </label>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "ProjectSelector",
  components: {},
  setup() {
    const isOpened = ref(false);

    return { isOpened };
  },
});
</script>
