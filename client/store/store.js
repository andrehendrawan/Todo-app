import { reactive } from 'vue';

export const store = reactive({
  sidebarOpen: false,
  notificationOpen: false,
  dropdownOpen: false,

  isExpanded: false,

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
});

export default store;
