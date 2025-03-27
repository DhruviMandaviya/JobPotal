<script setup>
import Hero from '@/components/Hero.vue'
import HomeCard from '@/components/HomeCard.vue'
import jobListings from '@/components/JobListings.vue'
</script>

<template>
  <Hero title="Job Portal" subTitle="One platform for all !!!!!"/>
  <HomeCard card_title="For Developers" card_subTitle="Browse our Vue jobs and start your career today"/>
  <jobListings limit=3 showButton="true" />
</template>