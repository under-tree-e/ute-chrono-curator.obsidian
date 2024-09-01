<script lang="ts">
  // import { onMount, onDestroy } from "svelte";
  import { Detail } from "./detail";

  let detail: Detail = new Detail();
  $: items = detail.items;
  export const update = (data: any) => {
    items = detail.updateList(data);
  };

  // onMount(() => {});
  // onDestroy(() => {});
</script>

<div class="header">
  <button on:click={() => detail.expandeAll()}></button>
  <div class="label">{detail.locale.comment}</div>
  <div class="label">{detail.locale.tags}</div>
  <div class="label">{detail.locale.duration}</div>
  <div class="label">{detail.locale.time}</div>
</div>
<div class="content">
  222 length: {items.length}
  {#each items as item}
    <div class="item">
      <button on:click={() => detail.expandeItem(item)}></button>
      <div
        class="title"
        role="button"
        tabindex="-1"
        on:click={() => detail.changeComment(item)}
        on:keydown={(e) => {}}
      >
        {item.comment}
      </div>
      <div class="title">{item.tags}</div>
      <div class="title">{item.duration}</div>
      <div
        class="title"
        role="button"
        tabindex="-1"
        on:click={() => detail.changeRange(item)}
        on:keydown={(e) => {}}
      >
        {item.time}%
      </div>
      {#if detail.dialog}
        <div class="dialog-time">111</div>
      {/if}
    </div>
  {/each}
</div>
