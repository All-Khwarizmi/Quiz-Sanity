import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'classe',
  title: 'Classe',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'question',
      title: 'Question',
      type: 'array',
      of: [{ type: 'question' }],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
