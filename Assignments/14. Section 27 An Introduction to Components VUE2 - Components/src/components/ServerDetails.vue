<template>
    <div class="server-details">
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
  
  <style scoped>
  .server-details {
    padding: 10px;
  }
  </style>
  