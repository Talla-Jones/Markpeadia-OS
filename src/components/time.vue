<template>
  <div class="flex h-screen fixed w-screen top-0 left-0 ">
    <Sidebar />
    <div class="flex flex-1 flex-col">
      <Topbar />
      <div class="flex flex-1 flex-col py-9 px-4 items-start overflow-y-auto">
        <div class="flex sm:justify-between w-full items-center flex-col justify-center sm:flex-row space-y-4 ">
          <div class="flex flex-col items-center sm:items-start justify-center">
            <div class="flex text-2xl font-bold ">
              <img class=" h-8" src="./My Icons/3239948.png" alt="">
              <div class="px-3">Time & Calendar</div>
            </div>
            <span class="pt-1 text-gray-500, ">
              Manage company calendar and daily agenda
            </span>
          </div>
          <select class="flex h-10 border px-6 justify-center items-center rounded-md">
            <option selected disabled value="">Month</option>
            <option value="january">January</option>
            <option value="febuary">Febuary</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
          </select>
        </div>
        <div class="grid grid-cols-1 sm:flex w-full sm:justify-between sm:gap-x-3 sm:items-start">
          <div class="flex flex-col w-full border my-5 p-4 rounded-md sm:flex-1">
            <div class="flex justify-between items-center">
              <div class="flex justify-center items-center"><img class="h-5" src="./My Icons/3239948.png" alt=""><span class="px-3 text-[20px] font-semibold">September 2025</span></div>
              <div class="flex space-x-2">
                <button class="flex justify-center items-center border-gray-300 hover:border-gray-400 hover:bg-gray-200 px-[9px] py-2"><img class="h-3" src="./My Icons/271220.png" alt=""></img></button>
                <div class="flex rounded-md justify-center items-center border px-1">Today</div>
                <button class="flex justify-center items-center border-gray-300 hover:border-gray-400 hover:bg-gray-200 px-[7px] py-2"><img class="h-4" src="./My Icons/2989988.png" alt=""></img></button>
              </div>
            </div>
            <div class="grid grid-cols-7 w-full my-5 py-2 ">
              <h1 class="text-[15px] flex pl-3">Sun</h1>
              <h1 class="text-[15px] flex pl-3">Mon</h1>
              <h1 class="text-[15px] flex pl-3">Tue</h1>
              <h1 class="text-[15px] flex pl-3">Wed</h1>
              <h1 class="text-[15px] flex pl-3">Thu</h1>
              <h1 class="text-[15px] flex pl-3">Fri</h1>
              <h1 class="text-[15px] flex pl-3">Sat</h1>
            </div>
            <Calendar />
          </div>
          <div class="flex flex-col w-full items-start sm:w-[230px] p-4 border rounded-md sm:mt-5">
            <div class="flex w-full flex-col justify-center items-start">
              <p class=" text-[20px] font-semibold">Upcoming Events</p>
              <p class="text-[13px] font-semibold text-gray-500">Next 7 Days</p>
            </div>
            <div class="my-4 w-full flex flex-col p-5 py-10 items-center justify-center">
              <img class="h-7" src="./My Icons/3239948.png" alt="">
              <p class="pt-3 text-gray-400">No upcoming events</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from './calendar.vue';
import Sidebar from './sidebar.vue';
import Topbar from './topbar.vue';
export default {
  name: 'App',
  components:{Sidebar, Topbar, Calendar}
}
</script>