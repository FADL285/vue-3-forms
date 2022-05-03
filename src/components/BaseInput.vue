<template>
  <label v-if="label" :for="uuid">{{ label }}</label>
  <input
    :placeholder="label"
    @input="$emit('update:modelValue', $event.target.value)"
    class="field"
    :id="uuid"
    v-bind="$attrs"
  />
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
