import { ClassElement } from "typescript";

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Memo extends Base {
    classe: ClassElement
}