<script lang="ts">
  // import { onMount, onDestroy } from "svelte";
  import { List } from "./list";

  let list: List = new List();
  $: items = list.items;
  export const update = (data: any) => {
    items = list.updateList(data);
  };

  export const state = () => {
    return list.item;
  };

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
  length: {items.length}
  {#each items as item}
    <div
      class="item"
      role="button"
      tabindex="-1"
      on:click={() => list.openItem(item)}
      on:keydown={(e) => {}}
    >
      <button on:click={() => list.expandeItem(item)}></button>
      <div class="title">{item.title}</div>
      <div class="title">{item.duration}</div>
      <div class="title">{item.percentage}%</div>
    </div>
  {/each}
</div>
