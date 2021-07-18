<template>
  <Navigation>
    <router-view />
  </Navigation>
  <!--
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  -->
</template>

<script>
  import Navigation from '@/components/Menu/Navigation.vue'
  export default {
    name: 'App',
    components: {
      Navigation
    }
  }  
</script>
