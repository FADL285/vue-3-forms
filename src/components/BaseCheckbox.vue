<template>
  <input
    type="checkbox"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
    class="field"
    :id="uuid"
    v-bind="$attrs"
  />
  <label v-if="label" for="uuid">{{ label }}</label>
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
      type: Boolean,
      default: false
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
