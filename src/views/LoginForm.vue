<template>
  <h1>Login</h1>

  <form @submit.prevent="onSubmit">
    <BaseInput
      label="Email"
      type="email"
      v-model="email"
      :error="emailErrorMessage"
    />

    <BaseInput
      label="Password"
      type="password"
      v-model="password"
      :error="passwordErrorMessage"
    />

    <BaseButton type="submit" class="-fill-gradient"> Submit </BaseButton>
  </form>
</template>

<script>
import { useForm, useField } from 'vee-validate';

export default {
  setup() {
    function onSubmit() {
      alert('Submitted');
    }

    // Validation Schema
    const validationSchema = {
      email: (value) => {
        if (value && value.trim()) {
          return true;
        }
        return 'Email is required';
      },
      password: (value) => {
        if (value && value.trim()) {
          return true;
        }
        return 'Password is required';
      }
    };

    useForm({
      validationSchema
    });

    const { errorMessage: emailErrorMessage, value: email } = useField('email');
    const { errorMessage: passwordErrorMessage, value: password } =
      useField('password');

    return {
      email,
      emailErrorMessage,
      password,
      passwordErrorMessage,
      onSubmit
    };
  }
};
</script>
