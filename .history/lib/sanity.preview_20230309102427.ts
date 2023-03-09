import { definePreview } from 'next-sanity/preview';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!; // "pv8y60vp"
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!; // "production"

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`);
}
export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
