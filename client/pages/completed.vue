<template>
 <div>
    <div class="flex h-screen bg-gray-200">
      <SideBar />
      <div class="flex flex-col flex-1 overflow-hidden">
        <NavBar />
        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div class="container px-6 py-8 mx-auto">
            <div class="flex items-center justify-between">
              <h3 class="text-3xl font-medium text-gray-700">Completed Tasks</h3>
              <ButtonNewTask />
            </div>
            <!-- Dashboard content here -->
            <div class="mt-2"></div>
            <TableCompletedTask />
          </div>
        </main>
      </div>
    </div>
  </div>
  </template>  