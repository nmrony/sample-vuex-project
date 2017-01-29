<template>
  <div id="app">
    <div class="columns ">
      <div class="column is-one-third is-offset-2">
        <users></users>
      </div>
      <div class="column is-one-third">
        <registered-user></registered-user>
      </div>
    </div>
  </div>
</template>

<script>
  import Users from './components/Users.vue'
  import registeredUser from './components/Registration.vue'

  export default {
    name: 'app',
    components: {
      Users,
      registeredUser
    }
  }
</script>

<style>
  body {
    padding: 40px;
  }
</style>
