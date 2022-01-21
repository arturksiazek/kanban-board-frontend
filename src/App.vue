<template>
  <div class="h-screen bg-green-900">
    <div v-if="true" class="flex">
      <div class="h-screen flex flex-col w-44 justify-between">
        <div class="p-4">
          <BoardSelector />
          <ProjectSelector class="mt-10" />
        </div>
        <UserSettings class="bg-green-800 cursor-pointer p-4" />
      </div>
      <div class="bg-gray-200 p-10 rounded-tl-3xl w-full overflow-x-scroll">
        <router-view />
      </div>
    </div>
    <div v-else class="flex">
      <div class="h-screen flex flex-col w-full max-w-xl justify-center">
        <div class="flex flex-col max-w-sm w-full mx-auto mx-8 pb-32">
          <span class="text-4xl text-white mt-6">Log in</span>
          <p class="text-xs text-white my-3 leading-5">
            If you want to log into the system please enter your valid e-mail
            address, password and press the login button to continue.
          </p>
          <input
            type="text"
            class="bg-transparent my-3 text-white border-white rounded outline-none text-sm focus:ring-0 placeholder-white focus:border-white"
            placeholder="Email"
          />
          <input
            type="text"
            class="bg-transparent my-3 text-white border-white rounded outline-none text-sm focus:ring-0 placeholder-white focus:border-white"
            placeholder="Password"
          />
          <div class="flex justify-end">
            <button
              type="submit"
              class="inline-block rounded bg-white my-3 px-5 py-2.5 text-sm hover:opacity-90"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
      <div class="bg-gray-200 p-10 rounded-tl-3xl w-full overflow-x-scroll">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import UserSettings from "@/components/UserSettings";
import BoardSelector from "@/components/BoardSelector";
import ProjectSelector from "@/components/ProjectSelector";
export default {
  components: { ProjectSelector, BoardSelector, UserSettings },
};
</script>
