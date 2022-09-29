<template>
  <form>
    <label>
      <p>Username</p>
      <input 
        :model-value="userName"
      />
    </label>
    <label>
      <p>Name</p>
      <input 
        :model-value="name"
      />
    </label>
    <label>
      <p>Email</p>
      <input 
        :model-value="email"
      />
    </label>
    <div class="btns">
      <MyButton> Сохранить </MyButton>
      <MyButton> Редактировать </MyButton>
    </div>
  </form>
</template>

<script>
import MyButton from '../UI/MyButton.vue';
import { mapState } from 'vuex';
  export default {
    props: {
        userData: {
            type: Object,
            required: true
        }
    },
    computed: {
      ...mapState({
        userName: state => state.usersModule.currentUser.userName,
        name: state => state.usersModule.currentUser.name,
        email: state => state.usersModule.currentUser.email,
      })
    },
    components: { MyButton }
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
