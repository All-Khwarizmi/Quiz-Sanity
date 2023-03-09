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
  answerD: string;
  memo: {
    _ref: string;
    _type: string;
  };
  question: string;
  title: string;
}
interface Image {
    _type: "image"
    asset: Reference
}

interface Reference 