<script setup>
import { RouterLink } from 'vue-router';
import jobListing from './JobListing.vue';
import { reactive,defineProps,onMounted } from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false
    }
})

const state= reactive({
    jobs: [],
    isLoading:false
});

onMounted(async () => {
    try {
        const response = await fetch('/api/jobs');
        state.jobs = await response.json();
    } catch (error) {
        console.error('error fetching jobs', error);
    }finally{
        state.isLoading=false;
    }
});

</script>

<template>
    <section class="bg-green-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>

            <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
                <PulseLoader />
            </div>
            <div  v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <jobListing v-for="job in state.jobs.slice(0,limit || state.jobs.length)" :key="job.id" :job="job"/>
            </div>
        </div>
    </section>
    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink>
    </section>
</template>