<template>
  <form @submit.prevent>
    <label>
      <p>Username</p>
      <input 
        :value="username"
        @input="onInputUpdate"
        name="username"
        :disabled="!isEditMode"
        ref="usernameRef"
      />
    </label>
    <label>
      <p>Name</p>
      <input 
        :value="name"
        @input="onInputUpdate"
        name="name"
        :disabled="!isEditMode"
      />
    </label>
    <label>
      <p>Email</p>
      <input
        name="email"
        @input="onInputUpdate"
        :value="email"
        :disabled="!isEditMode"
      />
    </label>
    <div class="btns">
      <MyButton @click="saveData"> Save </MyButton>
      <MyButton @click="activateEditMode"> Edit </MyButton>
    </div>
  </form>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
  export default {
    data() {
      return {
        isEditMode: false,
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
        name: state => state.usersModule.currentUser.name,
        email: state => state.usersModule.currentUser.email,
        username: state => state.usersModule.currentUser.username,
      })
    },
    methods: {
      activateEditMode() {
        setTimeout(() => this.makeFocus(this.$refs.usernameRef), 0)
        this.isEditMode = true
      },
      saveData() {
        this.isEditMode = false
        this.saveUserData()
      },
      makeFocus(node) {
        node.focus()
      },
      onInputUpdate(e) {
        this.updateInputInStore({
          newValue: e.target.value,
          fieldName: e.target.name
        })
      },
      ...mapMutations({
        updateInputInStore: 'usersModule/updateSingleCurrentUserField',
        saveUserData: 'usersModule/saveUserData'
      }),
    }
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
  padding: 10px 15px;
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
