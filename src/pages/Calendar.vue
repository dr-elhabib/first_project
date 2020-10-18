<template>
  <div class=" m-auto mt-10">
    <h1 class="text-2xl my-2 mb-10 text-center font-bold">Second Tutorial : Vue Calendar </h1>
    <div class=" border border-black p-5 ">
    <section class="mx-2 flex justify-between mb-3 ">
      <h2 class="font-bold">{{currentMonthName}}</h2>
      <h2 class="font-bold">{{currentYear}}</h2>
    </section>
    <section class="flex  ">
      <p class="w-10 h-10 text-center" style="width: 14%;" v-for="day in days" v-bind:key="day">{{day}}</p>
    </section>
    <section class="flex   flex-wrap ">

      <p class="w-10 h-10 text-center" style="width: 14%;" v-for="num in StartInDay()" v-bind:key="num*52"
      > </p>
      <p class="w-10 h-10 text-center" style="width: 14%;" v-for="num in daysInMonth(currentMonth,currentYear)" v-bind:key="num"
         :class="CurrentDateClass(num)">{{num}}</p>
    </section>
    </div>
    <section class="flex my-2 justify-between">
      <button class="border-blue-600 border p-2 text-blue-600 font-bold" @click="Prev">Prev</button>
      <button class="border-blue-600 border p-2 text-blue-600 font-bold" @click="Next" >Next</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      currentMonth:new Date().getMonth(),
      currentYear:new Date().getFullYear(),
      days:["Sun","Mun","Tue","Wed","Thu","Fri","Sat"]
    }
  },
  methods:{
    daysInMonth(month,year){
      //console.log(month);
      return new Date(year,month+1,0).getDate();
    },
    StartInDay(){
      return new Date(this.currentYear,this.currentMonth,1).getDay();
    },
    CurrentDateClass(num){
      const  currentday=new Date(this.currentYear,this.currentMonth,num).toDateString()===new Date().toDateString();
      //console.log(new Date(this.currentYear,this.currentMonth,num).toDateString()+" => "+new Date().toDateString());
      return currentday?"text-blue-600 font-bold":"";
    },
    Prev(){
      if(this.currentMonth===0)
      {
        this.currentMonth=11;
        this.currentYear--;
      }else
        this.currentMonth--;

    },Next(){
      if(this.currentMonth===11){
        this.currentMonth=0;
        this.currentYear++;
      }else {
        this.currentMonth++;
      }

    }
  },
  computed:{
    currentMonthName(){return new Date(this.currentYear,this.currentMonth).toLocaleString("default",{month:"long"})},


  }

}
</script>

<style scoped>

</style>
