<template>
  <label v-if="label" :for="uuid">{{ label }}</label>
  <input
    :placeholder="label"
    @input="$emit('update:modelValue', $event.target.value)"
    :id="uuid"
    v-bind="$attrs"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : null"
    :class="{field: !error}"
  />

  <p
    v-if="error"
    class="errorMessage"
    :id="`${uuid}-error`"
    aria-live="assertive"
  >
    {{ error }}
  </p>
</template>

<script>
import UniqueID from '@/utilities/UniqueID';

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    error: {
      type: String,
      default: ''
    }
  },
  setup() {
    const uuid = UniqueID().getID();
    return {
      uuid
    };
  }
};
</script>
