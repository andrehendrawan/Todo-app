import { reactive } from 'vue';

export const store = reactive({
  sidebarOpen: false,
  notificationOpen: false,
  dropdownOpen: false,
  isExpanded: false,
  isModalNewTaskOpen: false,
  
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  },
  toggleNotification() {
    this.notificationOpen = !this.notificationOpen;
  },
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  },

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  },

  openModalNewTask() {
    this.isModalNewTaskOpen = true;
  },
  closeModalNewTask() {
    this.isModalNewTaskOpen = false;
  },
});

export default store;
