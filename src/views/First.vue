<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div class="square">
      <h3>Kya Gazab Xa</h3>
      <vs-input
        state="success"
        success
        v-model="value2"
        placeholder="Success Icon"
        color="blue"
      >
        <template #icon>
          <box-icon type="solid" color="blue" name="rocket"></box-icon>
          <box-icon type="logo" name="facebook" color="green"></box-icon>
        </template>
      </vs-input>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  components: {
    Navbar
  },
  data: () => ({
    active: 0
  })
};
</script>
