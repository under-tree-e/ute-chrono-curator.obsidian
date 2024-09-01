<script lang="ts">
  // import { onMount, onDestroy } from "svelte";
  import { List } from "./list";
  let list: List = new List();

  $: items = list.items;
  export const update = (data: any) => {
    items = list.updateList(data);
  };

  $: item = list.item;
  export let state;
  state = item;

  export let data;

  // data = null;

  // onMount(() => {});
  // onDestroy(() => {});
</script>

<div class="header">
  <button on:click={() => list.expandeAll()}></button>
  <div class="label">{list.locale.title}</div>
  <div class="label">{list.locale.duration}</div>
  <div class="label">{list.locale.percentage}</div>
</div>
<button on:click={() => (data.state = data.state == "no" ? "yes" : "no")}>
  {data.name || "---"}: {data.state || "==="}
</button>
<div class="content">
  111 length: {items.length}
  item: {item}
  {#each items as record}
    <div
      class="item"
      role="button"
      tabindex="-1"
      on:click={() => (item = list.openItem(record))}
      on:keydown={(e) => {}}
    >
      <!-- on:click={() => (list.item = record)} -->
      <button on:click={() => list.expandeItem(record)}></button>
      <div class="title">{record.title}</div>
      <div class="title">{record.duration}</div>
      <div class="title">{record.percentage}%</div>
    </div>
  {/each}
</div>
