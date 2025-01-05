<!-- Toast.vue -->
<script setup lang="ts">
const props = defineProps<{
  message: string
  type?: 'success' | 'error' | 'warning' | 'info'
  duration?: number
  animation?: 'slide' | 'fade' | 'bounce' | 'flip' | 'zoom' | 'rotate' | 'glitch'
  id?: number
}>()
</script>

<template>
  <div class="toast" :class="[type, animation]">
    <div class="toast-content">
      <span class="toast-icon">
        {{ type === 'success' ? '✅' : type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️' }}
      </span>
      <span class="toast-message">{{ message }}</span>
    </div>
    <div class="progress-bar"></div>
  </div>
</template>

<style scoped>
.toast {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  pointer-events: auto;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.toast-icon {
  font-size: 1.25rem;
}

.toast-message {
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  line-height: 1.4;
}

.progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: var(--vp-c-brand);
  animation: progress linear forwards;
  animation-duration: inherit;
}

/* Toast Types */
.success { border-color: #22c55e; }
.success .progress-bar { background: #22c55e; }

.error { border-color: #ef4444; }
.error .progress-bar { background: #ef4444; }

.warning { border-color: #f59e0b; }
.warning .progress-bar { background: #f59e0b; }

.info { border-color: #0ea5e9; }
.info .progress-bar { background: #0ea5e9; }

/* Animations */
.slide {
  animation: slideIn 0.3s ease forwards;
}

.fade {
  animation: fadeIn 0.3s ease forwards;
}

.bounce {
  animation: bounceIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}

.flip {
  animation: flipIn 0.5s ease forwards;
}

.zoom {
  animation: zoomIn 0.3s ease forwards;
}

.rotate {
  animation: rotateIn 0.5s ease forwards;
}

.glitch {
  animation: glitchIn 0.3s ease forwards;
}

@keyframes slideIn {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes bounceIn {
  0% { transform: scale(0.3); opacity: 0; }
  50% { transform: scale(1.05); opacity: 0.8; }
  70% { transform: scale(0.9); opacity: 0.9; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes flipIn {
  0% { transform: perspective(400px) rotateX(-90deg); opacity: 0; }
  100% { transform: perspective(400px) rotateX(0); opacity: 1; }
}

@keyframes zoomIn {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes rotateIn {
  from { transform: rotate(-180deg) scale(0); opacity: 0; }
  to { transform: rotate(0) scale(1); opacity: 1; }
}

@keyframes glitchIn {
  0% { clip-path: inset(50% 0 50% 0); opacity: 0; }
  20% { clip-path: inset(20% 0 80% 0); opacity: 0.3; }
  40% { clip-path: inset(80% 0 20% 0); opacity: 0.6; }
  60% { clip-path: inset(10% 0 90% 0); opacity: 0.8; }
  80% { clip-path: inset(90% 0 10% 0); opacity: 0.9; }
  100% { clip-path: inset(0 0 0 0); opacity: 1; }
}

@keyframes progress {
  from { width: 100%; }
  to { width: 0%; }
}
</style>