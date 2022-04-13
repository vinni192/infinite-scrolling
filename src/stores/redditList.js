import { defineStore } from 'pinia'
import { fetchRedditList } from '@/http/redditList'

export const useRedditListStore = defineStore('redditList', {
  id: 'redditList',
  state: () => ({
    loading: false,
    redditList: [],
    after: '',
  }),

  actions: {
    async fetchRedditList (params = { limit: 24 }) {
      if (params.after) {
        this.loading = true
      }
      await fetchRedditList(params)
      .then((posts) => {
        this.after = posts.after
        const mappedPosts = posts.children?.map((listItem) => {
          return {
            id: listItem.data.id,
            title: listItem.data.title,
            thumbnail: listItem.data.thumbnail || '',
            subreddit_name: listItem.data.subreddit_name_prefixed,
            link: `https://reddit.com${listItem.data.permalink}`
          }
        })
        if ('after' in params) {
          this.redditList.push(...mappedPosts)
        } else {
          this.redditList = mappedPosts
        }
      }).finally(() => {
          this.loading = false
      })
    }
  }
})
