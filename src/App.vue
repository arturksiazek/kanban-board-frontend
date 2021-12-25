<template>
  <div class="h-screen bg-green-900">
    <div class="flex">
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
