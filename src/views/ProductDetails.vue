<template>
  <div>
    <!-- Navbar -->
    <header class="navbar fixed-top p-0 shadow">
      <a href="/landing">
        <img class="logo" src="../assets/logo.png" alt="" />
      </a>
      <div class="logout">
        <a class="btn btn-indigo" href="https://www.google.com/"> Menu1 </a>
        <a class="btn btn-indigo" href="https://www.instagram.com/"> Menu2 </a>
        <button class="btn btn-indigo" type="submit" @click="handleLogout">
          Logout
        </button>
      </div>
    </header>
    <!-- Main Area -->
    <main class="main">
      <div class="product-details">
        <div class="card-2">
          <img class="product-image" src="../assets/product.jpg" alt="" />
        </div>
        <!-- Details about product -->
        <div class="about-product">
          <h4>New product</h4>
          <h4 class="product-mrp">MRP: $100</h4>
          <!-- Product Description: Dummmy text -->
          <p style="margin-top: 30px">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    </main>
    <!-- Footer -->
    <footer class="footer">
      <span> &copy; 2021 Company Inc. </span>
    </footer>
  </div>
</template>
<script>
export default {
  methods: {
    handleLogout(e) {
      e.preventDefault();
      this.$store.commit("setAuthentication", false);
      localStorage.setItem("setAuthentication", "no");
      this.$router.push("/");
    },
  },
};
</script>
