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
interface Memo extends Base {
    classe: Classe
    description: Description[]
    name: string
    publishedAt: string,
    question: Question[],
    slug: Slug
  
}