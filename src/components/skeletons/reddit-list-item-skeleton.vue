<template>
  <div class="reddit-list-item-skeleton-container outer-animation">
    <div class="img-skeleton-loader inner-animation" />
    <div class="titles-skeleton-container">
      <div class="main-title-skeleton inner-animation" />
      <div class="subtitle-skeleton inner-animation" />
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  .inner-animation {
    animation: loader 1s linear infinite;
    background: linear-gradient(to right, #929292, #686868, #929292, #686868);
    opacity: 0.3;
    background-size: 300% 100%;

    @keyframes loader {
      0% {
        background-position: 100% 0;
      }
      100% {
        background-position: 0 0;
      }
    }
  }

  .outer-animation {
    animation: loader 1s linear infinite;
    background: linear-gradient(to right, #FFF, #F4F7F9, #FFF, #F4F7F9);
    background-size: 300% 100%;

    @keyframes loader {
      0% {
        background-position: 100% 0;
      }
      100% {
        background-position: 0 0;
      }
    }
  }

  .reddit-list-item-skeleton-container {
    min-height: 60px;
    display: flex;
    text-decoration: none;
    align-items: center;
    color: black;
    margin: 10px 15px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px;
    padding: 10px 15px;

    .img-skeleton-loader {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }

    .titles-skeleton-container{
      display: flex;
      margin-left: 15px;
      flex-direction: column;

      .main-title-skeleton, .subtitle-skeleton {
        border-radius: 20px;
      }

      .main-title-skeleton {
        width: 200px;
        min-height: 15px;
        margin-bottom: 7px;
      }

      .subtitle-skeleton {
        width: 100px;
        min-height: 10px;
      }
    }
  }
</style>
