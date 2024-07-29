<template>
  <div class="app">
      <UserData 
          :name="userName" 
          :age="userAge" 
          @update-user="handleUpdateUser" 
      />
      <ActiveUser 
          :name="userName" 
          :age="userAge" 
      />
  </div>
</template>

<script>
import UserData from './components/UserData.vue';
import ActiveUser from './components/ActiveUser.vue';

export default {
  components: {
      UserData,
      ActiveUser
  },
  data() {
      return {
          userName: 'John Doe',
          userAge: 30
      };
  },
  methods: {
      handleUpdateUser(userData) {
          this.userName = userData.name;
          this.userAge = userData.age;
      }
  }
};
</script>

<style scoped>
.app {
  display: flex;
  justify-content: space-around;
  padding: 1em;
}
</style>