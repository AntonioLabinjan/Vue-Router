<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="submitForm">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required>

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>

      <button type="submit">Login</button>
    </form>
    <router-link to="/home-route">
      <button>Go to Sign-up</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AboutRoute',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      // Ovdje možete dodati logiku za obradu prijave (login)
      console.log('Login submitted:', this.username, this.password);
    },
  },
};
</script>

<style scoped>
.about-route {
  text-align: center;
  padding: 20px;
}

.route-button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.route-button:hover {
  background-color: #0b7dda;
}
</style>
