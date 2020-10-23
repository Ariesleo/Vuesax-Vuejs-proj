<template>
  <div class="center examplex">
    <vs-navbar :color="primary" center-collapsed v-model="active">
      <template #left>
        <img src="../assets/logo.png" alt="" width="40" />
      </template>
      <vs-navbar-item :active="active == 'guide'" id="guide">
        Guide
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'docs'" id="docs">
        Documents
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'components'" id="components">
        Components
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'license'" id="license">
        license
      </vs-navbar-item>
      <template #right>
        <vs-button flat>Login</vs-button>
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: "guide"
  })
};
</script>
