<template>
  <div>
    <div class="md-layout content-login">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
        <register-form data-background-color="green"> </register-form>
      </div>
    </div>
  </div>
</template>

<script>
import { RegisterForm } from "@/pages";

export default {
  components: {
    RegisterForm,

  },
};
</script>
<style lang="scss" scoped>
.content-login {

  display: flex;
  justify-content: center;
}
</style>