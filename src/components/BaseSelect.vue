<template>
  <label v-if="label" :for="uuid"> {{ label }} </label>
  <select
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    :id="uuid"
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
    options: {
      type: Array,
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
