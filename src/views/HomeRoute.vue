<template>
  <div>
    <h1>Sign-up</h1>
    <form @submit.prevent="submitForm">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="firstName" required>

      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="lastName" required>

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>

      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required>

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>

      <button type="submit">Sign-up</button>
    </form>
    <router-link to="/about-route">
      <button>Go to Login</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeRoute',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      // Ovdje možete dodati logiku za obradu prijave
      console.log('Form submitted:', this.firstName, this.lastName, this.email, this.username, this.password);
    },
  },
};
</script>

<style scoped>
.home-route {
  text-align: center;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.route-button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.route-button:hover {
  background-color: #45a049;
}
</style>
