import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('date',(value,foramt='YYYY-MM-DD HH:mm:ss')=>{
    return dayjs(value).format(foramt)
})