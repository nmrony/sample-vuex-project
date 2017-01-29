<template>
  <div class="box">
    <h1 align="center"><strong>Registered Users</strong></h1>
    <br>
    <h2 align="center"><strong>Total: {{ total }}</strong></h2>
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
  import  { mapGetters } from 'vuex';

  export default {
    name: 'registration',
    computed: {
      ...mapGetters(['registeredUsers']),
      total() {
        return this.registeredUsers.length;
      }
    },
   /*
     we dont need this as we are using mapGetters
     computed: {
          registeredUsers() {
            return this.$store.getters.registeredUsers;
          }
        },
    */
    methods: {
      unRegister(user) {
        // we dont need this
        // this.$emit('unRegisterUser', user)
        // user.registered = false;
        this.$store.commit({
          type: 'unregisterUser',
          userId: user.id
        })
      }
    }
  }
</script>
