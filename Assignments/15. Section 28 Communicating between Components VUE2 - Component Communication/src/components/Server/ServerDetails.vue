<template>
    <div class="col-xs-12 col-sm-6">
        <p>{{ props.details }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    details: {
        type: String,
        required: true
    }
});
</script>

<style>

</style>
