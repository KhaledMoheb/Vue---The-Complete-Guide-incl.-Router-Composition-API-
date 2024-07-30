<template>
    <div class="server-list">
      <ul class="list-group">
        <li class="list-group-item" v-for="index in props.servers" :key="index">
          Server #{{ index }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    servers: {
      type: Array,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .server-list {
    padding: 10px;
  }
  .list-group-item {
    padding: 10px;
    border: 1px solid #ddd;
  }
  </style>
  