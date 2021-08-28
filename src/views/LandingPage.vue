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
    <!-- Main Area-->
    <main class="main">
      <!-- This is product card display available products -->
      <div class="card" v-for="k in products" :key="k">
        <a href="/product_details">
          <img class="product-image" src="../assets/product.jpg" alt="" />
          <!-- Product Description -->
          <div class="product-desc">
            <h4>New product</h4>
            <h4 class="product-mrp">$100</h4>
          </div>
        </a>
      </div>
    </main>
    <!-- footer -->
    <footer class="footer">
      <span> &copy; 2021 Company Inc. </span>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: ["p1", "p2", "p3", "p4", "p5", "p6", "p7"],
    };
  },
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
