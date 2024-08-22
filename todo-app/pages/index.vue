<template>
  <div>
    <div class="flex h-screen bg-gray-200">
      <SideBar></SideBar>
      <div class="flex flex-col flex-1 overflow-hidden">
        <NavBar></NavBar>
        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div class="container px-6 py-8 mx-auto">
            <h3 class="text-3xl font-medium text-gray-700">My Tasks</h3>
            <div class="mt-4">
              <Banner></Banner>
            </div>
            <!-- Dashboard content here -->
            <div class="mt-8"></div>
            <TableTask></TableTask>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
