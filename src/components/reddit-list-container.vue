<template>
  <div class="reddit-list-container">
    <transition name="reddit-list-appearance">
      <div
        v-if="redditList.length"
        class="reddit-list-items"
        @scroll="onListScroll"
      >
        <reddit-list-item
          v-for="redditItem in redditList"
          :key="redditItem.id"
          :reddit-item="redditItem"
        />
      </div>
      <div v-else>
        <reddit-list-item-skeleton
          v-for="i in 15"
          :key="i"
        />
      </div>
    </transition>
    <transition name="scroll-loading">
      <div
        v-show="loading"
        class="loader-container"
      >
        <span class="loading-text">Loading...</span>
      </div>
    </transition>
  </div>
</template>

<script setup>
  import RedditListItem from './reddit-list-item.vue'
  import { useRedditListStore } from '../stores/redditList'
  import { storeToRefs } from 'pinia'
  import { defineAsyncComponent } from 'vue'

  const RedditListItemSkeleton = defineAsyncComponent(() => (import('../components/skeletons/reddit-list-item-skeleton.vue')))

  const { loading, redditList, after } = storeToRefs(useRedditListStore())
  const { fetchRedditList } = useRedditListStore()

  fetchRedditList()

  const onListScroll = ($event) => {
    const scrolledToBottom = ($event.target.scrollHeight - $event.target.scrollTop) === $event.target.clientHeight
    if (scrolledToBottom && after.value) {
      const params = {
        limit: 24,
        after: after.value,
      }

      fetchRedditList(params)
    }
  }
</script>

<style lang="scss" scoped>
  .reddit-list-container {
    position: relative;
    width: 710px;
    height: 80vh;
    margin: 0 auto;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;

    @media (max-width: 768px) {
      width: auto;
    }

    .reddit-list-items {
      overflow-y: scroll;
      height: 100%;
    }

    .loader-container {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 3;
      :after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
        background: #78828E;
        opacity: 0.3;
      }

      .loading-text {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }

  .reddit-list-appearance-enter-active,
  .reddit-list-appearance-leave-active {
    transition: opacity 0.3s ease;
  }

  .reddit-list-appearance-enter-from,
  .reddit-list-appearance-leave-to {
    opacity: 0;
  }
</style>
