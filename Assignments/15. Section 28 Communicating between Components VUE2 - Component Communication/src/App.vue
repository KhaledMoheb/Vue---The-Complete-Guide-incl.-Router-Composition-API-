<template>
    <div class="container">
        <TheHeader :headerTitle="headerTitle" />
        <hr>
        <div class="row">
            <TheServers :servers="servers" />
            <ServerDetails :details="serverDetails" />
        </div>
        <hr>
        <TheFooter :footerText="footerText" />
    </div>
</template>

<script  setup>
    import TheHeader from './components/Shared/TheHeader.vue';
    import TheFooter from './components/Shared/TheFooter.vue';
    import TheServers from './components/Server/TheServers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';
    
    import { ref } from 'vue';
    const servers = ref([1, 2, 3, 4, 5]);
    const serverDetails = ref('Server Details are currently not updated');
    const headerTitle = 'Server Status';
    const footerText = 'All Servers are managed here';
</script>

<style>

</style>
