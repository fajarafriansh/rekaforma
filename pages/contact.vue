<script setup>
definePageMeta({
  layout: "blog",
});
</script>

<template>
  <div class="container mx-auto">
    <SectionsPageHeader>
      <template #title>{{ $t("contact.title") }}</template>
      <template #subtitle>
        <p>{{ $t("contact.description") }}</p>
      </template>
    </SectionsPageHeader>
    <div class="pb-24 mt-8">
      <div class="flex flex-col lg:flex-row">
        <div class="w-full">
          <div
            class="bg-white divide-y divide-gray-200 shadow rounded-xl dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 dark:bg-gray-900 form-bg"
          >
            <div class="flex flex-col w-full px-4 py-5 space-y-6 sm:p-8">
              <div class="space-y-6">
                <UFormGroup label="Subject of Enquiry" required>
                  <UInput placeholder="Enquiry Subject" />
                </UFormGroup>
                <UFormGroup label="Name" required>
                  <UInput placeholder="Your Name" />
                </UFormGroup>
                <UFormGroup label="Company" required>
                  <UInput placeholder="Your Organization" />
                </UFormGroup>
                <UFormGroup label="Your Enquiry" required>
                  <UTextarea placeholder="Tell us about your enquiry" />
                </UFormGroup>
                <UButton
                  size="sm"
                  color="gray"
                  variant="solid"
                  label="Send message"
                >
                  <template #leading>
                    <Icon name="ph:paper-plane-right-duotone" size="20px" />
                  </template>
                </UButton>
              </div>
            </div>
          </div>
        </div>
        <UDivider
          label="OR"
          orientation="vertical"
          :ui="{ wrapper: { base: 'w-[40%]' } }"
        />
        <div class="flex flex-col items-start justify-center w-full"></div>
      </div>
    </div>
  </div>
</template>
