import { IClass } from "../../interface";

export interface ICardClass {
  classRoom: IClass;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<IClass>>;
}

export interface ICardWrapper {
  active: boolean;
}
