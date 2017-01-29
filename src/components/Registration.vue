<template>
  <div class="box">
    <h1 align="center"><strong>Registered Users</strong></h1>
    <br>
    <table class="table">
      <thead>
        <th>Name</th>
        <th>Action</th>
      </thead>
      <tbody>
        <tr v-for="user in registeredUsers">
          <td>
            {{ user.name }}
          </td>
          <td>
            <button @click="unRegister(user)">Unregister</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'registration',
    computed: {
      registeredUsers() {
        return this.$store.state.users.filter(user => user.registered)
      }
    },
    methods: {
      unRegister(user) {
        // we dont need this
        // this.$emit('unRegisterUser', user)
        user.registered = false;
      }
    }
  }
</script>
