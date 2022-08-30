<template>
    <slot name="fill-days-before" :days="(preDays as Array<DayCalendar>)">
    </slot>
    <slot name="current-days" :days="(calendar.days() as Array<DayCalendar>)">
    </slot>
    <slot name="fill-days-after" :days="(afterDays as Array<DayCalendar>)">
    </slot>
</template>

<script lang="ts" setup>
import { toRefs, type PropType, ref } from 'vue';
import { computed } from '@vue/reactivity';
import type { DayCalendar } from 'ts-headless-calendar/lib';

const props = defineProps({
    calendar: {
        type: Object,
        required: true
    }
});
const { calendar } = toRefs(props);
const daysToShow = 6 * 7;

const preDaysCount = computed(() => {
    const firstDay = calendar.value.day(1).date().getDay();
    return firstDay - 1 < 0 ? 6 : firstDay - 1;
});

const afterDaysCount = computed(() => {
    if(daysToShow > calendar.value.daysInMonth()){
        return daysToShow - (preDaysCount.value + calendar.value.daysInMonth());
    }
    return 0;
});

const preDays = computed(() => {
    const previousMonth = calendar.value.previous();
    const previousMonthDays = previousMonth.days();
    return previousMonthDays.slice(previousMonthDays.length - preDaysCount.value, previousMonthDays.length);
})

const afterDays = computed(() => {
    const nextMonth = calendar.value.next();
    const nextMonthDays = nextMonth.days();
    return nextMonthDays.slice(0, afterDaysCount.value);
})
</script> 