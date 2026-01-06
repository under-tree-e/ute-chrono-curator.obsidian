<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { Donat } from "./donat";
  import { Chart } from "chart.js";

  let canvas: HTMLCanvasElement;
  let donat: Donat;
  export let update;

  onMount(() => {
    donat = new Donat(canvas);
    const chart: Chart = donat.createChart();
    update = (data: any) => donat.updateChart(chart, data);
  });

  onDestroy(() => {
    donat.destroyChart();
  });
</script>

<div class="chart-bar">
  <canvas bind:this={canvas}></canvas>
</div>
