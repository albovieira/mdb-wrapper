<template>
  <div class="sticky-top">
    <b-navbar toggleable="md" type="dark" class="navbar-purple">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="/">
        <img src="/static/img/arch-logo.jpg" height="40" alt="ArcTouch">
      </b-navbar-brand>

      <b-collapse id="menu" is-nav>
        <b-navbar-nav>
          <b-nav-item exact active-class="active" to="/">Home</b-nav-item>
          <b-nav-item active-class="active" to="/search">Search</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { getInfoByAttr, clearStorage } from '@/services/storage';
import swal from 'sweetalert';
import toastr from 'toastr';

export default {
  name: 'Header',
  methods: {},
};
</script>

<style lang='scss' scoped>
@import '../assets/scss/index.scss';
.header {
  box-shadow: 1px 1px 1px black;
  .logo {
    width: 10rem;
  }
  width: 100%;
  .navbar {
    padding: 0;
    .navbar-brand {
      margin: 0;
      display: flex;
      justify-content: center;
      height: 70px;
      align-items: center;
    }
    .nav-wrapper {
      padding: 0 20px;
    }
  }
}
nav {
  min-height: 5rem !important;
}
.nav-link.active {
  font-weight: bold;
  border-bottom: 1px solid #fff;
}
.navbar-purple {
  background-color: #ff8500;
  height: 70px !important;
}
a.nav-link {
  color: #fff;
}
.nav-link {
  padding-right: 8px;
  padding-right: 0.5rem;
  padding-left: 8px;
  padding-left: 0.5rem;
  color: #cbbde2;
}
.navbar-expand-md {
  height: 70px !important;
}
@media (max-width: 768px) {
  .navbar-toggler {
    position: absolute;
  }
  .navbar-light .navbar-toggler {
    background-color: #fff;
    margin-left: 15px;
    border: 0;
  }
}
</style>
