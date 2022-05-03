<template>
  <label v-if="label"> {{ label }} </label>
  <select
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    class="field"
    v-bind="$attrs"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
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
    },
    options: {
      type: Array,
      required: true
    }
  }
};
</script>
