<template>
<div class="container">
    <h1>Get User</h1>
    <table class="table table-striped table-borderes">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in Users">
                <td class="text-left">{{ user.first_name }}</td>
                <td class="text-left">{{ user.last_name }}</td>
                <td class="text-left">{{ user.email }}</td>
            </tr>
        </tbody>
    </table>
    <router-link to="/">
        <button class="btn btn-large btn-block btn-success full-width">Add User</button>
    </router-link>
</div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';

export default {
  name: 'Users',
  data() {
      return {
          Users: [],
      }
  },
  mounted() {
      axios.get('http://localhost:3000/users')
        .then((response) => {            
            this.Users = response.data;
            console.log(this.Users);
        })
        .catch((error) => {
            console.log(error)
        });
  }
}
</script>
