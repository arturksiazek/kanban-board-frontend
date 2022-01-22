<template>
  <div
    class="fixed z-10 inset-0"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <transition
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        class="flex items-center justify-center min-h-screen px-4 text-center"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <transition
          enter-active-class="ease-out duration-300"
          enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to-class="opacity-100 translate-y-0 sm:scale-100"
          leave-active-class="ease-in duration-200"
          leave-class="opacity-100 translate-y-0 sm:scale-100"
          leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="max-w-5xl inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all max-h-screen"
          >
            <div class="flex">
              <div
                class="bg-white p-8 w-full overflow-y-scroll"
                :style="windowHeightStyle"
              >
                <div class="sm:flex sm:items-start">
                  <div>
                    <h3
                      class="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      {{ task?.name }}
                    </h3>
                    <div class="mt-2 text-gray-500 leading-relaxed text-sm">
                      {{ task?.description }}
                    </div>
                    <div class="border-t py-6 mt-6">
                      <div class="antialiased">
                        <h3 class="mb-4 text-lg font-semibold text-gray-900">
                          Comments
                        </h3>

                        <div class="space-y-4">
                          <div class="flex">
                            <div class="flex-shrink-0 mr-3">
                              <img
                                class="mt-3 rounded-full w-6 h-6"
                                src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                                alt=""
                              />
                            </div>
                            <div
                              class="flex-1 text-xs px-3 py-2 leading-relaxed"
                            >
                              <strong>Sarah</strong>
                              <span class="ml-2 text-gray-400">3:34 PM</span>
                              <p>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua.
                              </p>
                            </div>
                          </div>

                          <div class="flex">
                            <div class="flex-shrink-0 mr-3">
                              <img
                                class="mt-3 rounded-full w-6 h-6"
                                src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                                alt=""
                              />
                            </div>
                            <div
                              class="flex-1 text-xs px-3 py-2 leading-relaxed"
                            >
                              <strong>Sarah</strong>
                              <span class="ml-2 text-gray-400">3:34 PM</span>
                              <p>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua.
                              </p>

                              <p class="mt-2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. At error exercitationem
                                molestiae natus, nobis temporibus.
                              </p>

                              <p class="mt-2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Aliquam consectetur cum
                                deleniti dolores ducimus eveniet ex harum, minus
                                nulla quaerat, quidem quod repellat sapiente
                                similique sunt ut, voluptas. Doloremque facere
                                maiores necessitatibus quidem ut! Ipsam?
                              </p>
                            </div>
                          </div>
                          <div class="flex">
                            <div class="flex-shrink-0 mr-3">
                              <img
                                class="mt-3 rounded-full w-6 h-6"
                                src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                                alt=""
                              />
                            </div>
                            <div
                              class="flex-1 text-xs px-3 py-2 leading-relaxed"
                            >
                              <strong>Sarah</strong>
                              <span class="ml-2 text-gray-400">3:34 PM</span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Accusantium amet aperiam
                                dignissimos eum facere, illum?
                              </p>
                            </div>
                          </div>
                          <div class="flex">
                            <div class="flex-shrink-0 mr-3">
                              <img
                                class="mt-3 rounded-full w-6 h-6"
                                src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                                alt=""
                              />
                            </div>
                            <div
                              class="flex-1 text-xs px-3 py-2 leading-relaxed"
                            >
                              <strong>Sarah</strong>
                              <span class="ml-2 text-gray-400">3:34 PM</span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Adipisci amet culpa eaque et
                                fugiat iure magni minus nemo odio odit, officia
                                optio provident quae quis reiciendis repellat
                                rerum. Blanditiis ipsam itaque neque
                                perspiciatis quam quos rem. Adipisci
                                consequuntur cupiditate esse explicabo id ipsum
                                labore neque obcaecati, optio quae repellendus
                                repudiandae velit veritatis vero voluptate?
                                Accusantium aliquam autem cum debitis dolorem
                                esse expedita fugit molestias porro quae, quis
                                ratione sint, sit soluta veniam vitae
                                voluptatem! A aspernatur corporis esse in
                                inventore ipsam iusto obcaecati, quia recusandae
                                soluta, ullam ut. Amet aut blanditiis culpa et
                                eum libero molestiae obcaecati quibusdam tempora
                                totam.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 w-60 py-6 px-4 flex flex-col">
                <div class="mt-4 flex flex-col" v-if="nextColumn?.name">
                  <span class="text-xs text-gray-400">Move to:</span>
                  <button
                    @click="moveToNextColumn()"
                    type="button"
                    class="mt-2 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    {{ nextColumn?.name }}
                  </button>
                </div>

                <div class="mt-4 flex flex-col">
                  <span class="text-xs text-gray-400">State:</span>
                  <span class="text-gray-600 text-sm">
                    {{ task?.list?.name }}
                  </span>
                </div>

                <div class="mt-4 flex flex-col">
                  <span class="text-xs text-gray-400">Project:</span>
                  <span class="text-gray-600 text-sm">Kanban Board</span>
                </div>

                <div class="mt-4 flex flex-col">
                  <span class="text-xs text-gray-400">Creator:</span>
                  <span class="text-gray-600 text-sm">Artur Książek</span>
                </div>

                <div class="mt-4 flex flex-col">
                  <span class="text-xs text-gray-400">Owner:</span>
                  <span class="text-gray-600 text-sm">Artur Książek</span>
                </div>

                <div class="flex flex-1 items-end">
                  <button
                    type="button"
                    class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                    @click="
                      $router.push({
                        name: 'Board',
                        params: { board: boardSlug },
                      })
                    "
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Task",
  components: {},

  setup() {
    const store = useStore();
    const route = useRoute();

    const task = computed(() => store.state.task);
    const nextColumn = computed(() => store.getters["getNextColumn"]);
    const boardSlug = computed(() => store.state.board?.slug);
    const windowHeightStyle = computed(() => {
      return { maxHeight: window.innerHeight - 100 + "px" };
    });

    store.dispatch("fetchTask", route.params.slug);

    function moveToNextColumn() {
      store.dispatch("updateTask", {
        ...task.value,
        list: { ...nextColumn.value },
        listId: nextColumn.value.id,
      });

      store.dispatch("changeTaskList", {
        task: task.value,
        newListId: nextColumn.value.id,
      });
    }

    return {
      windowHeightStyle,
      task,
      boardSlug,
      nextColumn,
      moveToNextColumn,
    };
  },
});
</script>
