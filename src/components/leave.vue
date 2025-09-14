<template>
    <div class="flex h-screen fixed w-screen top-0 left-0 ">
      <Sidebar />
      <div class="flex flex-1 flex-col">
        <topbar />
        <div class="flex flex-1 flex-col py-9 px-4 items-start overflow-y-auto">
          <div class="flex sm:justify-between w-full items-center flex-col justify-center sm:flex-row space-y-4 ">
            <div class="flex flex-col items-center sm:items-start justify-center">
              <div class="flex text-2xl font-bold ">
                <img class=" h-8" src="./My Icons/3239948.png" alt="">
                <div class="px-3">Leave Requests</div>
              </div>
              <span>
                Manage employee leave requests and approvals
              </span>
            </div>
            <button class="flex h-10 border bg-black text-white px-6 hover:bg-[#373737] hover:border-none justify-center items-center">+ Request Leave</button>
          </div>
          <div class="grid w-full my-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <div class="flex flex-col w-full border p-4 rounded-md">
              <div class="flex w-full justify-between items-start">
                <span class="text-[14px] font-semibold">Total Requests</span>
                <img class="h-5" src="./My Icons/3239948.png" alt="">
              </div>
              <div class="flex w-full mt-4 text-[25px] font-bold">3</div>
            </div>
            <div class="flex flex-col w-full border p-4 rounded-md">
              <div class="flex w-full justify-between items-start">
                <span class="text-[14px] font-semibold">Pending</span>
                <img class="h-5" src="./My Icons/992700.png" alt="">
              </div>
              <div class="flex w-full mt-4 text-[25px] font-bold">1</div>
            </div>
            <div class="flex flex-col w-full border p-4 rounded-md">
              <div class="flex w-full justify-between items-start">
                <span class="text-[14px] font-semibold">Approved</span>
                <img class="h-5" src="./My Icons/447147.png" alt="">
              </div>
              <div class="flex w-full mt-4 text-[25px] font-bold">1</div>
            </div>
            <div class="flex flex-col w-full border p-4 rounded-md">
              <div class="flex w-full justify-between items-start">
                <span class="text-[14px] font-semibold">Total Days</span>
                <img class="h-5" src="./My Icons/3239948.png" alt="">
              </div>
              <div class="flex w-full mt-4 text-[25px] font-bold">7</div>
            </div>
          </div>
        <div class=" flex-col border my-4 p-4 w-full mb-4 rounded-md flex space-y-3">
          <div class="flex items-center justify-between relative flex-1">
            <input placeholder="Search recognitions..." class=" px-11 h-10 border w-full rounded-md" type="search" name="" id="">
            <img class=" absolute left-2" src="./My Icons/search_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="">
          </div>
          <div class="flex justify-between items-center w-full">
            <div class="flex w-[47%] items-center justify-between relative ">
              <select class="w-full border h-10 rounded-md" name="" id="">
                <option value="">All Status</option>
              </select>
            </div>
            <div class="flex w-[47%] items-center justify-between relative ">
              <select class="w-full border h-10 rounded-md" name="" id="">
                <option value="">All Types</option>
              </select>
            </div>
          </div>
        </div>
          <div class="flex flex-col w-full p-4 border rounded-md ">
            <div class="flex justify-start items-center w-full gap-x-3 mb-4">
              <div class="flex text-[13px] font-semibold bg-red-200 rounded-full text-red-700 px-2 py-[2px]">
                Sick
              </div>
              <div class="flex text-[13px] font-semibold bg-green-200 rounded-full text-green-900 px-2 py-[2px]">
                Approved
              </div>
            </div>
            <div class=" w-full flex justify-start items-center text-black font-semibold">2 days leave request</div>
            <div class=" w-full flex justify-start items-center my-2 text-gray-600 text-[14px]">
              Medical appointmant and recovery
            </div>
            <div class="flex justify-between items-center my-2 w-full">
              <div class="flex flex-col justify-start items-start">
                <p class="text-gray-500 text-[14px] font-semibold">Start Date</p>
                <p class>19/01/2024</p>
              </div>
              <div class="flex flex-col justify-start items-start">
                <p class="text-gray-500 text-[14px] font-semibold">End Date</p>
                <p class>21/01/2024</p>
              </div>
              <div class="flex flex-col justify-start items-start">
                <p class="text-gray-500 text-[14px] font-semibold">Duration</p>
                <p class>2 days</p>
              </div>
              <div class="flex flex-col justify-start items-start">
                <p class="text-gray-500 text-[14px] font-semibold">Requested</p>
                <p class>17/01/2024</p>
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