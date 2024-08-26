<template>
  <button
    class="bg-green-600 text-white rounded-md px-2 py-1 text-xs"
    @click="handleCompletedTask"
  >
    Complete
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
