<template>
  <div class="h-screen bg-green-900">
    <div class="flex">
      <div class="h-screen flex flex-col w-44 justify-between">
        <div class="p-4">
          <div
            class="w-full border border-white-300 rounded-md px-3 py-2 text-white mb-4 text-sm"
          >
            Select board
          </div>

          <div class="flex flex-col">
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
        </div>
        <div class="bg-green-800 p-4 text-white text-sm flex items-center">
          Log out <logout-icon class="ml-3 h-4 w-4" />
        </div>
      </div>
      <div class="bg-gray-200 p-10 rounded-tl-3xl w-full overflow-x-scroll">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import LogoutIcon from "@/components/logoutIcon";
export default {
  components: { LogoutIcon },
};
</script>
