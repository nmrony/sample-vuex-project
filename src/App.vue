<template>
  <div id="app">
    <div class="columns ">
      <div class="column is-one-third is-offset-2">
        <users :users="unregisteredUsers" @registerUser="registerUser"></users>
      </div>
      <div class="column is-one-third">
        <registered-user :registeredUsers="registeredUsers" @unRegisterUser="unRegisterUser"></registered-user>
      </div>
    </div>
  </div>
</template>

<script>
  import Users from './components/Users.vue'
  import Registration from './components/Registration.vue'

  export default {
    name: 'app',
    components: {
      Users,
      registeredUser: Registration
    },
    methods: {
      registerUser(user) {
        user.registered = true;
      },
      unRegisterUser(user) {
        user.registered = false;
      }
    },
    computed: {
      registeredUsers() {
        return this.users.filter(user => user.registered)
      },
      unregisteredUsers() {
        return this.users.filter(user => !user.registered)
      }
    },
    data() {
      return {
        users:[
          { id: 1, name: 'Nur', registered: false },
          { id: 2, name: 'Afifa', registered: false },
          { id: 3, name: 'Rana', registered: false },
          { id: 4, name: 'Raihan', registered: false },
          { id: 5, name: 'Farhad', registered: false },
        ]
      }
    }
  }
</script>

<style>
  body {
    padding: 40px;
  }
</style>
