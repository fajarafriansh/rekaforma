<script setup lang="ts">
const props = defineProps({
  client: {
    type: String,
  },
  location: {
    type: String,
  },
  start: {
    type: String,
  },
  completion: {
    type: String,
  },
  siteArea: {
    type: Number,
  },
  floorArea: {
    type: Number,
  },
  services: {
    type: Array,
  },
});
</script>

<template>
  <dl class="space-y-4 project__info">
    <div v-if="props.client">
      <dt>Client</dt>
      <dd>{{ props.client }}</dd>
    </div>
    <div v-if="props.location">
      <dt>Location</dt>
      <dd>{{ props.location }}</dd>
    </div>
    <div v-if="props.start || $props.completion">
      <dt>Start / Completion</dt>
      <dd>{{ props.start }} /</dd>
    </div>
    <div v-if="props.siteArea">
      <dt>Site Area</dt>
      <dd>{{ props.siteArea }} <span>sqm</span></dd>
    </div>
    <div v-if="props.floorArea">
      <dt>Floor Area</dt>
      <dd>{{ props.floorArea }} <span>sqm</span></dd>
    </div>
    <div v-if="props.services?.length">
      <dt>Services</dt>
      <dd class="">
        <span v-for="service in props.services">{{ service }}</span>
      </dd>
    </div>
  </dl>
</template>

<style>
.project__info dt {
  @apply font-semibold text-gray-900 dark:text-white;
}

.project__info dd span:after {
  content: ", ";
}

.project__info dd span:last-child:after {
  content: "";
}
</style>
