<template>
    <div class="row">
        <div class="col-xs-12">
            <header>
                <h1>{{ props.headerTitle }}</h1>
            </header>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    headerTitle: {
      type: String,
      required: true
    }
});
</script>

<style></style>
