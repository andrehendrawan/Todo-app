<template>
    <div
      v-if="store.notificationOpen"
      @click="store.notificationOpen = false"
      class="fixed inset-0 z-10 w-full h-full"
    ></div>
  
    <div
      v-if="store.notificationOpen"
      class="absolute right-0 z-10 mt-2 overflow-hidden bg-white rounded-lg shadow-xl w-80"
    >
      <!-- Notification Content -->
      <div v-if="store.reminders.length === 0" class="p-4 text-gray-600">
        <p>You have no reminder tasks</p>
      </div>
      <div v-else>
        <div
          v-for="reminder in store.reminders"
          :key="reminder._id"
          href="#"
          @click="logged"
          class="flex items-center px-4 py-6 -mx-2 text-gray-600 hover:text-white hover:bg-indigo-600"
        >
          <p class="mx-2 text-sm">
            <span class="font-bold">{{ reminder.title }}</span> is due today!
          </p>
        </div>
      </div>
    </div>
  </template>

<script setup>
import { store } from "../store/store.js";

const logged = () => {
  console.log(store.reminders);
};
</script>
