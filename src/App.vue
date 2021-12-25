<template>
  <div class="h-screen bg-green-900">
    <div class="flex">
      <div class="h-screen flex flex-col w-44 justify-between">
        <div class="p-4">
          <BoardSelector />
          <ProjectSelector class="mt-10" />
        </div>
        <div class="bg-green-800 p-4 text-white text-sm flex items-center">
          <div class="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              class="flex-shrink-0 h-6 w-6 rounded-full"
            />
            <span class="font-normal ml-3 block truncate"> Artur Książek </span>
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
// import LogoutIcon from "@/components/logoutIcon";
import BoardSelector from "@/components/BoardSelector";
import ProjectSelector from "@/components/ProjectSelector";
export default {
  components: { ProjectSelector, BoardSelector },
};
</script>
