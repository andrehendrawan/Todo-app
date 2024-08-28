<template>
  <div class="flex flex-col">
    <div class="py-2 my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
      >
        <table class="min-w-full">
          <thead>
            <tr>
              <th class="px-4 py-3 border-b border-gray-200 bg-gray-50"></th>
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
            <!-- Loading state -->
            <tr v-if="isLoading">
              <td colspan="8" class="px-4 py-4 text-center">
                <button
                  type="button"
                  class="bg-indigo-500 text-white rounded-md"
                  disabled
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
                    width="200"
                    height="200"
                    style="
                      shape-rendering: auto;
                      display: block;
                      background: rgb(255, 255, 255);
                    "
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g>
                      <g transform="rotate(0 50 50)">
                        <rect
                          fill="#8071fe"
                          height="12"
                          width="6"
                          ry="6"
                          rx="3"
                          y="24"
                          x="47"
                        >
                          <animate
                            repeatCount="indefinite"
                            begin="-0.9166666666666666s"
                            dur="1s"
                            keyTimes="0;1"
                            values="1;0"
                            attributeName="opacity"
                          ></animate>
                        </rect>
                      </g>
                      <g transform="rotate(30 50 50)">
                        <rect
                          fill="#8071fe"
                          height="12"
                          width="6"
                          ry="6"
                          rx="3"
                          y="24"
                          x="47"
                        >
                          <animate
                            repeatCount="indefinite"
                            begin="-0.8333333333333334s"
                            dur="1s"
                            keyTimes="0;1"
                            values="1;0"
                            attributeName="opacity"
                          ></animate>
                        </rect>
                      </g>
                      <g transform="rotate(60 50 50)">
                        <rect
                          fill="#8071fe"
                          height="12"
                          width="6"
                          ry="6"
                          rx="3"
                          y="24"
                          x="47"
                        >
                          <animate
                            repeatCount="indefinite"
                            begin="-0.75s"
                            dur="1s"
                            keyTimes="0;1"
                            values="1;0"
                            attributeName="opacity"
                          ></animate>
                        </rect>
                      </g>
                      <g transform="rotate(90 50 50)">
                        <rect
                          fill="#8071fe"
                          height="12"
                          width="6"
                          ry="6"
                          rx="3"
                          y="24"
                          x="47"
                        >
                          <animate
                            repeatCount="indefinite"
                            begin="-0.6666666666666666s"
                            dur="1s"
                            keyTimes="0;1"
                            values="1;0"
                            attributeName="opacity"
                          ></animate>
                        </rect>
                      </g>
                      <g transform="rotate(120 50 50)">
                        <rect
                          fill="#8071fe"
                          height="12"
                          width="6"
                          ry="6"
                          rx="3"
                          y="24"
                          x="47"
                        >
                          <animate
                            repeatCount="indefinite"
                            begin="-0.5833333333333334s"
                            dur="1s"
                            keyTimes="0;1"
                            values="1;0"
                            attributeName="opacity"
                          ></animate>
                        </rect>
                      </g>
                      <g transform="rotate(150 50 50)">
                        <rect
                          fill="#8071fe"
                          height="12"
                          width="6"
                          ry="6"
                          rx="3"
                          y="24"
                          x="47"
                        >
                          <animate
                            repeatCount="indefinite"
                            begin="-0.5s"
                            dur="1s"
                            keyTimes="0;1"
                            values="1;0"
                            attributeName="opacity"
                          ></animate>
                        </rect>
                      </g>
                      <g transform="rotate(180 50 50)">
                        <rect
                          fill="#8071fe"
                          height="12"
                          width="6"
                          ry="6"
                          rx="3"
                          y="24"
                          x="47"
                        >
                          <animate
                            repeatCount="indefinite"
                            begin="-0.4166666666666667s"
                            dur="1s"
                            keyTimes="0;1"
                            values="1;0"
                            attributeName="opacity"
                          ></animate>
                        </rect>
                      </g>
                      <g transform="rotate(210 50 50)">
                        <rect
                          fill="#8071fe"
                          height="12"
                          width="6"
                          ry="6"
                          rx="3"
                          y="24"
                          x="47"
                        >
                          <animate
                            repeatCount="indefinite"
                            begin="-0.3333333333333333s"
                            dur="1s"
                            keyTimes="0;1"
                            values="1;0"
                            attributeName="opacity"
                          ></animate>
                        </rect>
                      </g>
                      <g transform="rotate(240 50 50)">
                        <rect
                          fill="#8071fe"
                          height="12"
                          width="6"
                          ry="6"
                          rx="3"
                          y="24"
                          x="47"
                        >
                          <animate
                            repeatCount="indefinite"
                            begin="-0.25s"
                            dur="1s"
                            keyTimes="0;1"
                            values="1;0"
                            attributeName="opacity"
                          ></animate>
                        </rect>
                      </g>
                      <g transform="rotate(270 50 50)">
                        <rect
                          fill="#8071fe"
                          height="12"
                          width="6"
                          ry="6"
                          rx="3"
                          y="24"
                          x="47"
                        >
                          <animate
                            repeatCount="indefinite"
                            begin="-0.16666666666666666s"
                            dur="1s"
                            keyTimes="0;1"
                            values="1;0"
                            attributeName="opacity"
                          ></animate>
                        </rect>
                      </g>
                      <g transform="rotate(300 50 50)">
                        <rect
                          fill="#8071fe"
                          height="12"
                          width="6"
                          ry="6"
                          rx="3"
                          y="24"
                          x="47"
                        >
                          <animate
                            repeatCount="indefinite"
                            begin="-0.08333333333333333s"
                            dur="1s"
                            keyTimes="0;1"
                            values="1;0"
                            attributeName="opacity"
                          ></animate>
                        </rect>
                      </g>
                      <g transform="rotate(330 50 50)">
                        <rect
                          fill="#8071fe"
                          height="12"
                          width="6"
                          ry="6"
                          rx="3"
                          y="24"
                          x="47"
                        >
                          <animate
                            repeatCount="indefinite"
                            begin="0s"
                            dur="1s"
                            keyTimes="0;1"
                            values="1;0"
                            attributeName="opacity"
                          ></animate>
                        </rect>
                      </g>
                      <g></g>
                    </g>
                  </svg>
                </button>
              </td>
            </tr>

            <tr v-else v-for="task in tasks.data" :key="task.id">
              <td
                class="px-2 py-4 text-center align-middle border-b border-gray-200"
              >
                <ButtonCompleted :taskId="task._id" />
              </td>
              <td
                class="px-4 py-4 whitespace-no-wrap border-b border-gray-200 w-2/5"
              >
                <div class="flex-1">
                  <div class="ml-1">
                    <div class="text-sm font-medium leading-5 text-gray-900">
                      {{ task.title }}
                    </div>
                    <div>
                      <div class="text-sm leading-5 text-gray-500">
                        {{ task.description }}
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="text-sm leading-5 text-gray-900">
                  {{ task.priority }}
                </div>
              </td>
              <td class="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
                <span
                  :class="{
                    'inline-flex px-2 text-xs font-semibold leading-5 rounded-full': true,
                    'text-green-800 bg-green-100': task.status === 'completed',
                    'text-yellow-800 bg-yellow-100': task.status === 'pending',
                    'text-red-800 bg-red-100': task.status === 'overdue',
                  }"
                >
                  {{ task.status }}
                </span>
              </td>
              <td
                class="px-4 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200"
              >
                {{ formatDate(task.dueDate) }}
              </td>
              <td
                class="px-4 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200"
              >
                {{ task.category }}
              </td>

              <td
                class="px-2 py-4 leading-5 text-center whitespace-no-wrap border-b border-gray-200"
              >
                <ButtonEditTask :task="task" />
              </td>
              <td
                class="px-2 py-4 leading-5 text-center whitespace-no-wrap border-b border-gray-200"
              >
                <ButtonDelete :taskId="task._id" :fetchTasks="fetchTasks" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { store } from "../store/store.js";
