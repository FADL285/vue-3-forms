<template>
  <div>
    <h1>Create an event</h1>
    <form @submit.prevent="sendForm">
      <BaseSelect
        v-model="event.category"
        label="Select a category"
        :options="categories"
      />

      <fieldset>
        <legend>Name & describe your event</legend>
        <BaseInput v-model="event.title" label="Title" type="text" />
        <BaseInput
          v-model="event.description"
          label="Description"
          type="text"
        />
      </fieldset>

      <fieldset>
        <legend>Where is your event?</legend>
        <BaseInput v-model="event.location" label="Location" type="text" />
      </fieldset>

      <fieldset>
        <legend>Pets</legend>

        <p>Are pets allowed?</p>
        <div>
          <BaseRadioGroup
            v-model="event.pets"
            name="pets"
            :options="petOptions"
            vertical
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Extras</legend>
        <div>
          <BaseCheckbox v-model="event.extras.catering" label="Catering" />
        </div>

        <div>
          <BaseCheckbox v-model="event.extras.music" label="Live music" />
        </div>
      </fieldset>

      <BaseButton type="submit" class="-fill-gradient"> Submit </BaseButton>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

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
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
      },
      petOptions: [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 }
      ]
    };
  },
  methods: {
    async sendForm() {
      try {
        const response = await axios.post(
          'https://my-json-server.typicode.com/fadl285/vue-3-forms/events',
          this.event
        );
        console.log(response);
        console.log('------------------');
        console.log(response.data);
      } catch (error) {
        console.log('Error: ' + error.message);
      }
    }
  }
};
</script>

<style scoped>
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

legend {
  font-size: 1.75rem;
  font-weight: 700;
  margin-top: 1.25rem;
}
</style>
