<template>
  <div v-if="store.isModalEditTaskOpen" class="fixed inset-0 flex items-center justify-center z-50">
    <div
      class="fixed inset-0 bg-black opacity-50"
      @click="closeModalEditTask"
    ></div>
    <div class="bg-white p-6 rounded-lg shadow-lg relative">
      <button
        @click="closeModalEditTask"
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
      >
        &times;
      </button>
      <h2 class="text-lg font-semibold">Edit Task</h2>
      <form @submit.prevent="submitEditedTask">
        <!-- Title Input -->
        <input
          type="text"
          v-model="editedTask.title"
          placeholder="Task Title"
          class="border p-2 w-full mb-4"
          required
        />

        <!-- Description Input -->
        <textarea
          v-model="editedTask.description"
          placeholder="Task Description"
          class="border p-2 w-full mb-4"
          maxlength="500"
        ></textarea>

        <!-- Status Input -->
        <select v-model="editedTask.status" class="border p-2 w-full mb-4" required>
          <option disabled value="">Select Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <!-- Priority Input -->
        <select v-model="editedTask.priority" class="border p-2 w-full mb-4" required>
          <option disabled value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <!-- Category Input -->
        <input
          type="text"
          v-model="editedTask.category"
          placeholder="Category"
          class="border p-2 w-full mb-4"
          maxlength="20"
        />

        <!-- Due Date Input -->
        <input
          type="date"
          v-model="editedTask.dueDate"
          class="border p-2 w-full mb-4"
        />

        <!-- Submit Button -->
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">
          Save Changes
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, watch } from 'vue';
import store from '~/store/store';

// Format Date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const editedTask = ref({ ...store.selectedTask });

watch(
  () => store.selectedTask,
  (newTask) => {
    editedTask.value = { ...newTask };
    if (editedTask.value.dueDate) {
      editedTask.value.dueDate = formatDate(editedTask.value.dueDate);
    }
  },
  { immediate: true }
);

const submitEditedTask = async () => {
  try {
    const taskData = { ...editedTask.value };
    const id = taskData._id;
    delete taskData._id; 
    delete taskData.updatedAt; 
    delete taskData.createdAt;

    const response = await axios.put('http://localhost:3000/api/tasks', {
      id,
      ...taskData,  
    });

    console.log("Task edited:", response);
    closeModalEditTask();
    window.location.reload()
  } catch (error) {
    console.error("Error editing task:", error);
  }
};

const closeModalEditTask = () => {
  store.closeModalEditTask();
};
</script>