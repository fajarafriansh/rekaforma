<script setup>
import { computed } from 'vue';

const props = defineProps({
  message: {
    type: String,
    default: 'THIS IS THE DEFAULT MESSAGE',
  },
  array: {
    type: Object,
    default: () => ({
      param1: 'Plus we’ve picked up plenty of awards and industry recognition',
      param2: 'Are you Ready let’s Make Something Amazing Together',
      param3: 'Trusted by over 6.000 Ambitious Brands Across the US',
      param4: 'Plus we’ve picked up plenty of awards and industry recognition',
      param5: 'Are you Ready let’s Make Something Amazing Together',
      param6: 'Trusted by over 6.000 Ambitious Brands Across the US',
    })
  },
  speed: {
    type: Number,
    default: 10,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
});

const animationSpeed = computed(() => `${props.speed}s`);
const isReversed = computed(() => props.reverse);
</script>

<template>
  <div class="marquee">
    <div
      class="marquee__content"
      :class="{ reverse: isReversed }"
      :style="{ animationDuration: animationSpeed }"
    >
      <div
        v-for="(message, index) in array"
        :key="index"
        class="flex items-center gap-12 marquee__item"
      >
        <span>{{ message }}</span><span>✼</span>
      </div>
    </div>
    <div
      class="marquee__content"
      :class="{ reverse: isReversed }"
      :style="{ animationDuration: animationSpeed }"
    >
      <div
        v-for="(message, index) in array"
        :key="index + 1000"
        class="flex items-center gap-12 marquee__item"
      >
      <span>{{ message }}</span><span>✼</span>
      </div>
    </div>
  </div>
</template>

<style>
.marquee {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
  user-select: none;
  display: flex;
  gap: var(--gap);
  --gap: 3rem;
}

.marquee__content {
  flex-shrink: 0;
  display: flex;
  justify-content: flex-start;
  min-width: 100%;
  gap: var(--gap);
  animation: scroll linear infinite;
}

.marquee__item {
  white-space: nowrap;
  font-size: var(--baseFontSize);
  margin-right: 1px;
}

@media (max-width: 600px) {
  .marquee__item {
    font-size: calc(var(--baseFontSize) * 0.5);
  }
}

@media (min-width: 601px) and (max-width: 1024px) {
  .marquee__item {
    font-size: calc(var(--baseFontSize) * 0.75);
  }
}

@media (min-width: 1025px) {
  .marquee__item {
    font-size: calc(var(--baseFontSize) * 2);
  }
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

.marquee__content.reverse {
  animation: scrollReverse linear infinite;
}

@keyframes scrollReverse {
  from {
    transform: translateX(calc(-100% - var(--gap)));
  }

  to {
    transform: translateX(0);
  }
}
</style>
