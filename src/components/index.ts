import {DayCalendar, MonthCalendar, MonthCalendarDays, YearCalendar} from'./components'

const plugin = {
  install (Vue: {component: (name: string, component: any)=>void}) {
    Vue.component('DayCalendar', DayCalendar);
    Vue.component('MonthCalendar', MonthCalendar);
    Vue.component('MonthCalendarDays', MonthCalendarDays);
    Vue.component('YearCalendar', YearCalendar);
  }
}

export default plugin