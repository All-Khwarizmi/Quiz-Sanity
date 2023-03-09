type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Memo extends Base {
    classe: Classe
    description: Description[]
    name: string
    publishedAt: string,
    question: Question[],
    slug: Slug
  
}
interface Question extends Base {
  _key: string;
  classe: Classe;
  description: Description[];
  name: string;
  publishedAt: string;
  question: Question[];
  slug: Slug;
  _key: string;
  answerA: string;
  answerB: string;
  answerC: string;
  answerCorrect: string;
  answerD: 'John';
  memo: {
    _ref: 'bf773788-d68d-41eb-a8d7-7951960fbe29';
    _type: 'reference';
  };
  question: "What's my name?";
  title: 'question';
}