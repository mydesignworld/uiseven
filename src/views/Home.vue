<template>
  <div class="home">
    <img alt="Adhara logo" class="medium-logo" src="../assets/images/logo-adhara-color.png">
    <ModalTest msg="Adhara Vue & Bootstrap starter App"/>
    <div class="mt-2"><p>{{ $route.meta.title }}</p></div>
  </div>
</template>

<script>
// @ is an alias to /src
import ModalTest from '@/components/ModalTest.vue'

export default {
  name: 'Home',
  components: {
    ModalTest
  }
}
</script>

