<template>
  <header
    class="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600"
  >
    <div class="flex items-center">
      <button
        @click="store.toggleSidebar"
        class="text-gray-500 focus:outline-none lg:hidden"
      >
        <!-- Hamburger Icon -->
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <path
            d="M4 18H20"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M4 12H20"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M4 6H20"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>

      <div class="relative mx-4 lg:mx-0">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <!-- Search icon-->
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                stroke="#c2c2c2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </span>
        <input
          class="w-32 pl-10 pr-4 rounded-md form-input sm:w-64 focus:border-indigo-600"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>

    <div class="flex items-center">
      <div class="relative">
        <button
          @click="store.notificationOpen = !store.notificationOpen"
          class="flex mx-4 text-gray-600 focus:outline-none"
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
            stroke-width="0.00024000000000000003"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.33497 4.72727V5.25342C6.64516 6.35644 4.76592 9.97935 4.83412 13.1192L4.83409 14.8631C3.45713 16.6333 3.53815 19.2727 6.9735 19.2727H9.33497C9.33497 19.996 9.61684 20.6897 10.1186 21.2012C10.6203 21.7127 11.3008 22 12.0104 22C12.72 22 13.4005 21.7127 13.9022 21.2012C14.404 20.6897 14.6858 19.996 14.6858 19.2727H17.0538C20.4826 19.2727 20.5323 16.6278 19.1555 14.8576L19.1938 13.1216C19.2631 9.97811 17.3803 6.35194 14.6858 5.25049V4.72727C14.6858 4.00396 14.404 3.31026 13.9022 2.7988C13.4005 2.28734 12.72 2 12.0104 2C11.3008 2 10.6203 2.28734 10.1186 2.7988C9.61684 3.31026 9.33497 4.00395 9.33497 4.72727ZM12.9022 4.72727C12.9022 4.74573 12.9017 4.76414 12.9006 4.78246C12.6101 4.74603 12.3142 4.72727 12.014 4.72727C11.7113 4.72727 11.413 4.74634 11.1203 4.78335C11.1192 4.76474 11.1186 4.74603 11.1186 4.72727C11.1186 4.48617 11.2126 4.25494 11.3798 4.08445C11.547 3.91396 11.7739 3.81818 12.0104 3.81818C12.2469 3.81818 12.4738 3.91396 12.641 4.08445C12.8083 4.25494 12.9022 4.48617 12.9022 4.72727ZM11.1186 19.2727C11.1186 19.5138 11.2126 19.7451 11.3798 19.9156C11.547 20.086 11.7739 20.1818 12.0104 20.1818C12.2469 20.1818 12.4738 20.086 12.641 19.9156C12.8083 19.7451 12.9022 19.5138 12.9022 19.2727H11.1186ZM17.0538 17.4545C17.8157 17.4545 18.2267 16.5435 17.7309 15.9538C17.49 15.6673 17.3616 15.3028 17.3699 14.9286L17.4106 13.0808C17.4787 9.99416 15.0427 6.54545 12.014 6.54545C8.98598 6.54545 6.55028 9.99301 6.61731 13.0789L6.65748 14.9289C6.66561 15.303 6.53726 15.6674 6.29639 15.9538C5.80054 16.5435 6.21158 17.4545 6.9735 17.4545H17.0538Z"
                fill="#4f4f4f"
              ></path>
            </g>
          </svg>
        </button>

        <div
          v-if="store.notificationOpen"
          @click="store.notificationOpen = false"
          class="fixed inset-0 z-10 w-full h-full"
        ></div>

        <div
          v-if="store.notificationOpen"
          class="absolute right-0 z-10 mt-2 overflow-hidden bg-white rounded-lg shadow-xl w-80"
        >
          <!-- Notification Content-->
          <a
            href="#"
            class="flex items-center px-4 py-3 -mx-2 text-gray-600 hover:text-white hover:bg-indigo-600"
          >
            <img
              class="object-cover w-8 h-8 mx-1 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
              alt="avatar"
            />
            <p class="mx-2 text-sm">
              <span class="font-bold" href="#">Sara Salah</span> replied on the
              <span class="font-bold text-indigo-400" href="#"
                >Upload Image</span
              >
              artical . 2m
            </p>
          </a>
          <a
            href="#"
            class="flex items-center px-4 py-3 -mx-2 text-gray-600 hover:text-white hover:bg-indigo-600"
          >
            <img
              class="object-cover w-8 h-8 mx-1 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
              alt="avatar"
            />
            <p class="mx-2 text-sm">
              <span class="font-bold" href="#">Sara Salah</span> replied on the
              <span class="font-bold text-indigo-400" href="#"
                >Upload Image</span
              >
              artical . 2m
            </p>
          </a>
          <a
            href="#"
            class="flex items-center px-4 py-3 -mx-2 text-gray-600 hover:text-white hover:bg-indigo-600"
          >
            <img
              class="object-cover w-8 h-8 mx-1 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
              alt="avatar"
            />
            <p class="mx-2 text-sm">
              <span class="font-bold" href="#">Sara Salah</span> replied on the
              <span class="font-bold text-indigo-400" href="#"
                >Upload Image</span
              >
              artical . 2m
            </p>
          </a>
        </div>
      </div>

      <div class="relative">
        <button
          @click="store.dropdownOpen = !store.dropdownOpen"
          class="relative block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
        >
          <img
            class="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
            alt="Avatar"
          />
        </button>

        <div
          v-if="store.dropdownOpen"
          @click="store.dropdownOpen = false"
          class="fixed inset-0 z-10 w-full h-full"
        ></div>

        <div
          v-if="store.dropdownOpen"
          class="absolute right-0 z-10 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl"
        >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >Profile</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >Products</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >Logout</a
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { store } from "../store/store.js";
</script>

