<template>
  <div
    :class="{ block: store.sidebarOpen, hidden: !store.sidebarOpen }"
    @click="store.toggleSidebar"
    class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
  ></div>

  <div
    :class="{
      'translate-x-0 ease-out': store.sidebarOpen,
      '-translate-x-full ease-in': !store.sidebarOpen,
    }"
    class="fixed inset-y-0 left-0 z-30 w-56 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0"
  >
    <div class="flex items-center justify-center mt-8">
      <div class="flex items-center">
        <div class="w-44 h-20">
          <!-- Logo Icon -->
          <img src="../assets/icons/whitelogo.png" alt="logo" />
        </div>
      </div>
    </div>

    <nav class="mt-10">
      <!-- Task Icon -->
      <NuxtLink
        to="/"
        class="flex items-center px-6 py-2 mt-4 text-gray-100"
        :class="{'bg-gray-300 bg-opacity-25': isActive('/')}"
      >
        <svg
          class="size-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M10 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M7 3V5M17 3V5M3 9H21M13.5 13.0001L7 13M10 17.0001L7 17M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
        <span class="mx-3">Task</span>
      </NuxtLink>
      <NuxtLink
        to="/completed"
        class="flex items-center px-6 py-2 mt-4 text-gray-100"
        :class="{'bg-gray-300 bg-opacity-25': isActive('/completed')}"
      >
        <!-- Completed Task Icon -->
        <svg class="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M9 10L12.2581 12.4436C12.6766 12.7574 13.2662 12.6957 13.6107 12.3021L20 5"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
            <path
              d="M21 12C21 13.8805 20.411 15.7137 19.3156 17.2423C18.2203 18.7709 16.6736 19.9179 14.893 20.5224C13.1123 21.1268 11.187 21.1583 9.38744 20.6125C7.58792 20.0666 6.00459 18.9707 4.85982 17.4789C3.71505 15.987 3.06635 14.174 3.00482 12.2945C2.94329 10.415 3.47203 8.56344 4.51677 6.99987C5.56152 5.4363 7.06979 4.23925 8.82975 3.57685C10.5897 2.91444 12.513 2.81996 14.3294 3.30667"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
          </g>
        </svg>
        <span class="mx-3">Done Tasks</span>
      </NuxtLink>
    </nav>
  </div>
</template>

<script setup>
import { store } from "../store/store.js";
import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = (path) => {
  return route.path === path;
};
</script>
