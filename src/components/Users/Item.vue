<template>
  <div class="user-item">
    <div>
      <div><strong>Пользователь:</strong> {{ userData.name }}</div>
    </div>
    <div class="user-item__btns">
      <MyButton
        @click="$emit('openTodos', userData)"
      >
        Задачи
      </MyButton>
      <MyButton
        @click="$emit('openEditForm', userData)"
      >
        Данные пользователя
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
    },
    computed: {
      userTodos() {

      }
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
  }
  button {
    margin-left: 5px;
  }
</style>
