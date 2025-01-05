<script setup lang="ts">
const props = defineProps<{
  title: string
  icon?: string
  effect?: 'tilt' | 'glitch' | 'hover' | 'pulse'
}>()

const emit = defineEmits(['interact'])

function handleInteraction(e: MouseEvent) {
  if (props.effect === 'tilt') {
    handleTilt(e)
  }
  emit('interact', e)
}

function handleTilt(e: MouseEvent) {
  const card = e.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  
  const rotateX = (y - centerY) / 10
  const rotateY = (centerX - x) / 10
  
  card.style.transform = `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale3d(1.05, 1.05, 1.05)
  `
}

function resetCard(e: MouseEvent) {
  const card = e.currentTarget as HTMLElement
  card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
}
</script>

<template>
  <div 
    class="interactive-card"
    :class="[effect]"
    @mousemove="handleInteraction"
    @mouseleave="resetCard"
  >
    <div class="card-content">
      <span v-if="icon" class="card-icon">{{ icon }}</span>
      <h3>{{ title }}</h3>
      <slot></slot>
    </div>
    <div class="card-effects"></div>
  </div>
</template>

<style scoped>
.interactive-card {
  background: var(--vp-c-bg-soft);
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
}

.card-content {
  position: relative;
  z-index: 1;
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
}

/* Tilt Effect */
.tilt {
  transform: perspective(1000px);
}

/* Glitch Effect */
.glitch::before,
.glitch::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  animation: glitch 2s infinite;
  background: inherit;
  z-index: -1;
}

/* Hover Effect */
.hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Pulse Effect */
.pulse {
  animation: pulse 2s infinite;
}

@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-5px, 5px); }
  40% { transform: translate(-5px, -5px); }
  60% { transform: translate(5px, 5px); }
  80% { transform: translate(5px, -5px); }
  100% { transform: translate(0); }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
</style>