<template>
    <div class="col-xs-12 col-sm-6">
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

<style></style>
