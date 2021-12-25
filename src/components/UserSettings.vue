<template>
  <div class="relative">
    <div
      class="text-white text-sm flex items-center"
      @click="isOpened = !isOpened"
    >
      <div class="flex items-center">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          class="flex-shrink-0 h-6 w-6 rounded-full"
        />
        <span class="font-normal ml-3 block truncate"> Artur Książek </span>
      </div>
    </div>

    <transition
      enter-active-class="transition ease-in duration-100"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <ul
        v-if="isOpened"
        class="absolute bottom-0 mb-16 w-48 z-10 mt-1 bg-white shadow-lg max-h-56 rounded-md p-2 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
      >
        <li
          class="text-gray-900 cursor-default select-none relative py-2 pl-1 mt-1 hover:bg-gray-100 rounded-md cursor-pointer"
        >
          <div class="flex items-center">
            <span class="font-normal ml-3 block truncate"> Edit profile </span>
          </div>

          <span
            class="text-green-900 absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <ProfileIcon class="h-5 w-5" />
          </span>
        </li>
        <li
          class="text-gray-900 cursor-default select-none relative py-2 pl-1 mt-1 hover:bg-gray-100 rounded-md cursor-pointer"
        >
          <div class="flex items-center">
            <span class="font-normal ml-3 block truncate"> Settings </span>
          </div>

          <span
            class="text-green-900 absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <SettingsIcon class="h-5 w-5" />
          </span>
        </li>
        <li
          class="bg-green-900 hover:bg-green-700 mt-1 rounded-md cursor-pointer text-white cursor-default select-none relative py-2 pl-1"
        >
          <div class="flex items-center">
            <span class="font-normal ml-3 block truncate"> Log out </span>
          </div>

          <span
            class="text-white absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <LogoutIcon class="h-5 w-5" />
          </span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import LogoutIcon from "@/components/LogoutIcon.vue";
import SettingsIcon from "@/components/SettingsIcon.vue";
import ProfileIcon from "@/components/ProfileIcon.vue";

export default defineComponent({
  name: "UserSettings",
  components: { ProfileIcon, SettingsIcon, LogoutIcon },
  setup() {
    const isOpened = ref(false);

    return { isOpened };
  },
});
</script>
