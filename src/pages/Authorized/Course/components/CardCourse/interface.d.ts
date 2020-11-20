import { ICourse } from "../../interface";

export interface ICardCourse {
  course: ICourse;
  handleCourseInListInBuy: (course: ICourse) => void;
  active: boolean;
}

export interface ICardCourseWrapper {
  active: boolean;
}
