<template>
<div>
    <slot name="default" :next="next" :previous="previous" :calendar="calendar">
        <slot name="head" :next="next" :previous="previous" :calendar="calendar">
        </slot> 
        <slot name="body" :next="next" :previous="previous" :months="calendar.months()">
            <div v-for="month in calendar.months()">
                <slot name="month" :month="month">
                </slot>
            </div>
        </slot>
    </slot>
</div>
</template>

<script lang="ts" setup>
import { computed, defineEmits } from 'vue';
import { YearCalendar } from 'ts-headless-calendar/lib'
import { useVModel } from '@vueuse/core'
const props = defineProps({
    year: {
        type: Number,
        required: true
    }
})

const emit = defineEmits(['update', 'next-clicked', 'previous-clicked']);

const year = useVModel(props, 'year', emit);

const calendar = computed(() => {
    return new YearCalendar(year.value);
})


function next() {
    year.value++;
    emit('next-clicked')
}
function previous() {
    year.value--;
    emit('previous-clicked')
}


</script>