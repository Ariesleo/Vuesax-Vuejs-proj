<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div>
      <vs-card class="register" success shadow>
        <template #title>
          <h3>Pot with a plant</h3>
        </template>
        <template #text>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </template>
      </vs-card>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>

<style scoped>
.register {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  box-shadow: aliceblue;
  color: rgb(31, 94, 31);
}
</style>
