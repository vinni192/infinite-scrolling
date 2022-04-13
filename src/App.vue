<template>
  <main class="main">
    <transition name="main-content">
      <div class="main-container">
        <h1 class="heading">
          Reddit r/aww post results!
        </h1>
        <reddit-list-container />
      </div>
    </transition>
  </main>
</template>

<script setup>
import RedditListContainer from './components/reddit-list-container.vue'
</script>


<style lang="scss">
body {
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
  background: #f7f9fa;

  .main {
    display: flex;
    width: 100%;
    height: 100%;
    .main-container {
      margin: 0 auto;
      @media (max-width: 768px) {
        padding: 0 16px;
      }
      .heading {
        text-align: center;
      }
    }

    .main-content-enter-active,
    .main-content-leave-active {
      transition: opacity 0.3s ease;
    }

    .main-content-enter-from,
    .main-content-leave-to {
      opacity: 0;
    }
  }
}
</style>
