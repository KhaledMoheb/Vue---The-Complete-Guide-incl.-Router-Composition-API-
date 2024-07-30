<template>
    <div class="row">
        <div class="col-xs-12">
            <footer>
                <p>{{ props.footerText }}</p>
            </footer>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    footerText: {
        type: String,
        required: true
    }
});
</script>

<style></style>
