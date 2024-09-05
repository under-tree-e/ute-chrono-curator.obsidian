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
  <button on:click={() => list.expandeAll()}></button>
  <div class="label">{list.locale.title}</div>
  <div class="label">{list.locale.duration}</div>
  <div class="label">{list.locale.percentage}</div>
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
      <button on:click={() => list.expandeItem(record)}></button>
      <div class="title">{record.title}</div>
      <div class="title">{record.duration}</div>
      <div class="title">{record.percentage}%</div>
    </div>
  {/each}
</div>

<style lang="scss">
  @import "./list";
</style>
