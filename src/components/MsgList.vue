<script setup>
import { ref, onMounted } from 'vue'
import { useMsgsStore } from '@/store/msgs'
const store = useMsgsStore()

const box = ref(null)
const list = ref(null)

onMounted(() => {
  const callback = () => {
    box.value.scrollTo(0, box.value.scrollHeight)
  }

  const observer = new MutationObserver(callback)
  observer.observe(list.value, { childList: true })
})
</script>

<template>
  <div class="box" ref="box">
    <div class="list" ref="list">
      <div class="bubble" :class="r.from" v-for="r in store.msgs.list">
        {{ r.content }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  @apply flex-1 justify-end overflow-auto scroll-smooth;
}
.list {
  @apply flex flex-col justify-end min-h-full overflow-auto bg-slate-50;

  .bubble {
    @apply p-2 m-2 rounded-md relative bg-white;
    border: 1px solid #ccc;
    &:before,
    &:after {
      content: '';
      @apply absolute w-12 h-8 top-0;
      background: center no-repeat;
    }

    &.gpt {
      @apply ml-12;
      &:before {
        left: -48px;
        background-image: url(../assets/gpt.svg);
      }
    }
    &.me {
      @apply mr-12;
      &:after {
        right: -48px;
        background-image: url(../assets/user.svg);
      }
    }
  }
}
</style>
