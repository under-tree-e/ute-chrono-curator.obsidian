<script lang="ts">
  export let data: any[] = [];

  import { onMount, onDestroy } from "svelte";
  import { Bar } from "./bar";

  let canvas: HTMLCanvasElement;
  let bar: Bar;

  onMount(() => {
    bar = new Bar(canvas);
    bar.createChart();
  });

  onDestroy(() => {
    bar.destroyChart();
  });
</script>

<div class="chart-bar">
  <!-- BAR -->
  <!-- // not work -->
  {#each data as label}
    <li>{label}</li>
  {/each}
  <canvas bind:this={canvas}></canvas>
</div>
