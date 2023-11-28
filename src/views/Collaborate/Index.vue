<template>
    <CardItem
        v-for="card in data"
        :key="card.id"
        :item="card"
    />
</template>

<script setup>
import CardItem from './fragments/CardItem.vue';
import data from './data'

</script>