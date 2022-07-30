<template>
 <h1>Hello World</h1>
</template>

<script>
import {ref, shallowRef, computed, watch, nextTick} from 'vue';
import Chart from "chart.js/auto"

const weights = ref([])

const weightChartEl = ref(null)

const weightChart = shallowRef(null)

const weightInput = re(60.0)

const currentWeight = computed(() => {
  return weights.value.sort((a, b) => b.date - a.date)[0] || {weight: 0}
})
</script>

<style>

</style>
