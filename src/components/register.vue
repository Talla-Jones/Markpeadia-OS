<template>
  <div class=" overflow-y-auto items-center top-0 left-0 bg-blue-50 flex fixed h-screen w-full justify-center py-5">
    <form @submit.prevent class="bg-white px-6 border border-gray-300 shadow-xl  sm:w-[500px] flex flex-col items-center mt-[100px] rounded-[10px] pb-5">
      <div class=" bg-slate-50 mt-7 mb-3 rounded-full w-[53px] h-[53px] flex justify-center items-center">
        <img class="w-[32px]" src="./My Icons/4982864.png" alt="">
      </div>
      <div class=" flex flex-col mb-7 justify-center items-center">
        <div class=" font-bold text-[24.5px]">Welcome to Markpedia OS</div>
        <div class=" text-[14.8px] text-gray-500 ">Create an account to join Markpedia OS</div>
      </div>
      <div class="flex justify-between mb-3 w-full">
        <div class="flex w-[47%] space-y-2 items-start flex-col">
          <label class="text-sm font-semibold" for="First Name">First Name</label>
          <input v-model="userFirstName" required class="border w-[100%] text-[14px] px-3 h-9 rounded-md placeholder-gray-500" placeholder="Enter your First Name" type="text">
        </div>
        <div class="flex w-[47%] items-start space-y-2 flex-col">
          <label class=" text-sm font-semibold" for="Last Name">Last Name</label>
          <input v-model="userLastName" required class="border w-[100%] px-3 text-[14px] h-9 rounded-md placeholder-gray-500" placeholder="Enter your Last Name" type="text">
        </div>
      </div>
      <div class="flex mb-3 w-full items-start space-y-2 flex-col">
        <label class=" text-sm font-semibold" for="Email">Email</label>
        <input v-model="userEmail" class="border w-[100%] px-3 text-[14px] h-9 rounded-md  placeholder-gray-500" placeholder="Enter your Email Address" type="email" required>
      </div> 
      <div class="flex w-full mb-3 items-start space-y-2 flex-col">
        <label class=" text-sm font-semibold" for="Email">Role</label>
        <select required v-model="userRole" class="border px-2 w-full py-1 h-9 rounded-md">
          <option value="" disabled selected hidden>Select your role</option>
          <option value="ceo">CEO</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="employee">Employee</option>
        </select>
      </div>
      <div class="flex justify-between mb-3 w-full">
        <div class="flex w-[47%] space-y-2 items-start flex-col">
          <label class="text-sm font-semibold" for="First Name">Department</label>
          <input v-model="userDepartment" required class="border placeholder-gray-500 w-[100%] text-[14px] px-3 h-9 rounded-md" placeholder="Technology" type="text">
        </div>
        <div class="flex w-[47%] items-start space-y-2 flex-col">
          <label class=" text-sm font-semibold" for="Last Name">Position</label>
          <input v-model="userPosition" required class="border  placeholder-gray-500 w-[100%] px-3 text-[14px] h-9 rounded-md" placeholder="Software Engineer" type="text">
        </div>
      </div>
      <div class="flex relative mb-3 w-full items-start space-y-2 flex-col">
        <label class=" text-sm font-semibold" for="Email">Password</label>
        <input :type="[passwordProps.passIsVisible ? 'text' : 'password']" v-model="userPassword" required class="border placeholder-gray-500 w-[100%] px-3 text-[14px] h-9 rounded-md" placeholder="Create a password" type="password">
        <p v-if="bools.isVisible" class="text-[13px] text-[red]">Password must be 6 characters or above!!</p>
        <p v-if="bools.isVisible2" class="text-[13px] text-[red]">Passwords don't match</p>
        <div v-if="passwordProps.elementIsVisible" @click="passwordProps.passIsVisible=true, passwordProps.elementIsVisible = false" class="flex absolute top-7 right-3"><img class="h-5" src="./My Icons/709612.png" alt=""></div>
        <div  @click="passwordProps.passIsVisible=false, passwordProps.elementIsVisible=true"  v-if="passwordProps.passIsVisible" class="flex absolute top-7 right-3"><img class="h-5" src="./My Icons/2767146.png" alt=""></div>
      </div>
      <div class="flex relative mb-5 w-full items-start space-y-2 flex-col">
        <label class=" text-sm font-semibold" for="Email">Confirm Password</label>
        <input :type="[passwordProps.passIsVisible1 ? 'text' : 'password']" v-model="newPassword" required class="border w-[100%] px-3 text-[14px] h-9 rounded-md  placeholder-gray-500" placeholder="Confirm your password" type="password">
        <div v-if="passwordProps.elementIsVisible1" @click="passwordProps.passIsVisible1=true, passwordProps.elementIsVisible1 = false" class="flex absolute top-7 right-3"><img class="h-5" src="./My Icons/709612.png" alt=""></div>
        <div  @click="passwordProps.passIsVisible1=false, passwordProps.elementIsVisible1=true"  v-if="passwordProps.passIsVisible1" class="flex absolute top-7 right-3"><img class="h-5" src="./My Icons/2767146.png" alt=""></div>
      </div> 
      <button @click="parameterCheck" type="submit" class="flex justify-center items-center text-sm bg-black border-none font-semibold hover:bg-gray-700 hover:border-none text-white w-full h-9">Sign Up</button>
      <div class=" flex justify-end w-full mt-3 text-sm px-2">Already have an account? 
        <span>
        <a @click="$router.push('/')" class="hover:underline hover:text-gray-900 px-1 active:text-black" href="">Sign In</a>
        </span>
      </div>  
    </form>
  </div>
</template>
<script setup></script>

<script>

import { ref } from 'vue';

export default {
  name: 'App',
  data(){
    return {
      userFirstName : ref(''),
      userLastName : ref(''),
      userEmail : ref(''),
      userRole : ref(''),
      userDepartment : ref(''),
      userPosition : ref(''),
      userPassword : ref(''),
      newPassword : ref(''),

      bools: {
        isVisible: false,
        isVisible2: false
      },

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
      if(this.userPassword === this.newPassword && this.userPassword.length >= 6 && this.userDepartment.length > 0 && this.userPosition.length > 0 && this.userFirstName.length > 0 && this.userRole.length > 0 && this.userLastName.length>0 && this.userEmail.includes('@')){
        this.$router.push('/dashboard')
      }
      else if(this.userPassword.length < 6){
        this.bools.isVisible = true
      }
      else if(this.userPassword !== this.newPassword){
        this.bools.isVisible2 = true
      }
    }
  }
}
</script>