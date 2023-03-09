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
  description: Block[];
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

interface Reference {
    _ref: string
    _type: 'reference'
}
interface Reference {
    _ref: string
    _type: 'reference'
}

interface Slug {
    _type: 'Slug'
    current: string
}

interface Block {
  _key: string;
  _type: 'block'
  children: Span[]
  markdefs: any[]
  style: 'normal' | "h1" | 'h2' | "h3" | "h4" | "blockquote"
}

interface Span {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}

interface Category {
    description: string
    title: string
}