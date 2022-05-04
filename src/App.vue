<template>
  <div id="app">
    <ComponentsForm />
    <hr />
    <LoginForm />
  </div>
</template>

<script>
import ComponentsForm from '@/views/ComponentsForm';
import LoginForm from '@/views/LoginForm';

export default {
  components: { ComponentsForm, LoginForm }
};
</script>

<style>
@import '@/assets/base.css';
</style>
