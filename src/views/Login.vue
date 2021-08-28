<template>
  <!-- Login Form -->
  <div class="form">
    <form>
      <p class="h4 text-center mb-4">Sign in</p>
      <label for="email" class="grey-text">Your email</label>
      <input
        class="form-control"
        type="email"
        id="email"
        v-model="email"
        required
        autofocus
      />
      <br />
      <label for="password" class="grey-text">Your password</label>
      <input
        class="form-control"
        type="password"
        id="password"
        v-model="password"
        required
      />
      <div class="text-center mt-4">
        <button class="btn btn-indigo" type="submit" @click="handleSubmit">
          Login
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      // To store a global state so that user can only navigate throw different pages after login
      if (this.email.length > 0 && this.password.length > 0) {
        this.$store.commit("setAuthentication", true);
        localStorage.setItem("setAuthentication", "done");
        this.$router.push("landing");
      }
    },
  },
};
</script>
