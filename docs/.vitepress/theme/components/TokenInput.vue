<!-- TokenInput.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { tokenTypes } from '../utils/tokens'

const emit = defineEmits(['token-submitted', 'close'])
const customToken = ref('')
const tokenType = ref('jwt')

const getPlaceholder = () => {
  return tokenTypes[tokenType.value]?.placeholder || ''
}

const submitToken = () => {
  if (!customToken.value) return
  
  let token = customToken.value
  if (tokenType.value === 'bearer' && !token.startsWith('Bearer ')) {
    token = `Bearer ${token}`
  }
  
  emit('token-submitted', token)
  customToken.value = ''
}
</script>

<template>
  <div class="token-input">
    <div class="input-header">
      <h3>Enter Token</h3>
      <button class="close-btn" @click="$emit('close')">×</button>
    </div>
    
    <div class="input-group">
      <select v-model="tokenType" class="cyber-select">
        <option v-for="(type, key) in tokenTypes" :key="key" :value="key">
          {{ type.label }}
        </option>
      </select>
      
      <input 
        v-model="customToken" 
        type="text" 
        class="cyber-input"
        :placeholder="getPlaceholder()"
        @keyup.enter="submitToken"
      >
      
      <button class="cyber-button" @click="submitToken">
        <span class="button-icon">✅</span>
        Submit
      </button>
    </div>
  </div>
</template>

<style scoped>
.token-input {
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  margin: 1rem 0;
}

.input-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.input-header h3 {
  margin: 0;
  color: #00ff00;
}

.close-btn {
  background: none;
  border: none;
  color: #00ff00;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
}

.input-group {
  display: flex;
  gap: 1rem;
}

.cyber-select,
.cyber-input {
  padding: 0.75rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  color: #00ff00;
  font-family: monospace;
}

.cyber-select {
  min-width: 150px;
}

.cyber-input {
  flex: 1;
}

.cyber-select option {
  background: #000;
  color: #00ff00;
}

.cyber-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  color: #00ff00;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cyber-button:hover {
  background: rgba(0, 255, 0, 0.1);
  transform: translateY(-2px);
}
</style>