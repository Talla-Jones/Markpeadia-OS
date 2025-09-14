<template>
  <div class="flex h-screen fixed w-screen top-0 left-0 ">
    <Sidebar />
    <div class="flex flex-1 flex-col">
      <Topbar />
      <div class="flex flex-1 flex-col py-9 px-7 md:px-10 lg:px-[100px] xl:px-[150px] 2xl:px-[200px] items-start overflow-y-auto">
        <div class="flex w-full items-center flex-col justify-center sm:flex-row space-y-4 ">
          <div class="flex flex-col items-center sm:items-start justify-center">
            <div class="flex text-2xl items-center font-bold ">
              <img class=" h-6" src="./My Icons/739286.png" alt="">
              <div class="px-3">Company Feed</div>
            </div>
            <span class="pt-1">
              Share updates and connect with your team
            </span>
          </div>
        </div>
        <div class="flex flex-col w-full border my-4 p-4 rounded-md">
          <div class="flex w-full justify-start text-[18px] mb-4 text-black font-semibold">What's on your mind?</div>
          <div class="flex items-start justify-between">
            <div class="flex pt-1 items-start h-full">
              <div class="flex bg-gray-200 text-black items-center justify-center rounded-full h-8 w-8 font-bold">JC</div>
            </div>
            <div class="flex flex-col flex-1 ml-2">
              <textarea placeholder="Share something with your team..." name="message" class="border p-4 rounded-md" id=""></textarea>
              <div class="flex justify-between items-center py-3">
                <div class="flex mt-2 justify-center items-center">
                  <button class="pl-3 flex hover:border-none border-none justify-center items-center">
                    <img src="./My Icons/2907776.png" class="h-4" alt="">
                    <span class="px-1 text-gray-500 ">Photo</span>
                  </button>
                  <button class="pl-3 flex hover:border-none border-none justify-center items-center">
                    <img src="./My Icons/4989500.png" class="h-4" alt="">
                    <span class="px-1 text-gray-500 ">Emoji</span>
                  </button>
                </div>
                <button class="flex bg-black text-white px-4 py-1 hover:bg-gray-800 hover:border-none border-none">Post</button>
              </div>
            </div>
          </div>   
        </div>
        <div class="grid w-full my-4 grid-cols-1 gap-3">
          <div class="flex flex-col w-full shadow-inner border p-4 rounded-md">
            <div class=" flex justify-between items-center">
              <div class="flex items-center justify-center">
                <div class="flex justify-center items-center bg-gray-200 h-8 w-8 rounded-full text-black font-bold">JS</div>
                <div class="flex px-2 flex-col items-start">
                  <p class="text-black font-semibold">John Smith</p>
                  <p class=" text-[15px] text-gray-500">65d ago</p>
                </div>
              </div>
              <div class="flex font-bold">...</div>
            </div>
            <p class="text-left my-3 text-[15px]">
              Excited to announce that we've succesfully finished our end of year project!!
            </p>
            <hr>
            <div class="flex w-full justify-start my-3 px-3 space-x-6 items-center">
              <div class="flex items-center justify-center gap-x-1"><img src="./My Icons/1077035.png" class="h-4" alt=""><span>0 Likes</span></div>
              <div @click="isVisible = !isVisible" class="flex hover:cursor-pointer items-center justify-center gap-x-1"><img src="./My Icons/18966103.png" class="h-4" alt=""><span>1 Comment</span></div>
              <div class="flex items-center justify-center gap-x-1"><img src="./My Icons/2983788.png" class="h-4" alt=""><span>Share</span></div>
            </div>
            <hr>
            <div v-if="isVisible" class="flex items-start mt-2">
              <div class=" flex pr-2">
                <div class="h-8 w-8 flex items-center justify-center font-bold text-black rounded-full bg-gray-200">SJ</div>
              </div>
              <div class="flex flex-col flex-1 justify-start">
                <div class="flex py-3 px-4 bg-gray-200 w-full items-start rounded-md flex-col">
                  <p class=" text-black font-semibold mb-1">Sara John</p>
                  <p class="text-[15px] text-left">Congrats to the whole team! this is amazing news</p>
                </div>
                <div class="flex w-full justify-start items-center text-[13px] mt-4">
                  <span class=" text-black px-1">❤️1</span><span class="px-3">50d ago</span>
                </div>
              </div>
            </div>
            <div class="flex justify-start items-center w-full mt-2">
              <div class=" flex pr-2">
                <div class="h-8 w-8 flex items-center justify-center font-bold text-black rounded-full bg-gray-200">JC</div>
              </div>
              <input placeholder="Write a comment.." class="h-8 px-4 flex flex-1 rounded-md border placeholder:text-[15px]" type="text">
            </div>
          </div>
          <div class="flex flex-col w-full shadow-inner border p-4 rounded-md">
            <div class=" flex justify-between items-center">
              <div class="flex items-center justify-center">
                <div class="flex justify-center items-center bg-gray-200 h-8 w-8 rounded-full text-black font-bold">JS</div>
                <div class="flex px-2 flex-col items-start">
                  <p class="text-black font-semibold">John Smith</p>
                  <p class=" text-[15px] text-gray-500">65d ago</p>
                </div>
              </div>
              <div class="flex font-bold">...</div>
            </div>
            <p class="text-left my-3 text-[15px]">
              Coffee break poll: What's your favourite production tool?
            </p>
            <p class="text-left text-[15px]">Poll</p>
            <div class=" grid grid-cols-1 w-full gap-y-3 py-1">
              <div class=" flex w-full bg-gray-200 border rounded-md h-7">
                <div class="flex w-full bg-blue-700 rounded-md h-7 text-[13px] items-center justify-between px-3 text-white">
                  <div>Notion</div>
                  <div>100%</div>
                </div>
              </div>
              <div class=" flex w-full items-center justify-between border rounded-md h-7">
                <div class="flex w-1/3 bg-gray-700 rounded-l-md h-7 text-[13px] items-center text-white justify-between px-3">
                  <div>Todolist</div>
                </div>
                <div class="text-[13px] pr-3 text-black">33%</div>
              </div>
              <p class="text-[14px] font-semibold text-[green] flex w-full ">3 votes:</p>
              <hr>
              <div class="flex w-full justify-start my-3 px-3 space-x-6 items-center">
                <div class="flex items-center justify-center gap-x-1"><img src="./My Icons/1077035.png" class="h-4" alt=""><span>0 Likes</span></div>
                <div @click="isVisible2 = !isVisible2" class="flex hover:cursor-pointer items-center justify-center gap-x-1"><img src="./My Icons/18966103.png" class="h-4" alt=""><span>1 Comment</span></div>
                <div class="flex items-center justify-center gap-x-1"><img src="./My Icons/2983788.png" class="h-4" alt=""><span>Share</span></div>
              </div>
              <hr>
              <div v-if="isVisible2" class="flex items-start mt-2">
                <div class=" flex pr-2">
                  <div class="h-8 w-8 flex items-center justify-center font-bold text-black rounded-full bg-gray-200">SJ</div>
                </div>
                <div class="flex flex-col flex-1 justify-start">
                  <div class="flex py-3 px-4 bg-gray-200 w-full items-start rounded-md flex-col">
                    <p class=" text-black font-semibold mb-1">Sara John</p>
                    <p class="text-[15px] text-left">Congrats to the whole team! this is amazing news</p>
                  </div>
                  <div class="flex w-full justify-start items-center text-[13px] mt-4">
                    <span class=" text-black px-1">❤️1</span><span class="px-3">50d ago</span>
                  </div>
                </div>
              </div>
              <div class="flex justify-start items-center w-full mt-2">
                <div class=" flex pr-2">
                  <div class="h-8 w-8 flex items-center justify-center font-bold text-black rounded-full bg-gray-200">JC</div>
                </div>
                <input placeholder="Write a comment.." class="h-8 px-4 flex flex-1 rounded-md border placeholder:text-[15px]" type="text">
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
  },
  data(){
    return {
      isVisible: false, isVisible2: false
    }
  }
}
</script>