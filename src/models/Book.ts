export interface Book {
  title: string;
  author: string;
  price: number;
}
export interface BookWithId extends Book {
  bookId: number;
}
