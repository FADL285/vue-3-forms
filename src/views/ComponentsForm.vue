<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit="submit">
      <BaseSelect
        label="Select a category"
        :options="categories"
        v-model="category"
        :error="errors.category"
      />

      <h3>Name & describe your event</h3>
      <BaseInput
        label="Title"
        v-model="title"
        :error="errors.title"
        type="text"
      />

      <BaseInput
        label="Description"
        v-model="description"
        :error="errors.description"
        type="text"
      />

      <h3>Where is your event?</h3>
      <BaseInput
        label="Location"
        v-model="location"
        :error="errors.location"
        type="text"
      />

      <h3>Are pets allowed?</h3>
      <BaseRadioGroup
        v-model="pets"
        :error="errors.pets"
        name="pets"
        :options="[
          { value: 1, label: 'Yes' },
          { value: 0, label: 'No' }
        ]"
      />

      <h3>Extras</h3>
      <div>
        <BaseCheckbox
          label="Catering"
          v-model="catering"
          :error="errors.catering"
        />
      </div>

      <div>
        <BaseCheckbox
          label="Live music"
          v-model="music"
          :error="errors.music"
        />
      </div>

      <div>
        <BaseButton type="submit" class="-fill-gradient" something="else">
          Submit
        </BaseButton>
      </div>
    </form>
  </div>
</template>

<script>
import { useField, useForm } from 'vee-validate';
import { object, string, number, boolean } from 'yup';

export default {
  data() {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ]
    };
  },
  setup() {
    const validationSchema = object({
      category: string().required(),
      title: string().required('A cool title is required.').min(3),
      description: string().required(),
      location: string(),
      pets: number(),
      catering: boolean(),
      music: boolean()
    });

    const { handleSubmit, errors } = useForm({
      validationSchema,
      initialValues: {
        pets: 1,
        catering: false,
        music: false
      }
    });

    const { value: category } = useField('category');
    const { value: title } = useField('title');
    const { value: description } = useField('description');
    const { value: location } = useField('location');
    const { value: pets } = useField('pets');
    const { value: catering } = useField('catering');
    const { value: music } = useField('music');

    const submit = handleSubmit((values) => {
      console.log('Form Data that wanna to handle', values);
    });

    return {
      category,
      title,
      description,
      location,
      pets,
      catering,
      music,
      errors,
      submit
    };
  }
};
</script>
