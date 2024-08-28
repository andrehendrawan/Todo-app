<template>
  <div class="fixed inset-0 flex items-center justify-center z-50">
    <div
      class="fixed inset-0 bg-black opacity-50"
      @click="closeModalNewTask"
    ></div>
    <div class="bg-white p-6 rounded-lg shadow-lg relative">
      <button
        @click="closeModalNewTask"
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
      >
        &times;
      </button>
      <h2 class="text-lg font-semibold">Add New Task</h2>
      <form @submit.prevent="submitNewTask">
        <!-- Title Input -->
        <input
          type="text"
          v-model="task.title"
          placeholder="Task Title"
          class="border p-2 w-full mb-4"
          required
        />

        <!-- Description Input -->
        <textarea
          v-model="task.description"
          placeholder="Task Description"
          class="border p-2 w-full mb-4"
          maxlength="500"
        ></textarea>

        <!-- Status Input -->
        <select v-model="task.status" class="border p-2 w-full mb-4" required>
          <option disabled value="">Select Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <!-- Priority Input -->
        <select v-model="task.priority" class="border p-2 w-full mb-4" required>
          <option disabled value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <!-- Category Input -->
        <input
          type="text"
          v-model="task.category"
          placeholder="Category"
          class="border p-2 w-full mb-4"
          maxlength="20"
        />

        <!-- Due Date Input -->
        <input
          type="date"
          v-model="task.dueDate"
          class="border p-2 w-full mb-4"
        />

        <!-- Submit Button -->
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">
          Save Task
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import Swal from "sweetalert2";
import { ref } from "vue";
import store from "~/store/store";

const task = ref({
  title: "",
  description: "",
  status: "",
  priority: "",
  category: "personal", // Default value for category
  dueDate: "",
});

const submitNewTask = async () => {
  try {
    const response = await $fetch(`${import.meta.env.VITE_BASE_URL}/api/tasks`, {
      method: "POST",
      body: task.value,
    });
    console.log("New task submitted:", response);

    task.value = {
      title: "",
      description: "",
      status: "",
      priority: "",
      category: "personal",
      dueDate: "",
    };

    localStorage.removeItem('tasks');
    localStorage.removeItem('cacheExpiry');

    window.location.reload();
  } catch (error) {
    let errorMessage = "An error occurred. Please try again.";

    if (error.response && error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message;
    } else if (error.message) {
      errorMessage = error.message;
    }

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: errorMessage,
    });

    console.error("Error submitting new task:", error);
  }
};

const closeModalNewTask = () => {
  store.closeModalNewTask();
};
</script>
