<script lang="ts">
  import { Dashboard } from "./dashboard";
  const ds = new Dashboard();

  import Bar from "./charts/bar/bar.svelte";
  console.log(102);

  new Bar({ target: document.body });

  import Donat from "./charts/donat/donat.svelte";
  import List from "./lists/list/list.svelte";
  import Detail from "./lists/detail/detail.svelte";
</script>

<h3 class="header">
  <span class="title">{ds.title}</span>
  <span class="divider">•</span>
  <span class="total-time">{ds.totalTime}</span>
</h3>

<div class="charts">
  <div class="bar">
    <!-- <Bar /> -->
    <Bar bind:update={ds.updateCharts} />
    <!-- <Bar bind:bar.setData()={ds.data} /> -->
  </div>
</div>

<div class="projects">
  <div class="lists">
    <div class="list">
      <!-- <List {...ds.data} /> -->
    </div>
    <div class="detail">
      <!-- <Detail {...ds.selected} /> -->
    </div>
  </div>
  <div class="donat">
    <!-- <Donat {...ds.data} /> -->
  </div>
</div>

<style>
  @import "./dashboard";
</style>
