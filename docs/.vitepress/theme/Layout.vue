
<script setup>
import DefaultTheme from 'vitepress/theme'
import AdminNav from './components/layout/AdminNav.vue'
import LayoutFooter from './components/layout/LayoutFooter.vue'
import { ref, onMounted } from 'vue'

const { Layout } = DefaultTheme
const layoutFooter = ref(null)

onMounted(() => {
  window.$vueApp = {
    showToast: (options) => {
      layoutFooter.value?.toastManager?.showToast(options)
    }
  }
})

function showToast(message, type) {
  layoutFooter.value?.toastManager?.showToast({ message, type, duration: 3000 })
}

defineExpose({ showToast })
</script>

<template>
  <Layout>
    <template #sidebar-nav-after>
      <AdminNav />
    </template>
    <template #layout-bottom>
      <LayoutFooter ref="layoutFooter" />
    </template>
  </Layout>
</template>
