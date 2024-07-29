<template>
    <div class="active-user">
        <h2>{{ name }}</h2>
        <h3>{{ age }}</h3>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        }
    }
};
</script>

<style scoped>
.active-user {
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 1em;
}
</style>
