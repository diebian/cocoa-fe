<template>
  <div>
    <div class="md-layout content-login">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
        <login-form data-background-color="green"> </login-form>
      </div>
      <!-- <div class="md-layout-item md-medium-size-100 md-size-33">
        <login-card> </login-card>
      </div> -->
    </div>
  </div>
</template>

<script>
import { LoginForm, LoginCard } from "@/pages";

export default {
  components: {
    LoginForm,
    LoginCard,
  },
};
</script>
<style lang="scss" scoped>
.content-login {

  display: flex;
  justify-content: center;
}
</style>