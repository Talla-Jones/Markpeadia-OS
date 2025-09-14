<template>
  <div class="flex h-[67px] w-full border border-x-0 px-6 items-center justify-between">
    <div class="flex justify-center items-center w-[50%] relative pl-6">
      <input placeholder="Search projcts, tasks, people..." class="border pl-[45px] h-10 rounded-md w-full" type="search" name="" id="">
      <div class=" absolute left-8">
        <img src="./My Icons/search_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="">
      </div>
    </div>
    <div @click="isVisible2 = !isVisible2" class="flex h-full w-[50%] pl-5 items-center justify-end">
      <div class="flex relative pl-1 h-full w-[50px] md:w-[70px]  items-center ">
        <img class="h-6" src="./My Icons/3602145.png" alt="">
        <div class="bg-red-600 top-2 right-3 md:right-8 h-5 w-5 flex absolute rounded-full justify-center items-center text-white text-[14px]">5</div>
      </div>
      <div class="flex justify-center items-center">
        <span @click="toggleDropdown" class="h-8 w-8 bg-gray-900 rounded-full flex justify-center items-center cursor-pointer font-bold text-[#e3e3e3]">JC</span>
        <div class="flex px-3 flex-col items-start space-y-0">
          <span class="font-semibold pb-0">Jones CEO</span>
          <span class="text-sm pt-0">CEO</span>
        </div>
      </div>
      <div v-if="isVisible" class="flex border flex-col bg-white absolute py-3 rounded-md top-[60px] w-[200px] shadow-2xl right-5 justify-start items-center">
        <div class="flex justify-start items-center px-3 pb-2 font-semibold text-black border w-full border-x-0 border-t-0">My Account</div>
        <div class="flex justify-start items-center px-3 py-2 text-black border w-full border-x-0 border-t-0">
          <img class="h-4" src="./My Icons/747376.png" alt="">
          <span class="pl-1">Profile</span>
        </div>
        <div @click="$router.push('/')" v-cloak class="flex justify-start items-center px-3 py-2 active:text-black border w-full border-x-0 border-y-0 text-red-600">
          <div @click="toggleIcon" v-if="isActive" class="flex items-center cursor-pointer">
            <img class="h-4" src="./My Icons/4043198.png" alt="">
            <span class="pl-1">Logout</span>
          </div>
          <div v-else class="flex items-center cursor-pointer">
            <img class="h-4" src="./My Icons/992680.png" alt=""><span class="pl-1 text-black">Logout</span>
          </div>
        </div>
      </div>
      <div v-if="isVisible2" class="flex absolute border rounded-md bg-white top-[55px] right-[22px] p-2 max-h-[650px] overflow-y-hidden hover:overflow-y-scroll shadow-2xl flex-col w-[450px]">
        <div class="flex p-3  items-center justify-start font-semibold text-black ">Notifications</div>
        
        <div class="flex flex-col w-full space-y-3">
          <div class="flex rounded-md bg-gray-100 p-4 flex-col">
            <p class=" text-black font-semibold text-left">Welcome Markpedia OS!</p>
            <p class=" text-left text-[14px]">
              Welcome Jones! Your business operating system is ready to use.
            </p>
            <p class=" text-right text-[13px] pt-3 font-semibold text-blue-700">06:16:48</p>
          </div>
          <div class="flex rounded-md bg-gray-100 p-4 flex-col">
            <p class=" text-black font-semibold text-left">Welcome Markpedia OS!</p>
            <p class=" text-left text-[14px]">
              Welcome Jones! Your business operating system is ready to use.
            </p>
            <p class=" text-right text-[13px] pt-3 font-semibold text-blue-700">06:16:48</p>
          </div>
          <div class="flex rounded-md bg-gray-100 p-4 flex-col">
            <p class=" text-black font-semibold text-left">Welcome Markpedia OS!</p>
            <p class=" text-left text-[14px]">
              Welcome Jones! Your business operating system is ready to use.
            </p>
            <p class=" text-right text-[13px] pt-3 font-semibold text-blue-700">06:16:48</p>
          </div>
          <div class="flex rounded-md bg-gray-100 p-4 flex-col">
            <p class=" text-black font-semibold text-left">Welcome Markpedia OS!</p>
            <p class=" text-left text-[14px]">
              Welcome Jones! Your business operating system is ready to use.
            </p>
            <p class=" text-right text-[13px] pt-3 font-semibold text-blue-700">06:16:48</p>
          </div>
          <div class="flex rounded-md bg-gray-100 p-4 flex-col">
            <p class=" text-black font-semibold text-left">Welcome Markpedia OS!</p>
            <p class=" text-left text-[14px]">
              Welcome Jones! Your business operating system is ready to use.
            </p>
            <p class=" text-right text-[13px] pt-3 font-semibold text-blue-700">06:16:48</p>
          </div>
          <div class="flex rounded-md bg-gray-100 p-4 flex-col">
            <p class=" text-black font-semibold text-left">Welcome Markpedia OS!</p>
            <p class=" text-left text-[14px]">
              Welcome Jones! Your business operating system is ready to use.
            </p>
            <p class=" text-right text-[13px] pt-3 font-semibold text-blue-700">06:16:48</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'Topbar',
  data(){
    return {
      isActive: true, isVisible: false,
      isVisible2: false,
    }
  },
  methods: {
    toggleIcon(){
      this.isActive = false
    },
    toggleDropdown(){
      this.isVisible = !this.isVisible
    }
  }

}
</script>