<template>
  <div class="h-full top-0 left-0 bg-blue-50 flex fixed justify-center items-center w-full">
    <form @submit.prevent class="bg-white border px-6 py-7 border-gray-300 shadow-xl flex flex-col items-center rounded-md">
        <div class=" bg-slate-50 mt-7 mb-3 rounded-full w-[53px] h-[53px] flex justify-center items-center">
            <img class="w-[32px]" src="./My Icons/4982864.png" alt="">
        </div>
        <div class=" flex flex-col mb-7 justify-center items-center">
            <div class=" font-bold text-[24.5px]">Welcome back</div>
            <div class=" text-[14.8px] text-gray-500 ">Sign in to your Markpedia OS account</div>
        </div>
        <div class="flex space-y-1 mb-2 flex-col w-full items-start">
            <label class=" font-medium text-[15px] left-0" for="">Email</label>
            <input v-model="userEmail" required placeholder="Enter your email" class="border h-10 text-sm px-4 py-3 w-full rounded-md" type="email">
        </div>
        <div class="flex space-y-1 mb-1 flex-col w-full my-2 relative items-start">
            <label class=" font-medium text-[15px] left-0" for="">Password</label>
            <input v-model="userPassword" :type="[passwordProps.passIsVisible1 ? 'text' : 'password']"  required placeholder="Enter your password" class="border w-full rounded-md text-sm px-4 py-3 h-10 text-black" type="password">
            <p v-if="isVisible" class="text-[13px] text-[red]">Password must be 6 characters or above!!</p>
            <div v-if="passwordProps.elementIsVisible1" @click="passwordProps.passIsVisible1=true, passwordProps.elementIsVisible1 = false" class="flex absolute top-8 right-3"><img class="h-5" src="./My Icons/709612.png" alt=""></div>
            <div  @click="passwordProps.passIsVisible1=false, passwordProps.elementIsVisible1=true"  v-if="passwordProps.passIsVisible1" class="flex absolute top-8 right-3"><img class="h-5" src="./My Icons/2767146.png" alt=""></div>
        </div>

        <a class=" w-full text-sm font-normal hover:underline hover:text-gray-900 justify-end flex px-3" href="">
            Forgot your password?
        </a>
        <button type="submit" class="flex bg-black text-white w-full justify-center items-center h-10 mt-9 hover:bg-gray-800 hover:border-none" @click="parameterCheck">Sign In</button>
        <div class="flex mt-4 justify-center items-center text-gray-600">Don't have an account? <span><a @click="$router.push('register')" class=" text-black hover:text-black hover:underline text-sm px-1" href="">Sign Up</a></span></div>

        <div class="flex w-[80%] items-start px-3 py-4 mt-4 rounded-md bg-gray-100 flex-col text-[14px] font-semibold">
            <p class="mb-2">Demo accounts:</p>
            <ol class="flex flex-col items-start text-[12px]">
                <li>CEO: ceo@company.com / password123</li>
                <li>Manager: manager@company.com / password123</li>
                <li>Employee: employee@company.com / password123</li>
            </ol>
        </div>
    </form>
  </div>

</template>

<script>
import router from '../router'
import { ref } from 'vue';

export default {
  name: 'App',
  data(){
    return {
      userEmail : ref(''),
      userPassword : ref(''),
      isVisible: false,
      passwordProps: {
        passIsVisible: false,
        elementIsVisible: true,
        passIsVisible1: false,
        elementIsVisible1: true,
      }
    }
  },
  methods: {
    parameterCheck(){
      if(this.userPassword.length >= 6 &&  this.userEmail.includes('@')){
        this.$router.push('/dashboard')
      }
      else if(this.userPassword.length < 6){
        this.isVisible = true
      }
    }
  }
}
</script>

