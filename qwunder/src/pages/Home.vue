<template>
  <div>
     <h1>{{ msg }}</h1>
    <footer class="home-footer">

    </footer>
  </div>
</template>

<script>
  export default {
    name: 'Hello',
    data () {
      return {
        msg: 'Welcome to index'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home-footer {
  height: 200px;
  width: 100%;
  background: url("../assets/img/TopicsBar.png") 0 0 no-repeat;
  background-size: cover;
}

</style>
