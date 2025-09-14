<template>
    <div class="flex h-screen fixed w-screen top-0 left-0 ">
      <Sidebar />
      <div class="flex flex-1 flex-col">
        <Topbar />
        <div class="flex flex-1 flex-col py-9 px-4 items-start overflow-y-auto">
          <div class="flex sm:justify-between w-full items-center flex-col justify-center sm:flex-row space-y-4 ">
            <div class="flex flex-col items-center sm:items-start justify-center">
              <div class="flex text-2xl font-bold ">
                <img class=" h-8" src="./My Icons/522561.png" alt="">
                <div class="px-3">Projects</div>
              </div>
              <span class="pt-1">
                Manage and track all your company projects
              </span>
            </div>
            <button @click="$router.push('/tasks')" class="flex h-10 border bg-black text-white px-6 hover:bg-[#373737] hover:border-none justify-center items-center">+ New Task</button>
          </div>
          <div class=" border my-4 p-6 w-full mb-4 rounded-md flex space-x-3">
            <div class="flex items-center justify-between relative flex-1">
              <input placeholder="Search recognitions..." class=" px-11 h-10 border w-full rounded-md" type="search" name="" id="">
              <img class=" absolute left-2" src="./My Icons/search_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="">
            </div>
            <div class="flex w-[35%] items-center justify-between relative ">
              <select class="w-full px-3 border h-10 rounded-md" name="" id="">
                <option value="">All Status</option>
              </select>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 my-2 w-full gap-3">
            <div class="flex p-4 rounded-md flex-col w-full items-start border">
              <p class="text-black text-[20px] font-semibold">Website Redesign</p>
              <div class="flex space-x-3 my-2">
                <div class=" justify-center items-center rounded-full flex bg-blue-200 text-blue-900 text-[13px] font-semibold px-3">
                  In Progress
                </div>
                <div class=" justify-center items-center rounded-full flex bg-red-200 text-red-900 text-[13px] font-semibold px-3">
                  High
                </div>
              </div>
              <div class="flex text-start text-gray-500">Complete redesign of company website with modern UI/UX</div>
              <div class="flex w-full text-black mt-4 justify-between">
                <p>Progress</p>
                <p>65%</p>
              </div>
              <div class="w-full bg-gray-200 h-5 rounded-full flex my-3">
                <div class="flex h-full rounded-l-full w-2/3 bg-black"></div>
              </div>
              <div class="flex w-full justify-between items-center my-3">
                <div class="flex items-center justify-center text-gray-500"><img class="h-4 mr-2" src="./My Icons/3239948.png" alt="">Due  14/03/2024</div>
                <div class="flex items-center justify-center text-gray-500"><img class="h-4 mr-2" src="./My Icons/747376.png" alt="">2 members</div>
              </div>
            </div>
            <div class="flex p-4 rounded-md flex-col w-full items-start border">
              <p class="text-black text-[20px] font-semibold">Mobile App Development</p>
              <div class="flex space-x-3 my-2">
                <div class=" justify-center items-center rounded-full flex bg-blue-200 text-blue-900 text-[13px] font-semibold px-3">
                  Planning
                </div>
                <div class=" justify-center items-center rounded-full flex bg-red-200 text-red-900 text-[13px] font-semibold px-3">
                  Medium
                </div>
              </div>
              <div class="flex text-start text-gray-500">Develop mobile application for costumer engagement</div>
              <div class="flex w-full text-black mt-4 justify-between">
                <p>Progress</p>
                <p>15%</p>
              </div>
              <div class="w-full bg-gray-200 h-5 rounded-full flex my-3">
                <div class="flex h-full rounded-l-full w-1/6 bg-black"></div>
              </div>
              <div class="flex w-full justify-between items-center my-3">
                <div class="flex items-center justify-center text-gray-500"><img class="h-4 mr-2" src="./My Icons/3239948.png" alt="">Due  31/05/2024</div>
                <div class="flex items-center justify-center text-gray-500"><img class="h-4 mr-2" src="./My Icons/747376.png" alt="">1 members</div>
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
  components: {
    Sidebar, Topbar
  }
}
</script>