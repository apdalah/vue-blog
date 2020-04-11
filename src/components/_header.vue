<template>
  <header>
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  header {
    height: 200px;
    background-image: url(../assets/header.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    margin: 0;
    position: relative;
    color: #fff;
    font-weight: 300;
    font-size: 60px;
  }

  .home-router {
    position: absolute;
    text-decoration: none;
    top: 20px;
    left: 20px;
    background-color: rgba(240, 240, 240, 0.5);
    border-radius: 5px;
    padding: 7px 15px;
    line-height: 1;
  }

  .home-router:hover {
    background-color: rgba(240, 240, 240, 0.8);
  }

</style>
