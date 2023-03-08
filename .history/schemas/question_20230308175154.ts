import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'question',
  title: 'Question',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'memo',
      title: 'Memo',
      type: 'reference',
      to: { type: 'memo' },
    }),
   
    defineField({
      name: 'answerA',
      title: 'AnswerA',
      type: 'blockContent',
    }),
    defineField({
      name: 'answerB',
      title: 'AnswerB',
      type: 'blockContent',
    }),
    defineField({
      name: 'answerC',
      title: 'AnswerC',
      type: 'blockContent',
    }),
    defineField({
      name: 'answerD',
      title: 'AnswerD',
      type: 'blockContent',
    }),
    defineField({
      name: 'AnswerCorrect',
      title: 'Answer',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'memo.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { memo } = selection;
      return { ...selection, subtitle: memo && `by ${memo}` };
    },
  },
});
