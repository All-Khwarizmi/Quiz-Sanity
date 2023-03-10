import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

const getTheme = async () => {
  const { theme } = (await import(
  // @ts-expect-error -- TODO setup themer.d.ts to get correct typings
  'https://themer.sanity.build/api/hues?preset=rosabel&primary=ed2555;600&transparent=9d8966;600'
)) as { theme: import('sanity').StudioTheme };
return theme
}


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
export default defineConfig({
  basePath: '/studio',
  name: 'Quiz_Sanity',
  title: 'Quiz',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  theme,
  
});
