<template>
    <div v-click-outside="handleOutsideClick" class="bg-[#F9F9F980] border border-[#C9C9C9] rounded p-7">
        <div class="font-bold text-[18px] text-[#1C1C1D] py-1.5">
            {{ item.title }}
        </div>
        <div class="mb-5 font-light text-[#1C1C1D]">
            {{ item.description }}
        </div> 
        <div
            v-if="item.children"
            class="relative flex flex-col"
        >
            <Box
                v-for="(card) in item.children"
                :key="card.id"
                v-model="selectedId"
                :item="card"
            />
        </div>
    </div>
</template>

<script setup>
import Box from './Box.vue';
import { ref } from 'vue'

const props = defineProps({
    item: {
        type: Object,
        default: {}
    },
})

const selectedId = ref('')

const handleOutsideClick = () => {
    selectedId.value = ''
}

</script>