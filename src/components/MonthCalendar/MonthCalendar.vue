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
import { MonthCalendar } from 'ts-headless-calendar/lib'
import { useVModel } from '@vueuse/core'
const props = defineProps({
    year: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    }
})

const emit = defineEmits(['update:year', 'update:month', 'next-clicked', 'previous-clicked']);

const year = useVModel(props, 'year', emit);
const month = useVModel(props, 'month', emit);

const calendar = ref(new MonthCalendar(year.value, month.value));

function next() {
    calendar.value = calendar.value.next();
    year.value = calendar.value.yearNumber();
    month.value = calendar.value.monthNumber();
    emit('next-clicked', calendar.value)
}
function previous() {
    calendar.value = calendar.value.previous();
    year.value = calendar.value.yearNumber();
    month.value = calendar.value.monthNumber();
    emit('previous-clicked', calendar.value);
}


</script>