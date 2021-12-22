<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      x-transition:enter="ease-out duration-300"
      x-transition:enter-start="opacity-0"
      x-transition:enter-end="opacity-100"
      x-transition:leave="ease-in duration-200"
      x-transition:leave-start="opacity-100"
      x-transition:leave-end="opacity-0"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-7xl sm:w-full"
        x-transition:enter="ease-out duration-300"
        x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100"
        x-transition:leave="ease-in duration-200"
        x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
        x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div class="grid grid-cols-12">
          <div class="bg-white p-8 col-span-10">
            <div class="sm:flex sm:items-start">
              <div>
                <h3
                  class="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Deactivate account
                </h3>
                <div class="mt-2 text-gray-500 leading-relaxed text-sm">
                  <p class="mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    commodi, cumque est ipsa laborum, neque perspiciatis placeat
                    possimus quibusdam quis sed ut. Aperiam ducimus inventore
                    possimus sed suscipit unde! Delectus expedita labore laborum
                    libero minus qui reiciendis? Modi voluptas voluptate
                    voluptatem. Amet dicta eius eos provident quas? At, debitis
                    excepturi facilis iusto natus quaerat quidem sit velit
                    veritatis voluptatem!
                  </p>
                  <p class="mt-6">
                    Asperiores dolor, doloribus dolorum expedita fugit harum
                    impedit minus nobis obcaecati odio. Amet architecto autem,
                    dolores error et explicabo facilis impedit incidunt iure
                    maxime minima nam nesciunt placeat qui recusandae reiciendis
                    repellat sint sit, unde voluptatibus? Accusantium ad aliquid
                    aperiam asperiores corporis, cupiditate dolor ducimus, ea
                    earum eius eos est exercitationem expedita fugit hic id
                    illum impedit ipsa ipsum laboriosam natus necessitatibus
                    nihil officiis pariatur perspiciatis possimus praesentium
                    provident quasi quia ratione soluta tempore unde voluptate.
                  </p>
                  <p class="mt-6">
                    A blanditiis deserunt, enim excepturi illo incidunt ipsam
                    nostrum quaerat, quas qui quo quos reprehenderit sapiente
                    sit ullam voluptates voluptatibus? Ad, aliquam aliquid
                    dignissimos distinctio eius est fugiat, harum natus non
                    nulla placeat porro quam quos reiciendis rerum sit
                    temporibus tenetur unde ut voluptatum.
                  </p>
                  <p class="mt-6">
                    Ab aliquam consequatur debitis eos eum explicabo impedit
                    ipsa, ipsum itaque, laboriosam mollitia natus neque officiis
                    optio provident quae ratione sapiente, sit soluta sunt ullam
                    veniam vero voluptate voluptatem voluptatibus. Consequuntur
                    incidunt inventore veritatis voluptatum. A adipisci beatae
                    dolore facere molestias non, nostrum, quaerat quam quos
                    reiciendis repellendus temporibus tenetur vel.
                  </p>
                  <p class="mt-6">
                    Dolorem doloribus, enim illo, minus molestias necessitatibus
                    nesciunt placeat quos, repellat sint sit tempora temporibus
                    voluptate. Autem cum cupiditate debitis est laborum porro
                    praesentium quisquam similique tempora temporibus! Accusamus
                    accusantium adipisci aliquid at cum debitis dicta dolores
                    doloribus ea eius enim eveniet explicabo in nihil numquam
                    reiciendis repellat repellendus, reprehenderit tempora
                    temporibus ullam vel veniam. Amet, atque, consequuntur dicta
                    est explicabo fugit iste libero non quas, quos reprehenderit
                    repudiandae vitae?
                  </p>
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
                            class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                            src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                            alt=""
                          />
                        </div>
                        <div
                          class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed"
                        >
                          <strong>Sarah</strong>
                          <span class="ml-2 text-xs text-gray-400"
                            >3:34 PM</span
                          >
                          <p class="text-sm">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua.
                          </p>
                          <div class="mt-4 flex items-center">
                            <div class="flex -space-x-2 mr-2">
                              <img
                                class="rounded-full w-6 h-6 border border-white"
                                src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                                alt=""
                              />
                              <img
                                class="rounded-full w-6 h-6 border border-white"
                                src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                                alt=""
                              />
                            </div>
                            <div class="text-sm text-gray-500 font-semibold">
                              5 Replies
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="flex">
                        <div class="flex-shrink-0 mr-3">
                          <img
                            class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                            src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                            alt=""
                          />
                        </div>
                        <div
                          class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed"
                        >
                          <strong>Sarah</strong>
                          <span class="ml-2 text-xs text-gray-400"
                            >3:34 PM</span
                          >
                          <p class="text-sm">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua.
                          </p>

                          <h4
                            class="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs"
                          >
                            Replies
                          </h4>

                          <div class="space-y-4">
                            <div class="flex">
                              <div class="flex-shrink-0 mr-3">
                                <img
                                  class="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                                  src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                                  alt=""
                                />
                              </div>
                              <div
                                class="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed"
                              >
                                <strong>Sarah</strong>
                                <span class="text-xs text-gray-400 ml-2"
                                  >3:34 PM</span
                                >
                                <p class="text-xs sm:text-sm">
                                  Lorem ipsum dolor sit amet, consetetur
                                  sadipscing elitr, sed diam nonumy eirmod
                                  tempor invidunt ut labore et dolore magna
                                  aliquyam erat, sed diam voluptua.
                                </p>
                              </div>
                            </div>
                            <div class="flex">
                              <div class="flex-shrink-0 mr-3">
                                <img
                                  class="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                                  src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                                  alt=""
                                />
                              </div>
                              <div
                                class="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed"
                              >
                                <strong>Sarah</strong>
                                <span class="text-xs text-gray-400 ml-2"
                                  >3:34 PM</span
                                >
                                <p class="text-xs sm:text-sm">
                                  Lorem ipsum dolor sit amet, consetetur
                                  sadipscing elitr, sed diam nonumy eirmod
                                  tempor invidunt ut labore et dolore magna
                                  aliquyam erat, sed diam voluptua.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 col-span-2 py-6 px-4 flex flex-col">
            <button
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              To: In development
            </button>

            <div class="mt-4 flex flex-col">
              <span class="text-xs text-gray-400">State:</span>
              <span class="text-gray-600 text-sm">Ready for development</span>
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
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                @click="$router.push({ name: 'Board' })"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Task",
  components: {},
});
</script>
