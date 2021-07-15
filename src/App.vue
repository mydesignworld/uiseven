<template>
  <Menu/>

  <router-view />
  <!--
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  -->
</template>

<script>
  import Menu from '@/components/Menu.vue'
  export default {
    name: 'App',
    components: {
      Menu
    }
  }  
</script>
