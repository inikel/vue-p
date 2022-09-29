<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton'
}
</script>

<style lang="scss" scoped>
.btn {
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  border-radius: 3px;
  cursor: pointer;
  transition: 300ms background-color, border-color;

  &:hover {
    background-color: aliceblue;
    border-color: darkblue;
  }
}
</style>
