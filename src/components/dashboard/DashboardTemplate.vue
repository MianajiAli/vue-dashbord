<script setup>
import Dashboard from './Dashboard.vue';
import Navbar from './Navbar.vue'
</script>
<template>
    <div class="flex flex-row relative w-full font-main">
        <Navbar class="w-2/12 h-screen fixed"/>
        <Dashboard class="w-10/12 absolute top-0 right-0 bg-back2 min-h-screen px-[2.5%]"/>
    </div>
</template>