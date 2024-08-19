<script lang="ts">
  // export let data;

  import { onMount, onDestroy } from "svelte";
  import { Bar } from "./bar";
  import { Chart } from "chart.js";

  let canvas: HTMLCanvasElement;
  // console.log(101.1);

  let bar: Bar;
  export let update;
  // console.log(101.2);

  onMount(() => {
    bar = new Bar(canvas);
    // bar = new Bar();
    const chart: Chart = bar.createChart();
    update = bar.updateChart(chart);
  });

  // onDestroy(() => {
  //   bar.destroyChart();
  // });
</script>

<div class="chart-bar">
  <!-- BAR -->
  <!-- {#each data as label}
    <li>{label}</li>
  {/each} -->
  <canvas bind:this={canvas}></canvas>
</div>
