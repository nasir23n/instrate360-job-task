<template>
    <div class="h-full bg-gradient-to-b from-[#FAFAFA] to-[rgba(250,250,250,0.80)] font-poppins">
        <TopNavigation />

        <div class="mt-20 max-w-[1296px] mx-auto grid grid-cols-3 gap-10">
            <slot />
        </div>
    </div>
</template>

<script setup>
import TopNavigation from './fragments/TopNavigation.vue';
</script>