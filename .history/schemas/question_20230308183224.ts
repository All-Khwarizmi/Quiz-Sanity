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
      name: 'question',
      title: 'Question',
      type: 'string',
    }),
    defineField({
      name: 'answerA',
      title: 'AnswerA',
      type: 'string',
    }),
    defineField({
      name: 'answerB',
      title: 'AnswerB',
      type: 'string',
    }),
    defineField({
      name: 'answerC',
      title: 'AnswerC',
      type: 'string',
    }),
    defineField({
      name: 'answerD',
      title: 'AnswerD',
      type: 'string',
    }),
    defineField({
      name: 'answerCorrect',
      title: 'AnswerCorrect',
      type: 'string',
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
