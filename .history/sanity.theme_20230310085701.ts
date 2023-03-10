const getTheme = async () => {
  const { theme } = (await import(
    // @ts-expect-error -- TODO setup themer.d.ts to get correct typings
    'https://themer.sanity.build/api/hues?preset=rosabel&primary=ed2555;600&transparent=9d8966;600'
  )) as { theme: import('sanity').StudioTheme };
  return theme;
};
const theme = await getTheme();
