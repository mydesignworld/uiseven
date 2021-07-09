<template>
  <div class="about">
    <img alt="Adhara logo" class="medium-logo" src="../assets/images/logo-adhara-color.png">
    <p>Testing Vue Router this should be the {{ $route.name }} page</p>
  </div>
  <div class="post">
    <ul>
        <li>
            <router-link :to="{ name: 'Routing', params: { id: 1, title: 'Dyn link 01' } }">Dyn link 01 Routing</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'Routing', params: { id: 2, title: 'Dyn link 02' } }">Dyn link 02 Routing</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'Routing', params: { id: 3, title: 'Dyn link 03' } }">Dyn link 03 Routing</router-link>
        </li>                   
    </ul>
  </div>
</template>
