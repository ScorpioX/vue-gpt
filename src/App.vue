<script setup>
import { ref } from 'vue'
import MsgList from '@/components/MsgList.vue'
import { useMsgsStore } from '@/store/msgs'

const store = useMsgsStore()
const val = ref('')

function addQ() {
  if (!val.value) return
  store.addQ(val.value)
  val.value = ''
}
</script>

<template>
  <div class="container">
    <div id="header">Vue-GPT Demo</div>
    <MsgList />
    <div id="entry">
      <nut-textarea v-model="val" limit-show :max-length="1000" rows="4" />
      <nut-button type="info" shape="square" @click="addQ">提问</nut-button>
    </div>
  </div>
</template>

<style scoped>
.container {
  @apply max-w-96 m-auto bg-white h-full flex flex-col;
}

#header {
  @apply h-12 bg-slate-100 text-center leading-10 font-bold shadow z-10;
}

#entry {
  @apply h-32 bg-slate-100 p-2 flex gap-2;
}
</style>
