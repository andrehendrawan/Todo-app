<template>
  <button
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
    class="relative"
    @click="handleCompletedTask"
  >
    <transition name="fade">
      <svg
        v-if="!isHovered"
        fill="#009903"
        viewBox="0 0 1920 1920"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        key="normal"
        class="absolute inset-x-0"
      >
        <path
          d="M960 1807.059c-467.125 0-847.059-379.934-847.059-847.059 0-467.125 379.934-847.059 847.059-847.059 467.125 0 847.059 379.934 847.059 847.059 0 467.125-379.934 847.059-847.059 847.059M960 0C430.645 0 0 430.645 0 960s430.645 960 960 960 960-430.645 960-960S1489.355 0 960 0M854.344 1157.975 583.059 886.69l-79.85 79.85 351.135 351.133L1454.4 717.617l-79.85-79.85-520.206 520.208Z"
          fill-rule="evenodd"
        ></path>
      </svg>
    </transition>
    <transition name="fade">
      <svg
      v-if="isHovered"
        fill="#00cc00"
        viewBox="0 0 1920 1920"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        key="hovered"
        class="absolute inset-x-0"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M854.344 1317.685 503.209 966.55l79.85-79.85 271.285 271.285 520.207-520.32 79.849 79.962-600.056 600.057ZM960.056 0c-529.355 0-960 430.645-960 960s430.645 960 960 960c529.243 0 960-430.645 960-960S1489.3 0 960.056 0Z"
            fill-rule="evenodd"
          ></path>
        </g>
      </svg>
    </transition>
  </button>
</template>

<script setup>
import axios from "axios";
import Swal from "sweetalert2";
import { defineProps } from "vue";

// Props to receive the task ID
const props = defineProps({
  taskId: {
    type: String,
    required: true,
  },
});
const isHovered = ref(false);

const handleCompletedTask = async () => {
  try {
    // Confirm the action and offer an undo option
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to mark this task as completed? You can undo this action.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, complete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      // Make a PUT request to update the task status to 'completed'
      const response = await axios.put(
        `http://localhost:3000/api/tasks/completed`,
        {
          data: { id: props.taskId },
          status: "completed",
        }
      );
      console.log(response.data);

      // Show a toast alert for 5 seconds with an undo option
      const undoResult = await Swal.fire({
        title: "Task Completed!",
        text: "The task status has been updated to completed.",
        icon: "success",
        showCancelButton: true,
        cancelButtonText: "Undo",
        timer: 5000, // The alert will automatically close after 5 seconds
        timerProgressBar: true,
        position: "bottom-start", // Position the toast at the bottom-left corner
      });

      if (undoResult.dismiss === Swal.DismissReason.cancel) {
        // Undo the completion by making another PUT request to revert the status
        await axios.put(`http://localhost:3000/api/tasks/completed`, {
          data: { id: props.taskId },
          status: "pending", // or whatever the previous status was
        });

        Swal.fire({
          title: "Undone!",
          text: "The task status has been reverted to pending.",
          icon: "info",
          position: "bottom-start", // Position the undo confirmation at the bottom-left corner
        });
      }

      // Reload the page after the undo alert process is completed
      window.location.reload();
    }
  } catch (error) {
    // Show an error alert
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "There was an error updating the task.",
    });
    console.error("Error updating task status:", error);
  }
};
</script>

<style scoped>
button {
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 0;
}

button:hover {
  background-color: #e0ffe0; /* Light green background on hover */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
