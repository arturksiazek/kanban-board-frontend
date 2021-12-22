<template>
  <div class="h-screen bg-green-900">
    <div class="grid grid-cols-12">
      <div class="col-span-1 h-screen p-4">
        <div
          class="w-full border border-white-300 rounded-md px-3 py-2 text-white mb-4 text-sm"
        >
          Select board
        </div>

        <div class="text-white">
          <router-link to="/">Home</router-link> |
          <router-link to="/board">Board</router-link>
        </div>
      </div>
      <div class="col-span-11 bg-gray-200 p-10 rounded-tl-3xl">
        <router-view />
      </div>
    </div>
  </div>
</template>
