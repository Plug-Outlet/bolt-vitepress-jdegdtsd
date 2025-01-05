<!-- TokenScanner.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { validateToken } from '../utils/tokens'

const emit = defineEmits(['token-found'])
const tokenPreview = ref('')
const isScanning = ref(false)
const scanProgress = ref(0)

const scanForTokens = async () => {
  isScanning.value = true
  scanProgress.value = 0
  tokenPreview.value = ''
  
  // Simulate progressive scanning
  const tokens = [
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    'Bearer ya29.a0AfH6...',
    'connect.sid=s%3A12345...'
  ]
  
  for (let i = 0; i <= 100; i += 10) {
    scanProgress.value = i
    await new Promise(resolve => setTimeout(resolve, 200))
  }
  
  const token = tokens[Math.floor(Math.random() * tokens.length)]
  tokenPreview.value = token
  emit('token-found', token)
  
  isScanning.value = false
  scanProgress.value = 100
}

defineExpose({ scanForTokens })
</script>

<template>
  <div class="scanner-section">
    <div class="section-header">
      <h3>Token Scanner</h3>
      <div class="status-indicator">{{ isScanning ? 'SCANNING' : 'READY' }}</div>
    </div>
    
    <div class="scanner-display" :class="{ scanning: isScanning }">
      <div class="scan-overlay"></div>
      <div class="progress-bar" :style="{ width: `${scanProgress}%` }"></div>
      <div class="token-preview">{{ tokenPreview }}</div>
    </div>
  </div>
</template>

<style scoped>
.scanner-section {
  margin: 1rem 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.section-header h3 {
  margin: 0;
  color: #00ff00;
}

.status-indicator {
  font-family: monospace;
  color: #00ff00;
  animation: blink 1s infinite;
}

.scanner-display {
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
  min-height: 60px;
}

.scanning {
  animation: scanEffect 2s linear infinite;
}

.scan-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    transparent,
    rgba(0, 255, 0, 0.2),
    transparent
  );
  transform: translateY(-100%);
  animation: scanLine 2s linear infinite;
  pointer-events: none;
}

.progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: #00ff00;
  transition: width 0.2s ease;
}

.token-preview {
  font-family: monospace;
  color: #00ff00;
  word-break: break-all;
}

@keyframes scanEffect {
  0% { border-color: rgba(0, 255, 0, 0.3); }
  50% { border-color: rgba(0, 255, 0, 1); }
  100% { border-color: rgba(0, 255, 0, 0.3); }
}

@keyframes scanLine {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>
