<script setup lang="ts">
import MonthCalendar from '@/components/MonthCalendar/MonthCalendar.vue'
import { ref } from 'vue';
import DayCalendar from './components/DayCalendar/DayCalendar.vue';
import MonthCalendarDays from './components/MonthCalendar/MonthCalendarDays.vue';
const year = ref(2022);
const month = ref(7);
const day=ref(1);
</script>

<template>

  <main>
    <MonthCalendar v-model:year="year" v-model:month="month">
      <template #default="{ calendar, next, previous }">
        <button @click="next()">next</button>
        <button @click="previous()">previous</button>
        <MonthCalendarDays :calendar="calendar">

        <template #fill-days-before="{ days }">
          <!-- <div v-for="day in days">
            {{day.date()}}
          </div> -->
        </template>
        <template #current-days="{ days }">
          <div v-for="day in days">
            {{day.date()}}
          </div>
        </template>

        <template #fill-days-after="{ days }">
          <!-- <div v-for="day in days">
            {{day.date()}}
          </div> -->
        </template>

      </MonthCalendarDays>
      </template>
    </MonthCalendar>
    <DayCalendar v-model:year="year" v-model:month="month" v-model:day="day">
      <template #default="{ calendar, next, previous }">
        <button @click="next()">Next</button>
        <button @click="previous()">Previous</button>
        <div>
          {{calendar.date()}}
        </div>
        <!-- <div>{{calendar.date().getDay() + '.' +  calendar.date().getMonth() + "." + calendar.date().getFullYear()}}</div> -->

      </template>
    </DayCalendar>
    
  </main>
</template>
<style>
.red {
  color: red;

}</style>