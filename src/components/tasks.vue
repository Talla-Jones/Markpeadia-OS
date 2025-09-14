<template>
  <div class="flex h-screen fixed w-screen top-0 left-0 ">
    <Sidebar />
    <div class="flex flex-1 flex-col">
      <Topbar />
      <div class="flex flex-1 flex-col py-9 px-4 items-start overflow-y-auto">

        <div class="flex sm:justify-between w-full items-center flex-col justify-center sm:flex-row space-y-4 ">
          <div class="flex flex-col items-center sm:items-start justify-center">
            <div class="flex text-2xl font-bold ">
              <img class=" h-8" src="./My Icons/17575218172436069244797481521246 (1).png" alt="">
              <div class="px-3">Tasks</div>
            </div>
            <span class="pt-1">
              Manage and track all your tasks with Kanban board
            </span>
          </div>
          <button class="flex h-10 border bg-black text-white px-6 hover:bg-[#373737] hover:border-none justify-center items-center">+ New Task</button>
        </div>
        <div class=" border p-4 w-full mt-6 rounded-md flex space-x-3">
          <div class="flex items-center justify-between relative flex-1">
            <input placeholder="Search tasks..." class=" px-11 h-10 border w-full rounded-md" type="search" name="" id="">
            <img class=" absolute left-2" src="./My Icons/search_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="">
          </div>
          <div class="flex w-[25%] items-center justify-between relative ">
            <select class="w-full px-3 border h-10 rounded-md" name="" id="">
              <option value="">All Status</option>
            </select>
          </div>
          <div class="flex w-[25%] items-center justify-between relative ">
            <select class="w-full px-3 border h-10 rounded-md" name="" id="">
              <option value="">All Priority</option>
            </select>
          </div>
        </div>
        <div class=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-7">
          <div class="flex flex-col flex-1 gap-x-4">
            <div class="flex mb-5">
              <div class="flex rounded-full bg-blue-200 text-[12px] items-center justify-center font-semibold px-2 text-blue-950">To Do</div>
              <span class="px-2">(0)</span>
            </div>
            <div class="flex flex-col items-center justify-center p-6 rounded-md border-collapse border-dashed border-2">
              <img class="h-8" src="./My Icons/17575218172436069244797481521246 (1).png" alt="">
              <p class="p-3">No tasks</p>
            </div>
          </div>
          <div class="flex flex-col flex-1 gap-x-4">
            <div class="flex mb-5">
              <div class="flex rounded-full bg-red-200 text-[12px] items-center justify-center font-semibold px-2 text-red-950">In Progress</div>
              <span class="px-2">(1)</span>
            </div>
            <div class="flex flex-col items-start justify-center p-6 rounded-md border-collapse border">
              <div class="flex justify-between w-full">
                <p class="text-black font-semibold">Design Homepage Mockups</p>
                <p class=" font-bold">...</p>
              </div>
              <div class="mt-6 mb-4 text-gray-500">Create wireframes and mockups for new...</div>
              <div class="flex bg-red-200 rounded-full px-2 py-[2px] text-[13px] font-semibold border-orange-800 border text-orange-800">High</div>
              <div class=" mt-4 flex justify-between w-full items-start">
                <div class="flex">
                  <img src="./My Icons/3239948.png" class="h-5" alt="">
                  <span class="px-3 font-semibold">Due 24/01/2024</span>
                </div>
                <div class="flex">
                  <img src="./My Icons/747376.png" class="h-5" alt="">
                  <span class="pl-3">Team</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col flex-1 gap-x-4">
            <div class="flex mb-5">
              <div class="flex rounded-full bg-yellow-200 text-[12px] items-center justify-center font-semibold px-2 text-yellow-950">Review</div>
              <span class="px-2">(0)</span>
            </div>
            <div class="flex flex-col items-center justify-center p-6 rounded-md border-collapse border-dashed border-2">
              <img class="h-8" src="./My Icons/17575218172436069244797481521246 (1).png" alt="">
              <p class="p-3">No tasks</p>
            </div>
          </div>
          <div class="flex flex-col flex-1 gap-x-4">
            <div class="flex mb-5">
              <div class="flex rounded-full bg-green-200 text-[12px] items-center justify-center font-semibold px-2 text-green-950">Done</div>
              <span class="px-2">(1)</span>
            </div>
            <div class="flex flex-col items-start justify-center p-6 rounded-md border-collapse border">
              <div class="flex justify-between w-full">
                <p class="text-black font-semibold">Setup Development Enviraoment</p>
                <p class=" font-bold">...</p>
              </div>
              <div class="mt-6 mb-4 text-gray-500">Configure development tools and environment ...</div>
              <div class="flex bg-red-200 rounded-full px-2 py-[2px] text-[13px] font-semibold border-orange-800 border text-orange-800">High</div>
              <div class=" mt-4 flex justify-between w-full items-start">
                <div class="flex">
                  <img src="./My Icons/3239948.png" class="h-5" alt="">
                  <span class="px-3 font-semibold">Due 17/01/2024</span>
                </div>
                <div class="flex">
                  <img src="./My Icons/747376.png" class="h-5" alt="">
                  <span class="pl-3">Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './sidebar.vue';
import Topbar from './topbar.vue';

export default {
  name: 'App',
  components: {Sidebar, Topbar}
}
</script>