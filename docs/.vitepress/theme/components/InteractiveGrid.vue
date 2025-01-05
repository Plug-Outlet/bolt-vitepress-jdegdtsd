<script setup lang="ts">
defineProps<{
  columns?: number
}>()
</script>

<template>
  <div class="interactive-grid" :style="{ '--columns': columns || 3 }">
    <slot></slot>
  </div>
</template>

<style scoped>
.interactive-grid {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
}

@media (max-width: 768px) {
  .interactive-grid {
    grid-template-columns: 1fr;
  }
}
</style>