<template>
  <div class="flex h-screen fixed w-screen top-0 left-0 ">

    <Sidebar />

    <div class="flex flex-1 flex-col">
      <Topbar />
      <div class="flex flex-1 flex-col py-9 px-4 items-start overflow-y-auto">
        <div class="flex sm:justify-between w-full items-center flex-col justify-center sm:flex-row space-y-4 ">
          <div class="flex flex-col items-center sm:items-start justify-center">
            <h1 class="text-2xl font-bold ">
              Welcome back, Jones!!
            </h1>
            <span>
              Here's what's happening with your busiusinessntoday
            </span>
          </div>
          <button @click="$router.push('/tasks')" class="flex h-10 border bg-black text-white px-6 hover:bg-[#373737] hover:border-none justify-center items-center">+ New Task</button>
        </div>
        <div class="py-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          <div class="flex justify-between border rounded-md ">
            <div class="flex flex-col justify-start items-start px-7 py-4 gap-3">
              <h2 class="text-[15px] font-semibold text-gray-500">Active Projects</h2>
              <h1 class="text-3xl text-black font-semibold">8</h1>
              <div class="flex justify-center items-center">
                <h6 class=" text-green-600 text-[15px]">~12.5%</h6>
                <div class="flex flex-col px-3 text-[14px]">
                  <span>vs last</span>
                  <span>month</span>
                </div>
              </div>
            </div>
            <div class="flex justify-center items-center h-full pr-6">
              <img class="h-10" src="./My Icons/15124838.png" alt="">
            </div>
          </div>
          <div class="flex justify-between border rounded-md ">
            <div class="flex flex-col justify-start items-start px-7 py-4 gap-3">
              <h2 class="text-[15px] font-semibold text-gray-500">Tasks Completed</h2>
              <h1 class="text-3xl text-black font-semibold">24</h1>
              <div class="flex justify-center items-center">
                <h6 class=" text-green-600 text-[15px]">~8.2%</h6>
                <div class="flex flex-col px-3 text-[14px]">
                  <span>vs last</span>
                  <span>month</span>
                </div>
              </div>
            </div>
            <div class="flex justify-center items-center h-full pr-6">
              <img class="h-10" src="./My Icons/8625364.png" alt="">
            </div>
          </div>
          <div class="flex justify-between border rounded-md ">
            <div class="flex flex-col justify-start items-start px-7 py-4 gap-3">
              <h2 class="text-[15px] font-semibold text-gray-500">Hours This Week</h2>
              <h1 class="text-3xl text-black font-semibold">38.5</h1>
              <div class="flex justify-center items-center">
                <h6 class=" text-red-600 text-[15px]">~2.5%</h6>
                <div class="flex flex-col px-3 text-[14px]">
                  <span>vs last</span>
                  <span>month</span>
                </div>
              </div>
            </div>
            <div class="flex justify-center items-center h-full pr-6">
              <img class="h-10" src="./My Icons/2997985.png" alt="">
            </div>
          </div>
          <div class="flex justify-between border rounded-md ">
            <div class="flex flex-col justify-start items-start px-7 py-4 gap-3">
              <h2 class="text-[15px] font-semibold text-gray-500">Leave Days Left</h2>
              <h1 class="text-3xl text-black font-semibold">12</h1>
              <div class="flex justify-center items-center">
                <h6 class=" text-green-600 text-[15px]">~0%</h6>
                <div class="flex flex-col px-3 text-[14px]">
                  <span>vs last</span>
                  <span>month</span>
                </div>
              </div>
            </div>
            <div class="flex justify-center items-center h-full pr-6 text-3xl">
              🏖️
            </div>
          </div>
        </div>
        <div class="py-3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <div class="flex flex-col border px-4 py-2 rounded-md ">
            <div class="flex justify-between w-full items-center">
              <div class="flex flex-col justify-center items-center">
                <p class="text-[26px] font-bold"><span class="mr-1">✔️</span>Recent Tasks</p>
                <p>Your Latest task updates</p>
              </div>
              <button class="  text-[13px] hover:bg-gray-100 border-gray-800 text-black font-semibold border px-4 py-2">
                View All
              </button>
            </div>
            <div class="flex w-full border rounded-md mt-3 px-4 py-3 items-center justify-between">
              <div class="flex flex-col">
                <p class="text-[15px] font-semibold text-black">Design Homepage Mockups</p>
                <div class="flex gap-x-5 my-2">
                  <div class="flex bg-blue-200 px-3 py-[2px] rounded-full text-blue-950 text-[13px] font-semibold">
                    In Progress
                  </div>
                  <div class="flex bg-red-200 border-orange-900 px-3 py-[2px] rounded-full text-orange-900 text-[13px] font-semibold">
                    High
                  </div>  
                </div>
              </div>
              <div class=" text-[13px] font-semibold">Due 24/01/2025</div>
            </div>
            <div class="flex w-full border rounded-md my-3 px-4 py-3 items-center justify-between">
              <div class="flex flex-col">
                <p class="text-[15px] font-semibold text-black">Setup Development Environment</p>
                <div class="flex gap-x-5 my-2">
                  <div class="flex bg-green-200 px-3 py-[2px] rounded-full text-green-950 text-[13px] font-semibold">
                    Done
                  </div>
                  <div class="flex bg-yellow-200 border-orange-900 px-3 py-[2px] rounded-full text-orange-900 text-[13px] font-semibold">
                    Medium
                  </div>  
                </div>
              </div>
              <div class=" text-[13px] font-semibold">Due 17/01/2025</div>
            </div>
          </div>
          <div class="flex flex-col border px-4 py-2 rounded-md ">
            <div class="flex justify-between w-full items-center">
              <div class="flex flex-col justify-center items-center">
                <div class="text-[26px] font-bold flex justify-center items-center"><img class="h-5 w-4 mr-2" src="./My Icons/522561.png" alt="">Active Projects</div>
                <p>Your Latest task updates</p>
              </div>
              <button class="  text-[13px] hover:bg-gray-100 border-gray-800 text-black font-semibold border px-4 py-2">
                View All
              </button>
            </div>
            <div class="flex flex-col w-full border rounded-md mt-3 px-4 py-3 items-center justify-between">
              <div class="flex w-full justify-between items-center py-2">
                <div class=" text-black font-semibold">Website Redesign</div>
                <div class="text-[13px] font-semibold bg-blue-200 text-blue-900 rounded-full px-3 py-[2px]">In Progress</div>
              </div>
              <div class="flex mt-2 w-full text-black justify-between items-center">
                <p>Progress</p>
                <div>65%</div>
              </div>
              <div class="w-full h-4 bg-gray-200 my-3 rounded-full overflow-hidden">
                <div class="bg-black h-4 rounded-l-full w-2/3">
                </div>
              </div>
              <div class="text-[15px] w-full flex">Due 14/03/2024</div>
            </div>

          </div>

        </div>
        <div class="flex w-full border rounded-md px-6 py-5 justify-center flex-col space-y-4 shadow-sm">
          <div class="flex w-full flex-col items-start">
            <h1 class="text-[25px] font-bold">Quick Actions</h1>
            <h2 class="text-[15px] my-2">Common tasks and shortcuts</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <button @click="$router.push('/projects')" class="flex hover:bg-gray-200 hover:border-gray-400  w-full space-y-2 py-3 justify-center items-center flex-col border-gray-400">
            <img class="w-7" src="./My Icons/522561.png" alt="">
            <p class="text-black font-semibold">New Project</p>
          </button>
          <button @click="$router.push('/tasks')" class="flex hover:bg-gray-200 hover:border-gray-400  w-full space-y-2 py-3 justify-center items-center flex-col border-gray-400">
            <img class="w-7" src="./My Icons/8625364.png" alt="">
            <p class="text-black font-semibold">Add Task</p>
          </button>
          <button @click="$router.push('/companyfeed')" class="flex hover:bg-gray-200 hover:border-gray-400  w-full space-y-2 py-3 justify-center items-center flex-col border-gray-400">
            <img class="w-7" src="./My Icons/9308008.png" alt="">
            <p class="text-black font-semibold">Company Feed</p>
          </button>
          <button @click="$router.push('/profile')" class="flex hover:bg-gray-200 hover:border-gray-400 w-full space-y-2 py-3 justify-center items-center flex-col border-gray-400">
            <img class="w-7" src="./My Icons/747376.png" alt="">
            <p class="text-black font-semibold">My Profile</p>
          </button>
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