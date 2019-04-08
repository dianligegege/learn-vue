<template>
    <div>
    </div>
</template>

<script>
import {students, showdata} from './toyou.js'
export default {
    // data() {
    //     return {
    //         student: students,
    //     }
    // },
    mounted() {
        console.log(students);
        showdata();
    },
}
</script>
