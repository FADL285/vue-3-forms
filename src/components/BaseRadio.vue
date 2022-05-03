<template>
  <input
    type="radio"
    :checked="modelValue === value"
    :value="value"
    @change="$emit('update:modelValue', value)"
    :id="uuid"
    v-bind="$attrs"
  />
  <label v-if="label" :for="uuid">{{ label }}</label>
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
    value: {
      type: [String, Number],
      required: true
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
