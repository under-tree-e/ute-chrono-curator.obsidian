<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { Bar } from "./bar";
  import { Chart } from "chart.js";

  let canvas: HTMLCanvasElement;
  let bar: Bar;
  export let update;

  onMount(() => {
    bar = new Bar(canvas);
    const chart: Chart = bar.createChart();
    update = (data: any) => bar.updateChart(chart, data);
  });

  onDestroy(() => {
    bar.destroyChart();
  });
</script>

<div class="chart-bar">
  <canvas bind:this={canvas}></canvas>
</div>

<style lang="scss">
  @import "./bar";
</style>
