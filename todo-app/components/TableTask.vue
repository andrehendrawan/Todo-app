<template>
  <div class="flex flex-col mt-8">
    <div class="py-2 my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
      >
        <table class="min-w-full">
          <thead>
            <tr>
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
            </tr>
          </thead>

          <tbody class="bg-white">
            <tr>
              <td class="px-4 py-4 whitespace-no-wrap border-b border-gray-200 w-3/5">
                <div class="flex-1">
                  <div class="ml-1">
                    <div class="text-sm font-medium leading-5 text-gray-900">
                      Explore Vue.js
                    </div>
                    <div v-if="!store.isExpanded">
                      <div class="text-sm leading-5 text-gray-500">
                        {{ truncatedText }}
                      </div>
                      <button @click="store.toggleExpand" class="text-blue-500 text-xs">
                        Read More
                      </button>
                    </div>
                    <div v-else>
                      <div class="text-sm leading-5 text-gray-500">
                        {{ fullText }}
                      </div>
                      <button @click="store.toggleExpand" class="text-blue-500 text-xs">Read Less</button>
                    </div>
                  </div>
                </div>
              </td>

              <td class="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="text-sm leading-5 text-gray-900">
                  High
                </div>
                <!-- <div class="text-sm leading-5 text-gray-500">Web dev</div> -->
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
                class="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200"
              >
                <a href="#" class="text-indigo-600 hover:text-indigo-900"
                  >Edit</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { store } from "../store/store.js";

const fullText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloribus ex facere, quia iure sequi sapiente rem, non reiciendis facilis expedita laborum ducimus? Vel, incidunt reprehenderit possimus modi debitis facilis nisi tempora exercitationem suscipit est odit tenetur impedit! Delectus dolores optio, provident odit eligendi et rerum dicta ipsa nam explicabo!`;

const truncatedText = computed(() => {
  return fullText.length > 100 ? fullText.substring(0, 100) + '...' : fullText;
});
</script>
