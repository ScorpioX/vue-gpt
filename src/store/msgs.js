import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useMsgsStore = defineStore('msgs', () => {
  const msgs = reactive({
    list: []
  })

  function addQ(text) {
    msgs.list.push({
      from: 'me',
      content: text
    })
  }

  function addA(text) {
    msgs.list.push({
      from: 'gpt',
      content: text
    })
  }

  addA('Vue-GPT欢迎你!')
  addQ('举个栗子')

  return { msgs, addQ, addA }
})
