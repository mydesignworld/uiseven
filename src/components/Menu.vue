<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary" id="nav">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Fixed for now</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="nav-link" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'About' }" class="nav-link">About</router-link>
          </li>

        </ul>
      </div>
    </div>
  </nav>
  <div id="navspacer"></div>
</template>
