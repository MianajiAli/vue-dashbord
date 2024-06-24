<script setup lang="ts">
import PersonCard from './PersonCard.vue';
import Card from './Card.vue';
import DashboardHeader from './DashboardHeader.vue';
</script>

<template>
    <div class="flex flex-col">
        <DashboardHeader />
        <!-- card wrapper  -->
        <div class="flex flex-row flex-wrap justify-around gap-y-5 gap-x-5 ">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div  class="flex flex-row flex-wrap justify-around gap-y-5 gap-x-5 pt-5">
            <PersonCard/>
            <PersonCard/>
            <PersonCard/>
            <PersonCard/>
        </div>
    </div>
</template>