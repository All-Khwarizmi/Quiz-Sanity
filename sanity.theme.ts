
import { buildLegacyTheme, defineConfig } from 'sanity';

const props = {
  '--my-white': '#fff',
  '--my-black': '#1a1a1a',
  '--my-blue': '#4285f4',
  '--my-blue2': '#030369',
  '--my-red': '#db4437',
  '--my-yellow': '#f4b400',
  '--my-green': '#0f9d58',
  '--my-gray': '#383636',
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--my-gray'],
  '--white': props['--my-white'],

  '--gray': '#f4b400',
  '--gray-base': '#4285f4',

  '--component-bg': props['--my-black'],
  '--component-text-color': props['--my-white'],

  /* Brand */
  '--brand-primary': props['--my-blue'],

  // Default button
  '--default-button-color': props['--my-blue2'],
  '--default-button-primary-color': props['--my-blue'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  /* State */
  '--state-info-color': props['--my-blue'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  /* Navbar */
  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--my-green'],
});



// The other way to customize the studio does not work because of webpack error

/* export const getTheme = async () => {
  const { theme } = (await import(
    // @ts-expect-error -- TODO setup themer.d.ts to get correct typings
    'https://themer.sanity.build/api/hues?preset=rosabel&primary=ed2555;600&transparent=9d8966;600'
  )) as { theme: import('sanity').StudioTheme };
  return theme;
};
export const theme = await getTheme();
 */