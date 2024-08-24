<template>
  <div class="flex flex-col">
    <div class="py-2 my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
      >
        <table class="min-w-full">
          <thead>
            <tr>
              <th class="px-4 py-3 border-b border-gray-200 bg-gray-50">
                <!-- Checkbox for selecting all tasks -->
                <input
                  type="checkbox"
                  class="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out hover:scale-110 hover:text-blue-800"
                />
              </th>
              <th
                class="px-4 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Task Name
              </th>
              <th
                class="px-4 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Priority
              </th>
              <th
                class="px-4 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Status
              </th>
              <th
                class="px-4 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Due Date
              </th>
              <th
                class="px-4 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Category
              </th>
              <th class="px-4 py-3 border-b border-gray-200 bg-gray-50"></th>
              <th class="px-4 py-3 border-b border-gray-200 bg-gray-50"></th>
            </tr>
          </thead>

          <tbody class="bg-white">
            <tr>
              <td class="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
                <input
                  type="checkbox"
                  class="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out hover:scale-110 hover:text-blue-800"
                />
              </td>
              <td
                class="px-4 py-4 whitespace-no-wrap border-b border-gray-200 w-3/5"
              >
                <div class="flex-1">
                  <div class="ml-1">
                    <div class="text-sm font-medium leading-5 text-gray-900">
                      Explore Vue.js
                    </div>
                    <div v-if="!store.isExpanded">
                      <div class="text-sm leading-5 text-gray-500">
                        {{ truncatedText }}
                      </div>
                      <button
                        @click="store.toggleExpand"
                        class="text-blue-500 text-xs"
                      >
                        Read More
                      </button>
                    </div>
                    <div v-else>
                      <div class="text-sm leading-5 text-gray-500">
                        {{ fullText }}
                      </div>
                      <button
                        @click="store.toggleExpand"
                        class="text-blue-500 text-xs"
                      >
                        Read Less
                      </button>
                    </div>
                  </div>
                </div>
              </td>

              <td class="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="text-sm leading-5 text-gray-900">High</div>
              </td>

              <td class="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
                <span
                  class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                  >Active</span
                >
              </td>

              <td
                class="px-4 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200"
              >
                22 January 2025
              </td>
              <td
                class="px-4 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200"
              >
                Work
              </td>

              <td
                class="px-2 py-4 leading-5 text-right whitespace-no-wrap border-b border-gray-200"
              >
                <a href="#" class="text-indigo-600 hover:text-indigo-900">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    stroke="#000000"
                    height="24"
                    width="24"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <title></title>
                      <g id="Complete">
                        <g id="edit">
                          <g>
                            <path
                              d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
                              fill="none"
                              stroke="#007bff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            ></path>
                            <polygon
                              fill="none"
                              points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
                              stroke="#007bff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            ></polygon>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </td>
              <td
                class="px-2 py-4 leading-5 text-right whitespace-no-wrap border-b border-gray-200"
              >
                <a href="#" class="text-indigo-600 hover:text-indigo-900">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M10 12V17"
                        stroke="#d10000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M14 12V17"
                        stroke="#d10000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M4 7H20"
                        stroke="#d10000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                        stroke="#d10000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                        stroke="#d10000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { store } from "../store/store.js";

const fullText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloribus ex facere, quia iure sequi sapiente rem, non reiciendis facilis expedita laborum ducimus? Vel, incidunt reprehenderit possimus modi debitis facilis nisi tempora exercitationem suscipit est odit tenetur impedit! Delectus dolores optio, provident odit eligendi et rerum dicta ipsa nam explicabo!`;

const truncatedText = computed(() => {
  return fullText.length > 100 ? fullText.substring(0, 100) + "..." : fullText;
});
</script>
