<template>
  <div class="bg-gray-200 h-screen">
    <div class="grid grid-cols-12">
      <div class="col-span-1 h-screen bg-white p-4">
        <div
          class="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-500 mb-4 text-sm"
        >
          Select board
        </div>

        <div>
          <router-link to="/">Home</router-link> |
          <router-link to="/board">Board</router-link>
        </div>
      </div>
      <div class="col-span-10 p-10">
        <router-view />
      </div>
    </div>
  </div>
</template>
