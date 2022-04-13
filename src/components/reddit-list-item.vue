<template>
  <a
    :href="redditItem.link"
    target="_blank"
    class="reddit-item"
  >
    <img
      :src="redditItem.thumbnail"
      alt="picture"
    >
    <div class="reddit-item-titles">
      <span class="main-title">{{ redditItem.title }}</span>
      <span class="subtitle">subreddit: {{ redditItem.subreddit_name }}</span>
    </div>
  </a>
</template>

<script setup>
defineProps({
  redditItem: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
  .reddit-item {
    display: flex;
    text-decoration: none;
    align-items: center;
    color: black;
    margin: 10px 15px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px;
    padding: 10px 15px;

    img {
      border-radius: 50%;
      width: 70px;
      height: 70px;
    }

    &-titles {
      display: flex;
      margin-left: 15px;
      flex-direction: column;

      .main-title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 7px;
      }

      .subtitle {
        font-size: 12px;
        color: #78828E;
      }
    }
  }
</style>
