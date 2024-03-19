export const datetimeFormats = {
  "en": {
    // 👇 Give a key for each format...
    short: {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
    // We can have as many formats here as
    // want e.g. long, footer_copyright, etc.
  },
  "id": {
    // 👇 ...use the same keys for each locale
    short: {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
  },
} as const // 👈 Cast to avoid TypeScript errors