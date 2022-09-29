<template>
  <div>
    <h3>Users List</h3>
    <UsersList />
  </div>
</template>

<script>
import UsersList from "@/components/Users/List.vue";

export default {
  components: {
    UsersList,
  },
}
</script>

<style>
h3 {
  margin-bottom: 15px;
}

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid teal;
}
</style>
