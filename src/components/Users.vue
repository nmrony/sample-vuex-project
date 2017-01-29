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
  import { mapGetters } from 'vuex';
  export default {
    name: 'users',
    computed: mapGetters({
      users: 'unregisteredUsers'
    }),
    /* We dont need this as we are using mapGetters
      computed: {
        users() {
           return this.$store.getters.unregisteredUsers;
        }
      },
    */
    methods: {
      registerUser(user) {
        // we dont need this
        //this.$emit('registerUser', user);
        user.registered = true;
      }
    }
  }
</script>
