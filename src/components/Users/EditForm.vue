<template>
  <form>
    <label>
      <p>Username</p>
      <input 
        v-model="username"
      />
    </label>
    <label>
      <p>Name</p>
      <input 
        v-model="name"
      />
    </label>
    <label>
      <p>Email</p>
      <input 
        v-model="email"
      />
    </label>
    <div class="btns">
      <MyButton> Save </MyButton>
      <MyButton> Edit </MyButton>
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex';
  export default {
    data() {
      return {
        isEditMode: false
      }
    },
    props: {
        userData: {
            type: Object,
            required: true
        }
    },
    computed: {
      ...mapState({
        // userName: state => state.usersModule.currentUser.userName,
        name: state => state.usersModule.currentUser.name,
        email: state => state.usersModule.currentUser.email,
        username: state => state.usersModule.currentUser.username,
      })
    },
    methods: {
      toggleEditMode() {
        this.isEditMode = !this.isEditMode
      }
    },
}
</script>

<style lang="scss" scoped>
label {
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
p {
  margin-bottom: 5px;
}
input {
  padding: 5px 10px;
  border: 1px solid darkgray;
  border-radius: 4px;
  width: 100%;
}
.btns {
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    &:last-child {
      margin-left: 5px;
    }
  }
}
</style>
