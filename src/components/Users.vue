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
          <button @click="register(user)">Register</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'users',
    props: [
      'users'
    ],
    methods: {
      register(user) {

        this.$emit('registerUser', user);
      }
    }
  }
</script>
