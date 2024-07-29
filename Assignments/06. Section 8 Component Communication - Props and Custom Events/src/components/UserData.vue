<template>
    <div class="user-data">
        <input 
            type="text" 
            v-model="localName" 
            placeholder="Enter name" 
        />
        <input 
            type="number" 
            v-model="localAge" 
            placeholder="Enter age" 
        />
        <button @click="updateUserData">Update</button>
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
    },
    data() {
        return {
            localName: this.name,
            localAge: this.age
        };
    },
    methods: {
        updateUserData() {
            this.$emit('update-user', {
                name: this.localName,
                age: this.localAge
            });
        }
    }
};
</script>

<style scoped>
.user-data {
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 1em;
}
input {
    margin: 0.5em;
    padding: 0.5em;
}
button {
    margin: 0.5em;
    padding: 0.5em;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>
