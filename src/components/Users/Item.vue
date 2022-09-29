<template>
  <div class="user-item">
    <div class="user-item__content">
      <p><strong>User:</strong> {{ userData.name }}</p>
      <p><strong>Username:</strong> {{ userData.username }}</p>
      <p><strong>Email:</strong> {{ userData.email }}</p>
    </div>
    <div class="user-item__btns">
      <MyButton
        @click="$emit('openTodos', userData)"
      >
        Todos
      </MyButton>
      <MyButton
        @click="$emit('openEditForm', userData)"
      >
        User data
      </MyButton>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      userData: {
        type: Object,
        required: true
      },
    }
  }
</script>

<style lang="scss" scoped>
  .user-item {
    padding: 15px;
    border: 2px solid teal;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    &__content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      p {
        margin-bottom: 4px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  button {
    margin-left: 5px;
  }
</style>
