<template>
  <div class="user-item">
    <div>
      <div><strong>Пользователь:</strong> {{ data.name }}</div>
    </div>
    <div class="user-item__btns">
      <MyButton
        @click="$emit('openTodos', data)"
      >
        Задачи
      </MyButton>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .user-item {
    padding: 15px;
    border: 2px solid teal;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
</style>
