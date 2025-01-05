<!-- TokenDecoder.vue -->
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  token: string
}>()

const decodedContent = ref('')
const isDecoding = ref(false)

const decodeToken = async () => {
  isDecoding.value = true
  
  // Simulate decoding delay
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Decode based on token type
  if (props.token.startsWith('eyJ')) {
    // JWT token
    decodedContent.value = `{
  "alg": "HS256",
  "typ": "JWT"
}.{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}`
  } else if (props.token.startsWith('Bearer')) {
    // OAuth token
    decodedContent.value = `{
  "access_token": "${props.token.split(' ')[1]}",
  "token_type": "Bearer",
  "expires_in": 3600
}`
  } else {
    // Session token
    decodedContent.value = `{
  "session_id": "${props.token.split('=')[1]}",
  "user_id": "user_123",
  "expires": "2024-12-31"
}`
  }
  
  isDecoding.value = false
}

defineExpose({ decodeToken, decodedContent })
</script>

<template>
  <div class="decoder-display" :class="{ decoding: isDecoding }">
    <pre><code>{{ decodedContent }}</code></pre>
  </div>
</template>

<style scoped>
.decoder-display {
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 255, 0, 0.2);
  font-family: monospace;
}

.decoding {
  animation: decodeEffect 0.5s ease infinite;
}

@keyframes decodeEffect {
  0% { clip-path: inset(0 0 0 0); }
  20% { clip-path: inset(20% 0 0 0); }
  100% { clip-path: inset(0 0 0 0); }
}
</style>
