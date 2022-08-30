<template>
<div>
    <slot name="default" :next="next" :previous="previous" :calendar="calendar">
        <slot name="head" :next="next" :previous="previous" :calendar="calendar">
        </slot> 
        <slot name="body" :next="next" :previous="previous" :days="calendar.days()">
            <div v-for="day in calendar.days()">
                <slot name="day" :day="day">
                </slot>
            </div>
        </slot>
    </slot>
</div>
</template>

<script lang="ts" setup>
import { defineEmits, ref } from 'vue';
import { DayCalendar } from 'ts-headless-calendar/lib'
import { useVModel } from '@vueuse/core'
const props = defineProps({
    year: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    day: {
        type: Number,
        required: true
    }
})

const emit = defineEmits(['update:year','update:month', 'update:day', 'next-clicked', 'previous-clicked']);

const year = useVModel(props, 'year', emit);
const month = useVModel(props, 'month', emit);
const day = useVModel(props, 'day', emit);

const calendar = ref(new DayCalendar(year.value, month.value, day.value));
console.log(calendar.value.date())


function next() {
    calendar.value = calendar.value.next();
    console.log(calendar.value.dayNumber());
    day.value = calendar.value.dayNumber();
    year.value = calendar.value.yearNumber();
    month.value = calendar.value.monthNumber();
    emit('next-clicked', calendar.value)
}
function previous() {
    calendar.value = calendar.value.previous();
    day.value = calendar.value.dayNumber();
    year.value = calendar.value.yearNumber();
    month.value = calendar.value.monthNumber();
    emit('previous-clicked', calendar.value);
}



</script>