import axios from "axios";

const props = defineProps({
  searchQuery: {
    type: String,
    default: "",
  },
});

const isLoading = ref(false);

const tasks = ref([]);
const fetchTasks = async (searchQuery = "") => {
  try {
    isLoading.value = true;
    console.log(import.meta.env.VITE_BASE_URL);
    
    // Create a unique cache key based on the search query
    const cacheKey = `tasks_${searchQuery}`;
    const cachedTasks = localStorage.getItem(cacheKey);
    const cacheExpiry = localStorage.getItem(`${cacheKey}_expiry`);
    const now = new Date().getTime();

    // if (cachedTasks && cacheExpiry && now < cacheExpiry) {
    //   tasks.value = JSON.parse(cachedTasks);
    // } else {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/tasks`,
      {
        params: {
          search: searchQuery,
        },
      }
    );
    tasks.value = response.data;
    // Check for reminders
    store.checkReminders(tasks.value.data);
    // Cache the data and set an expiry time (e.g., 5 minutes)
    // localStorage.setItem(cacheKey, JSON.stringify(tasks.value));
    // localStorage.setItem(`${cacheKey}_expiry`, now + 5 * 60 * 1000);
    // }
  } catch (error) {
    console.error("Error fetching tasks:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => fetchTasks(props.searchQuery));

watch(
  () => props.searchQuery,
  (newQuery) => {
    fetchTasks(newQuery);
  }
);

const fullText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloribus ex facere, quia iure sequi sapiente rem, non reiciendis facilis expedita laborum ducimus? Vel, incidunt reprehenderit possimus modi debitis facilis nisi tempora exercitationem suscipit est odit tenetur impedit! Delectus dolores optio, provident odit eligendi et rerum dicta ipsa nam explicabo!`;

const truncatedText = computed(() => {
  return fullText.length > 100 ? fullText.substring(0, 100) + "..." : fullText;
});

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
</script>
