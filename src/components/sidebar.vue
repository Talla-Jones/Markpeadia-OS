<template>
  <div v-if="isVisible" class="flex-col flex w-[250px] bg-white absolute h-screen md:static z-10 shadow-2xl md:shadow-none">
    <div class=" flex items-center justify-between  bg-white py-8 h-[60px] border w-[250px]">
      <div class="flex justify-center items-center">
        <img class="h-8" src="./My Icons/4982864.png" alt="">
        <span class=" font-bold text-[18px] pl-2">
          Markpedia OS
        </span>
      </div>
      <button @click="isVisible=false" class="flex w-[33px] h-[33px] justify-center items-center hover:bg-gray-100 border-none">
        <img class="h-3" src="./My Icons/271220.png" alt="">
      </button>
    </div>
    <div class="flex flex-1 overflow-y-hidden hover:overflow-y-scroll 
    flex-col px-2 mb-[60px] border border-t-0">
      <div class="h-[70px] border border-x-0 border-t-0 w-full flex items-center py-9">
        <button @click="$router.push('/dashboard')" :class="[$route.path === '/dashboard' ? 'bg-slate-100' : 'bg-white']" class="flex pl-4 h-10 items-center border-none hover:bg-slate-100 hover:border-none w-full">
          <img src="./My Icons/1828765.png" class="h-[14px]" alt=""><span class="ml-5 text-black font-medium">Dashboard</span>
        </button>
      </div>
      <div class="flex flex-col border border-x-0 border-t-0 h-[159px] py-5 font-medium text-gray-500">
        <div class="flex pl-6 h-10 items-center text-[12px] ">WORK</div>
        <div @click="$router.push('/projects')" :class="[$route.path === '/projects' ? 'bg-slate-100' : 'bg-white']" class="flex hover:bg-slate-100 hover:cursor-pointer w-full h-10 pl-2 py-3 rounded-md items-center">
          <img class="h-4" src="./My Icons/522561.png" alt="">
          <span class=" text-sm pl-3">Projects</span>
        </div>
        <div @click="$router.push('/tasks')" :class="[$route.path === '/tasks' ? 'bg-slate-100' : 'bg-white']" class="flex hover:cursor-pointer hover:bg-slate-100 w-full h-10 pl-2 py-3 rounded-md items-center">
          <img class="h-4" src="./My Icons/17575218172436069244797481521246 (1).png" alt="">
          <span class=" text-sm pl-3">Tasks</span>
        </div>
      </div>
      <div class="flex flex-col border border-x-0 border-t-0 h-[117px] py-5 font-medium text-gray-500">
        <div class="flex pl-6 h-10 items-center text-[12px] ">PEOPLE</div>
        <div @click="$router.push('/leave-request')" :class="[$route.path === '/leave-request' ? 'bg-slate-100' : 'bg-white']" class="flex hover:bg-slate-100 w-full h-10 pl-2 py-3 hover:cursor-pointer rounded-md items-center">
          <img class="h-[16px] w-[14px]" src="./My Icons/3239948.png" alt="">
          <span class=" text-sm pl-3">Leave Requests</span>
        </div>
      </div>
      <div class="flex flex-col border border-x-0 border-t-0 h-[159px] py-5 font-medium text-gray-500">
        <div class="flex pl-6 h-10 items-center text-[12px] ">WORK</div>
        <div class="flex hover:bg-slate-100 w-full h-10 pl-2 py-3 rounded-md items-center">
          <img class="h-4" src="./My Icons/14382061.png" alt="">
          <span class=" text-sm pl-3">Policies</span>
        </div>
        <div class="flex hover:bg-slate-100 w-full h-10 pl-2 py-3 rounded-md items-center">
          <img class="h-4" src="./My Icons/17575218172436069244797481521246 (1).png" alt="">
          <span class=" text-sm pl-3">SOPs</span>
        </div>
      </div>
      <div class="flex flex-col border border-x-0 border-t-0 h-[159px] py-5 font-medium text-gray-500">
        <div class="flex pl-6 h-10 items-center text-[12px] ">COMMUNITY</div>
        <div @click="$router.push('/companyfeed')" :class="[$route.path === '/companyfeed' ? 'bg-slate-100' : 'bg-white']" class="flex hover:bg-slate-100 w-full h-10 pl-2 py-3 rounded-md items-center hover:cursor-pointer">
          <img class="h-4" src="./My Icons/18966103.png" alt="">
          <span class=" text-sm pl-3">Feed</span>
        </div>
        <div @click="$router.push('/recognition')" :class="[$route.path === '/recognition' ? 'bg-slate-100' : 'bg-white']" class="flex hover:bg-slate-100 w-full h-10 pl-2 py-3 rounded-md items-center hover:cursor-pointer">
          <img class="h-4" src="./My Icons/4233584.png" alt="">
          <span class=" text-sm pl-3">Recognition</span>
        </div>
      </div>
      <div class="flex flex-col border border-x-0 border-t-0 h-[159px] py-5 font-medium text-gray-500">
        <div class="flex pl-6 h-10 items-center text-[12px] ">OTHER</div>
        <div @click="$router.push('/time')" :class="[$route.path === '/time' ? 'bg-slate-100' : 'bg-white']" class="flex hover:bg-slate-100 w-full h-10 pl-2 py-3 rounded-md items-center hover:cursor-pointer">
          <img class="h-4" src="./My Icons/522561.png" alt="">
          <span class=" text-sm pl-3">Time</span>
        </div>
      </div>
    </div>
    <div class=" flex items-center pr-[14px] justify-between px-3 bottom-0 bg-white py-8 h-[60px] border w-[250px] absolute">
      <div class="flex justify-center items-center">
        <span class="h-8 w-8 bg-gray-900 rounded-full flex justify-center items-center font-bold text-[#e3e3e3]">JC</span>
        <div class="flex px-3 flex-col items-start">
          <span class="font-semibold">Jones CEO</span>
          <span class="text-sm">CEO</span>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-center items-center h-[67px] border border-x-0 absolute ml-2">
    <button @click="isVisible=true" class="flex  justify-center border-none items-center w-8 h-8 hover:bg-gray-200 active:border-none">
      <img class="h-5" src="./My Icons/2989988.png" alt="">
    </button>
  </div>
</template>
<script>
import {useRouter} from 'vue-router'

const route = useRouter()

import { ref, onMounted } from "vue"

export default {
  name: "Sidebar",
  setup() {
    const isVisible = ref(false)

    // Set default visibility based on screen size
    const checkScreen = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        isVisible.value = true
      } else {
        isVisible.value = false
      }
    }

    const toggleSidebar = () => {
      isVisible.value = !isVisible.value
    }

    onMounted(() => {
      checkScreen()
      window.addEventListener("resize", checkScreen)
    })

    return { isVisible, toggleSidebar }
  }
}
</script>