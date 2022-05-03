<template>
  <label v-if="label">{{ label }}</label>
  <input
    :placeholder="label"
    class="field"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  }
};
</script>
