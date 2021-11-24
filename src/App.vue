<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="./assets/logo.svg" /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blog" class="nav-link">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/demo" class="nav-link">Demo</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-sm-2"
            type="text"
            placeholder="Search"
            id="search-form"
          />
          <button
            class="btn btn-secondary my-2 my-sm-0"
            type="submit"
            id="search-submit"
          >
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style>
body {
  background-image: url("./assets/bg.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

.navbar-brand img {
  height: 60px;
}

.navbar-light {
  background-color: #123456 !important;
  box-shadow: 2px 2px 2px #00000080, 10px 1px 12px #00000080,
    2px 2px 10px #00000080, 2px 2px 3px #00000080, inset 2px 2px 10px #00000080,
    inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080,
    inset 2px 2px 10px #00000080 !important;
  border-radius: 25px !important;
  padding: 5px 10px !important;
  animation: animate 3s linear infinite !important;
  text-shadow: 0 0 50px #00ffff, 0 0 100px #00ffff, 0 0 150px #00ffff,
    0 0 200px #00ffff !important;
}
</style>
