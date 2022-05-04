<template>
  <h1>Login</h1>

  <form @submit.prevent="onSubmit">
    <BaseInput
      label="Email"
      type="email"
      :modelValue="email"
      :error="emailErrorMessage"
      v-on="validationListeners"
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
import { computed } from 'vue';
import { useForm, useField } from 'vee-validate';
import { object, string } from 'yup';

export default {
  setup() {
    function onSubmit() {
      alert('Submitted');
    }

    // Validation Schema
    const validationSchema = object({
      email: string().required().email(),
      password: string().required().min(8)
    });

    useForm({
      validationSchema
    });

    // const {
    //   errorMessage: emailErrorMessage,
    //   value: email,
    //   handleChange
    // } = useField('email');
    
    const { errorMessage: passwordErrorMessage, value: password } =
      useField('password');

    const {
      errorMessage: emailErrorMessage,
      value: email,
      handleChange
    } = useField('email', undefined, {
      validateOnValueUpdate: false
    });
    const validationListeners = computed(() => {
      // If the field is valid or have not been validated yet
      // lazy
      if (!emailErrorMessage.value) {
        return {
          blur: handleChange,
          change: handleChange,
          // disable `shouldValidate` to avoid validating on input
          input: (e) => handleChange(e, false)
        };
      }
      // Aggressive
      return {
        blur: handleChange,
        change: handleChange,
        input: handleChange // only switched this
      };
    });

    return {
      email,
      emailErrorMessage,
      password,
      passwordErrorMessage,
      onSubmit,
      handleChange,
      validationListeners
    };
  }
};
</script>
