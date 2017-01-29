<template>
  <div class="box">
    <h1 align="center"><strong>All Users</strong></h1>
    <br>
    <table class="table">
      <thead>
      <th>Name</th>
      <th>Action</th>
      </thead>
      <tbody>
      <tr v-for="user in users">
        <td>
          {{ user.name }}
        </td>
        <td>
          <button @click="registerUser(user)">Register</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'users',
    computed: {
      users() {
        console.log('In user', this.$store.state.users);
        return this.$store.state.users.filter(user => !user.registered);
      }
    },
    methods: {
      registerUser(user) {
        // we dont need this
        //this.$emit('registerUser', user);
        user.registered = true;
      }
    }
  }
</script>
