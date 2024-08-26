<template>
  <button @click="deleteTask">
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
  </button>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

const props = defineProps({
  taskId: {
    type: String,
    fetchTasks: Function,
    required: true,
  },
});
const deleteTask = async () => {
  try {
    // Show confirmation dialog
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    // Proceed with deletion if confirmed
    if (result.isConfirmed) {
      // Send the delete request
      const response = await axios.delete("http://localhost:3000/api/tasks", {
        data: { id: props.taskId },
      });
      console.log("Delete response:", response.data);
      // Show success message
      await Swal.fire({
        title: "Deleted!",
        text: "Your task has been deleted.",
        icon: "success",
      });

      // Optionally reload the page or update the UI
      window.location.reload();
    }
  } catch (error) {
    // Handle errors
    console.error("Error deleting task:", error);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong. Please try again.",
    });
  }
};
</script>
