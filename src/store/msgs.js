import { reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const openaiRest = axios.create({
  baseURL: 'https://api.fe8.cn/v1/chat/completions',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
  }
})

import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
})

export const useMsgsStore = defineStore('msgs', () => {
  const msgs = reactive({
    list: []
  })

  function addQ(text) {
    msgs.list.push({
      from: 'me',
      content: text
    })
    hello(text)
  }

  function addA(text) {
    msgs.list.push({
      from: 'gpt',
      content: text
    })
  }

  async function hello(question = 'Who are you') {
    // const chatCompletion = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: 'Say this is a test' }],
    //   model: 'gpt-3.5-turbo'
    // })
    const { data } = await openaiRest.post('', {
      messages: [
        {
          role: 'user',
          content: question
        }
      ],
      model: 'gpt-3.5-turbo'
    })
    addA(data?.choices?.[0]?.message.content)
  }

  hello()

  return { msgs, addQ, addA }
})
