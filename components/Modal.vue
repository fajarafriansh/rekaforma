<script setup>
import { ref } from "vue"
import { onClickOutside } from '@vueuse/core'
import { useMagicKeys, whenever } from '@vueuse/core'

const props = defineProps({
  isOpened: Boolean
})

const emit = defineEmits(['modal-close'])

const target = ref(null)
onClickOutside(target, () => emit('modal-close'))

const { ctrl_m, escape } = useMagicKeys()
whenever([ctrl_m, escape], () => emit('modal-close'))
</script>

<template>
  <div v-if="isOpened" class="modal-mask">
    <div class="modal-container" ref="target">
      <div class="modal-header">
        <slot name="header"> default header </slot>
      </div>
      <div class="modal-body">
        <slot name="content"> default content </slot>
      </div>
      <div class="modal-footer">
        <slot name="footer">
          <div>
            <button @click.stop="emit('modal-close')">Submit</button>
          </div>
        </slot>
      </div>
    </div>
    <!-- <div class="modal-wrapper">
    </div> -->
  </div>
</template>

<style>
.modal-mask {
  @apply fixed flex flex-col top-0 left-0 w-screen h-screen z-50 bg-grayscale-2/75 backdrop-blur-sm p-4 md:p-[10vh] lg:p-[12vh]
}
.modal-container {
  @apply w-full mx-auto max-w-[758px] flex flex-col rounded-md bg-white shadow-xl
}
</style>
