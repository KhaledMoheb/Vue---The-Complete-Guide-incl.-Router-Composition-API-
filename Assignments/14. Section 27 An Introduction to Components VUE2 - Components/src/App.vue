<template>
    <div class="container">
      <TheHeader>
        <h1>Server Status</h1>
      </TheHeader>
      <hr />
      <div class="row">
        <ServerList :servers="servers" />
        <ServerDetails :details="serverDetails" />
      </div>
      <hr />
      <TheFooter>
        <p>All Servers are managed here</p>
      </TheFooter>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import TheHeader from './components/TheHeader.vue';
  import ServerList from './components/ServerList.vue';
  import ServerDetails from './components/ServerDetails.vue';
  import TheFooter from './components/TheFooter.vue';
  
  const servers = ref([1, 2, 3, 4, 5]);
  const serverDetails = ref('Server Details are currently not updated');
  </script>
  
  <style>
  .container {
    padding: 20px;
  }
  .row {
    display: flex;
    justify-content: space-between;
  }
  </style>
  