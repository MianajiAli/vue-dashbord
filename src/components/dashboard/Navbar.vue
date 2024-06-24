<script setup lang="ts">
import NavbarItem from './NavbarItem.vue';
</script>

<template>
    <div class="bg-back flex flex-col justify-start items-center 
    text-xl font-sb
    ">
    <div class="flex justify-center items-center w-full h-40 gap-1">
        <span class="w-7 h-7 bg-cyan-600 text-white rounded-full flex justify-center items-center text-lg ">✦</span>
        <h3 class="font-bl">AriaHR.</h3>
    </div>
    <div class="w-full px-3  flex flex-col justify-between items-center text-center gap-3 ">
        <NavbarItem link="/home" title="Back to Home" />
        <NavbarItem link="/home" title="Back to Home" />
        <NavbarItem link="/home" title="Back to Home" />
        
    </div>
    <div class="w-full h-full px-3 py-3  ">
        <div class="w-full h-full smooth hover:rounded-2xl rounded-3xl bg-blue-600 px-5 py-10">
            <h3 class="text-white font-sb text-4xl">
            Aria<br/>
            Premium
            </h3>
            <div class=" mt-7 w-full h-fit flex flex-col justify-center items-center gap-3">
                <h5 class="text-white opacity-50">feature 1</h5>
                <h5 class="text-white opacity-50">feature 2</h5>
                <h5 class="text-white opacity-50">feature 3</h5>
            </div>

        </div>
    </div>

    </div>
</template>