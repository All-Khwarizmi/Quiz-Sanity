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
    publishedAt: '2023-03-08T16:56:00.000Z',
    question: [ [Object], [Object] ],
    slug: { _type: 'slug', current: 'first-memo' }
  
}