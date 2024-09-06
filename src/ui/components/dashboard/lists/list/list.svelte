<script lang="ts">
  // import { onMount, onDestroy } from "svelte";
  import { List } from "./list";
  let list: List = new List();

  $: items = list.items;
  export const update = (data: any) => {
    items = list.updateList(data);
  };
  export let selected;

  // onMount(() => {});
  // onDestroy(() => {});
</script>

<div class="header">
  <button class="sta" on:click={() => list.startNew()}></button>
  <button class="exp" on:click={() => list.expandeAll()}></button>
  <div class="tit">{list.locale.title}</div>
  <div class="tag">{list.locale.tags}</div>
  <div class="dur">{list.locale.duration}</div>
  <div class="per">{list.locale.percentage}</div>
</div>
<div class="content">
  {#each items as record}
    <div
      class="item"
      role="button"
      tabindex="-1"
      on:click={() => (selected = list.openItem(record))}
      on:keydown={(e) => {}}
    >
      <button class="sta" on:click={() => list.continueItem(record)}></button>
      <button class="exp" on:click={() => list.expandeItem(record)}></button>
      <div class="tit">{record.title}</div>
      <div class="tag">{record.tags}</div>
      <div
        class="dur"
        role="button"
        tabindex="-1"
        on:click={() => (selected = list.changeTime(record))}
        on:keydown={(e) => {}}
      >
        {record.duration}
      </div>
      <div class="per">{record.percentage}%</div>
    </div>
  {/each}
</div>

<style lang="scss">
  @import "./list";
</style>
