<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <router-link to="/">
          <div class="header-logo"></div>
        </router-link>
        <div class="profile-pic">
          <select v-model="user">
            <option v-for="user in users">{{ user }}</option>
          </select>
          <h1 :bind="user">{{ user }}</h1>
        </div>
        <nav class="header-menu">
          <router-link to="/">Q's World</router-link>
          <router-link to="/parents_corner">Parents Corner</router-link>
          <router-link to="/my_account">My Account</router-link>
          <router-link to="/support">Support</router-link>
          <router-link to="/sign_out">Sign Out</router-link>
        </nav>
      </div>
    </header>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      users: ['Tom', 'Brad', 'Gil', 'Adam', 'Geany', 'Kruz'],
      user: ''
    }
  }
}
</script>

<style lang="scss">
  @import './assets/scss/main.scss';

</style>
