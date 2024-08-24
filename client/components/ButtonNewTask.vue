<template>
  <div>
    <button
      @click="store.openModalNewTask"
      class="px-4 py-2 text-white bg-gray-900 hover:bg-indigo-600 rounded-md"
    >
      Add New Task
    </button>
    <ModalNewTask v-if="store.isModalNewTaskOpen" @close="store.closeModalNewTask" />
  </div>
</template>

<script setup>
import store from "../store/store.js";
import ModalNewTask from "./ModalNewTask.vue";

</script>