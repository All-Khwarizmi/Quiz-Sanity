# Welcome to Codice 🥶
Are you ready to ice your code interviews? 🚀


<img src="https://ik.imagekit.io/montresor/Recal_docs/quizoo.png?updatedAt=1679913748124" alt="Landing page of Recal" width="500">


### Sanity studio
[Boucher for sanity boost ](https://www.sanity.io/sonny)

[Next-sanity for embeded studio (github) ](https://github.com/sanity-io/next-sanity#next-sanity-running-groq-queries)

[Next-sanity for embeded studio ](https://www.npmjs.com/package/next-sanity?activeTab=readme#next-sanitystudio)

[Studio customization docs](https://www.sanity.io/docs/customization)

[Studio customization GUI](https://themer.sanity.build/?preset=rosabel&primary=ed2555;600&transparent=9d8966;600#/movies/desk)

const {theme} = (await import(
  // @ts-expect-error -- TODO setup themer.d.ts to get correct typings
  'https://themer.sanity.build/api/hues?preset=rosabel&primary=ed2555;600&transparent=9d8966;600'
)) as {theme: import('sanity').StudioTheme}

### Learn GROQ
[Learn GROQ in 45 minutes ](https://hdoro.dev/learn-groq)

[GROQ of Thrones ](https://groq-of-thrones.netlify.app/)
### GROQ Query
[query-cheat-sheet](https://www.sanity.io/docs/query-cheat-sheet)

[GROQ of Thrones ](https://groq-of-thrones.netlify.app/)

### Types inference plugins

[sanity-typed-schema-builder ](https://www.sanity.io/plugins/sanity-typed-schema-builder)
[Sanity-codegen](https://www.sanity.io/plugins/sanity-codegen)

### Errors
TypeError: Cannot read properties of undefined (reading '0')

This happend because we did not know how data comming from the API was structured and we used [0] to access data in the array
So in order to avoid this just add type definitions so that 
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

