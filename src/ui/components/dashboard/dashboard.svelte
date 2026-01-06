<script lang="ts">
  import { Dashboard } from "./dashboard";
  const ds = new Dashboard();

  import Bar from "./charts/bar/bar.svelte";
  new Bar({ target: document.body });

  import List from "./lists/list/list.svelte";
  new List({ target: document.body });

  import Donat from "./charts/donat/donat.svelte";
  new Donat({ target: document.body });

  import Detail from "./lists/detail/detail.svelte";
  new Detail({ target: document.body });
</script>

<div class="dashboard-section">
  <h3 class="header">
    <span class="title">{ds.title}</span>
    <span class="divider">•</span>
    <span class="total-time">{ds.totalTime}</span>
  </h3>

  <div class="charts">
    <div class="bar">
      <Bar bind:update={ds.updateBar} />
    </div>
    <div class="donat">
      <Donat bind:update={ds.updateDonat} />
    </div>
  </div>
  <div class="projects">
    <div class="lists">
      {#if !ds.detail["title"]}
        <div class="list">
          <List bind:update={ds.updateList} bind:selected={ds.detail} />
        </div>
      {:else}
        <div class="detail">
          <Detail />
        </div>
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  @import "./dashboard";
</style>
