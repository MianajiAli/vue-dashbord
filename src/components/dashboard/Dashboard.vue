<script setup lang="ts">
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
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        
    </div>
</template>