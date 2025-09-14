<template>
  <div class="flex h-screen fixed w-screen top-0 left-0 ">
    <Sidebar />
    <div class="flex flex-1 flex-col">
      <Topbar />
      <div class="flex flex-1 flex-col py-9 px-4 items-start overflow-y-auto">
        <div class="flex sm:justify-between w-full items-center flex-col justify-center sm:flex-row space-y-4 ">
          <div class="flex flex-col items-center sm:items-start justify-center">
            <div class="flex text-2xl font-bold ">
              <img class=" h-8" src="./My Icons/1435716.png" alt="">
              <div class="px-3">Employee Recognotion</div>
            </div>
            <span class="pt-1">
              Celeberate and recognise outstanding team members
            </span>
          </div>
          <button class="flex h-10 border bg-black text-white px-6 hover:bg-[#373737] hover:border-none justify-center items-center">+ Nominate Someone</button>
        </div>
        <div class="grid w-full my-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div class="flex flex-col w-full border p-4 rounded-md">
            <div class="flex w-full justify-between items-start">
              <span class="text-[14px] font-semibold">Total Recognitions</span>
              <img class="h-5" src="./My Icons/1435716.png" alt="">
            </div>
            <div class="flex w-full mt-4 text-[25px] font-bold">4</div>
          </div>
          <div class="flex flex-col w-full border p-4 rounded-md">
            <div class="flex w-full justify-between items-start">
              <span class="text-[14px] font-semibold">This Month</span>
              <img class="h-5" src="./My Icons/1828970.png" alt="">
            </div>
            <div class="flex w-full mt-4 text-[25px] font-bold">2</div>
          </div>
          <div class="flex flex-col w-full border p-4 rounded-md">
            <div class="flex w-full justify-between items-start">
              <span class="text-[14px] font-semibold">Winners</span>
              <img class="h-5" src="./My Icons/263056.png" alt="">
            </div>
            <div class="flex w-full mt-4 text-[25px] font-bold">2</div>
          </div>
          <div class="flex flex-col w-full border p-4 rounded-md">
            <div class="flex w-full justify-between items-start">
              <span class="text-[14px] font-semibold">Active Nominations</span>
              <img class="h-5" src="./My Icons/9308008.png" alt="">
            </div>
            <div class="flex w-full mt-4 text-[25px] font-bold">5</div>
          </div>
        </div>
        <div class="flex bg-red-50 w-full p-4 border border-orange-200 rounded-md flex-col items-start">
          <div class="flex items-start justify-center flex-col">
            <div class="flex w-full font-semibold items-center "><img class="h-5" src="./My Icons/263056.png" alt=""><span class="text-[17px] px-2 text-orange-800">January 2024 - Vote for Employee of the Month</span></div>
            <p class="text-green-700 py-3">Vote for the nominees who deserve recognition this month. <span class="text-[red]">Voting ends on January 31st.</span></p>
          </div>
          <div class="grid grid-cols-1 flex-col space-y-3 sm:space-y-0 sm:grid-cols-2 sm:gap-3 w-full">
            <div class="flex border-gray-200 bg-white  p-4 rounded-md border flex-col items-start">
              <div class="flex justify-between w-full items-start">
                <div class="flex space-x-3 h-full">
                  <div class="flex bg-gray-200 text-[14px] mt-1 w-10 h-10 items-center justify-center rounded-full font-semibold">
                  JC
                  </div>
                  <div class="flex flex-col">
                    <div class="flex text-black text-[14px] font-semibold">
                      Jones CEO
                    </div>
                    <div class="flex bg-blue-200 rounded-full items-center justify-center px-2"><img class="h-3" src="./My Icons/10302656.png" alt=""><span class="text-blue-800 px-1 mb-[2px]">Innovation</span></div>
                  </div>
                </div>
                <div class="flex bg-black text-white items-center justify-center h-9 px-1 rounded-md">🤍<span class="px-1">2</span></div>
              </div>
              <div class="flex text-left text-[16px]  mt-4 w-full">Jones proposed and implemented a new automated testing framework that reduced our deployment time time 50%. His innovative...</div>
              <div class="w-full flex text-left mt-3 text-black">
                Nominated by Sarah Johnson
              </div>
            </div>
            <div class="flex border-gray-200 bg-white  p-4 rounded-md border flex-col items-start">
              <div class="flex justify-between w-full items-start">
                <div class="flex space-x-3 h-full">
                  <div class="flex bg-gray-200 text-[14px] mt-1 w-10 h-10 items-center justify-center rounded-full font-semibold">
                    AD
                  </div>
                  <div class="flex flex-col">
                    <div class="flex text-black text-[14px] font-semibold">
                      Alice Developer
                    </div>
                    <div class="flex bg-green-100 rounded-full items-center justify-center px-2"><img class="h-3" src="./My Icons/10302656.png" alt=""><span class="text-green-900 px-1 mb-[2px]">Innovation</span></div>
                  </div>
                </div>
                <div class="flex bg-black text-white items-center justify-center h-9 px-1 rounded-md">🤍<span class="px-1">2</span></div>
              </div>
              <div class="flex text-left text-[16px]  mt-4 w-full">Alice proposed and implemented a new automated testing framework that reduced our deployment time time 50%. His innovative...</div>
              <div class="w-full flex text-left mt-3 text-black">
                Nominated by Johnson Smith
              </div>
            </div>
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
                <option value="">All Categories</option>
              </select>
            </div>
            <div class="flex w-[47%] items-center justify-between relative ">
              <select class="w-full border h-10 rounded-md" name="" id="">
                <option value="">All Status</option>
              </select>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-full border rounded-md p-4">
          <div class="flex flex-col items-start w-full">
            <p class="text-[25px] font-semibold text-black">Recognition History</p>
            <p>All employee recognitios and awards</p>
          </div>
          <div class="p-3 my-3 flex rounded-md border">
            <div class="flex justify-center items-start pr-2">
              <div class="w-9 flex rounded-full bg-gray-200 h-9 items-center justify-center">SJ</div>
            </div>
            <div class="flex flex-1 flex-col">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div class="text-[14px] font-semibold text-black">Sarah Johnson</div>
                  <div class="flex bg-yellow-200 text-[13px] rounded-full text-yellow-800 items-center justify-center px-1 py-[1px]"><img class="h-2 mr-1" src="./My Icons/263056.png" alt="">Winner</div>
                  <div class="flex bg-indigo-200 text-[13px] rounded-full text-indigo-800 items-center justify-center px-1 py-[1px]"><img class="h-2 mr-1" src="./My Icons/1828970.png" alt="">Excellent</div>
                </div>
                <div>January 2024</div>
              </div>
              <div class="text-left w-full flex mt-3 text-[15px]">
                Sarah consistently delivers high-quality work and goes above and beyond to help team members. Her dedication excellence is truly inspiring.
              </div>
              <div class="flex justify-between items-center w-full">
                <div class="flex text-left text-black mt-4">Nominated by John Smith</div>
                <button class="flex items-center justify-end w-[60px] px-1 border-none hover:border-none">❤️3</button>
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
  components: {
    Sidebar, Topbar
  }
}
</script>