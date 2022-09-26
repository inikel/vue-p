<template>
  <div class="list" v-if="users.length > 0"
  >
    <h3>Список пользователей</h3>
      <UserItem
        v-for="user in users"
        :data="user"
        :key="user.id"
        @openTodos="$emit('openTodos', user)"
      />
  </div>
  <h2 v-else style="color: red">
    Список пользователей пуст
  </h2>
</template>

<script>
import UserItem from "@/components/Users/Item.vue";

export default {
  components: { UserItem },
  emits: ['openTodos'],
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  mounted() {
    // console.log(users)
  }
}
</script>

<style scoped>
.list {
  padding: 0 30px;
  margin: 0 auto;
  max-width: 60%;
}
</style>
