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
    props: ['registeredUsers'],
    methods: {
      unRegister(user) {
        this.$emit('unRegisterUser', user)
      }
    }
  }
</script>
