<template>
    <div 
        class="bg-[#F9F9F9] border border-[#C9C9C9] rounded p-4 w-[320px] h-[320px] ml-[var(--ml)] card"
        :class="class"
        :style="{
            zIndex: item.id == modalValue ? 10 : 0
        }"
        @click="handleSelect(item)"
    >
        <div class="font-bold text-[18px] text-[#1C1C1D] py-1.5">
            {{ item.title }}
        </div>
        <div class="font-light text-[#1C1C1D] py-1.5">
            {{ item.description }}
        </div>
    </div>
    <template v-if="item.children">
        <Box
            v-for="(card) in item.children"
            :key="card.id"
            :item="card"
            v-model="modalValue"
            class="mt-[-260px]"
        />
    </template>

</template>

<script setup>
const props = defineProps({
    item: {
        type: Object,
        default: {}
    },
    class: {
        type: String,
        default: ''
    }
})

const modalValue = defineModel()

function handleSelect(item) {
    modalValue.value = item.id
}

</script>

<style scoped>
.card:nth-child(2) {
    margin-left: 25px;
}
.card:nth-child(3) {
    margin-left: 50px;
}
.card:nth-child(4) {
    margin-left: 75px;
}
</style>