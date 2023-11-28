<template>
    <div class="border-b border-[#C9C9C9]">
        <div class="w-full h-[60px] flex items-center gap-10 max-w-[1296px] mx-auto font-bold text-sm text-[#C9C9C9]">
            <RouterLink
                v-for="(item, index) in navItems"
                :key="index"
                :to="item.path"
                active-class="!text-[#1C1C1D]"
            >
                {{ item.title }}
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const navItems = [
  {
      title: 'Explorer',
      path: '/',
  },
  {
      title: 'Generate',
      path: '/generate',
  },
  {
      title: 'Collaborate',
      path: '/collaborate',
  },
  {
      title: 'Evaluate',
      path: '/evaluate',
  },
  {
      title: 'Communicate',
      path: '/communicate',
  },
]

</script>