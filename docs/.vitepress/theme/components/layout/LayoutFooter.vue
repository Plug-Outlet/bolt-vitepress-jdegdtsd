
<script setup>
import FooterFeatures from '../FooterFeatures.vue'
import ToastManager from '../ToastManager.vue'
import { ref } from 'vue'

const toastManager = ref(null)

defineExpose({ toastManager })
</script>

<template>
  <FooterFeatures />
  <ToastManager ref="toastManager" />
</template>
