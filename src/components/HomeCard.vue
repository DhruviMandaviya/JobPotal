<script setup>
import Card from './card.vue'
import{ defineProps } from 'vue'
import { RouterLink } from 'vue-router';
defineProps({
  card_title:{
    type: String,
    default: "For Developers"
  },
  card_subTitle:{
    type: String,
    default: "Browse our Vue jobs and start your career today"
  }
})
</script>

<template>
     <section class="py-4">
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 class="text-2xl font-bold">{{ card_title }}</h2>
            <p class="mt-2 mb-4">
              {{ card_subTitle }}
            </p>
            <RouterLink
              to="/jobs"
              class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
              Browse Jobs
            </RouterLink>
          </Card>
          <Card bg="bg-green-100">
            <h2 class="text-2xl font-bold">For Employers</h2>
            <p class="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            <RouterLink
              to="/jobs/add"
              class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600">
              Add Job
            </RouterLink>
          </Card>
        </div>
      </div>
    </section>
</template>